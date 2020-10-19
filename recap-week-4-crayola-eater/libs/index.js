function judgePet(pet) {
  if (pet?.pet && pet?.pet_name) {
    if (pet.pet.toLowerCase() === "cat") {
      return `${pet.pet_name} is an exceptional cat. Full marks!`;
    }
    return `${pet.pet_name} is adorable! But they are no cat. Disqualified!`;
  }
  return "No pet!";
}

module.exports = { judgePet };
