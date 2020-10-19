const { judgePet } = require("./index");

/* Task 5 - write three tests to ensure the 'judgePet' function is working as you would want it to (i.e. returns to correct string).*/

test('It should tell us we have an exceptional cat when we pass in a "cat"', () => {
  const pet = {
    pet: "cAt", // Comparison should be case-insensitive
    pet_name: "abc",
  };
  expect(judgePet(pet)).toBe("abc is an exceptional cat. Full marks!");
});

test('It should disqualify us when we pass in a "non-cat"', () => {
  const pet = {
    pet: "dog",
    pet_name: "def",
  };
  expect(judgePet(pet)).toBe(
    "def is adorable! But they are no cat. Disqualified!"
  );
});

test("It should tell us that we haven't passed in a pet when we pass in nothing or a falsy value", () => {
  expect(judgePet()).toBe("No pet!");
});
