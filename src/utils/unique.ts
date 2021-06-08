const UniqueString = (): string =>
  (Math.random().toString(16) + "0000000").substr(2, 10);

export const UniqueUtil = { UniqueString };
