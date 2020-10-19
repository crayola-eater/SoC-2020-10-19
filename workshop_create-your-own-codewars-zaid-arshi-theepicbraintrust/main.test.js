//👉 Write your tests below here:
const { addObjects } = require("./main");

test("should add two objects and give us back { a: 2, b: 2 }", () => {
  const actual = addObjects({ a: 1, b: 1 }, { a: 1, b: 1 });
  expect(actual).toStrictEqual({ a: 2, b: 2 });
});

test("should give us back { a: 1, b: 1 } if we pass in this one object", () => {
  const actual = addObjects({ a: 1, b: 1 });
  expect(actual).toStrictEqual({ a: 1, b: 1 });
});

test("should give us { a: 2, c: 3, d: 4, e: 5 } if we pass in these three objects", () => {
  const actual = addObjects({ a: 1, c: 1 }, { c: 2, a: 0 }, { d: 4, e: 5 });
  expect(actual).toStrictEqual({ a: 1, c: 3, d: 4, e: 5 });
});

test("should give us { a: 1, z: -15, s: 3 } and handle negative numbers correctly", () => {
  const actual = addObjects({ a: 1, z: -5 }, { z: -10, s: 3 });
  expect(actual).toStrictEqual({ a: 1, z: -15, s: 3 });
});
