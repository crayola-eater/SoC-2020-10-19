function addObjects(...objects) {
  return objects.reduce((finalObj, obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (!finalObj.hasOwnProperty(key)) {
        finalObj[key] = value;
      } else {
        finalObj[key] += value;
      }
    }
    return finalObj;
  }, {});
}

module.exports = {
  addObjects,
};
