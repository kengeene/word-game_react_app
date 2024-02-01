import {
  flattenArray,
  randomizeArray,
  unflattenArray,
} from "../../utils/array.js";

const sampleArray = {
  groupOne: ["one", "two", "three"],
  groupTwo: ["four", "five", "six"],
  groupThree: ["seven", "eight", "nine"],
  groupFour: ["ten", "eleven", "tweleve"],
};
describe("Array helper functions", () => {
  test("Should be able to flatten array", () => {
    const flattenedArray = flattenArray(sampleArray);
    expect(flattenedArray).not.toHaveProperty("groupOne");
    expect(flattenedArray).not.toHaveProperty("groupTwo");
    expect(flattenedArray).not.toHaveProperty("groupThree");
    expect(flattenedArray).not.toHaveProperty("groupFour");
    expect(flattenedArray).toHaveLength(12);
  });

  test("Should be able to randomize array values", () => {
    const randomizedArray = randomizeArray(flattenArray(sampleArray));
    expect(randomizedArray).toHaveLength(12);
    expect(randomizedArray).toEqual(
      expect.arrayContaining(flattenArray(sampleArray))
    );
  });

  test("Should be able to unflatten array", () => {
    const unflattenedArray = unflattenArray(
      randomizeArray(flattenArray(sampleArray))
    );
    expect(unflattenedArray).toHaveLength(4);
  });
});
