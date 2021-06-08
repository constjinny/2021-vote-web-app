import { SortUtil } from "./sort";

const testArray = [
  { index: 3, value: "3" },
  { index: 1, value: "1" },
  { index: 2, value: "2" },
];

test("to sorted array", () => {
  expect(SortUtil.sortedOderValue(testArray, "index", true)).toEqual([
    { index: 1, value: "1" },
    { index: 2, value: "2" },
    { index: 3, value: "3" },
  ]);
  expect(SortUtil.sortedOderValue(testArray, "index", false)).toEqual([
    { index: 3, value: "3" },
    { index: 2, value: "2" },
    { index: 1, value: "1" },
  ]);
});
