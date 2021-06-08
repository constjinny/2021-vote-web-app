import { UniqueUtil } from "./unique";

test("create unique string", () => {
  const mock = UniqueUtil.UniqueString();
  expect(mock).toEqual(mock);
});
