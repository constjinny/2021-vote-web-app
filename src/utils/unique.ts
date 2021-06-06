const uniqueString = (): string =>
  (Math.random().toString(16) + "0000000").substr(2, 10);

const Unique = { uniqueString };

export default Unique;
