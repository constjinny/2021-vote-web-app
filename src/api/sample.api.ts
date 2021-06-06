import * as DummyData from "../data/sample.data.json";

enum DataType {
  USER_DATA = "user_data",
  VOTE_DATA = "vote_data",
}

const setInitData = () => {
  sessionStorage.setItem(DataType.USER_DATA, JSON.stringify(DummyData.user));
  sessionStorage.setItem(DataType.VOTE_DATA, JSON.stringify(DummyData.vote));
};

const getUser = () => {
  const getData = sessionStorage.getItem(DataType.USER_DATA);
  if (getData) {
    const parsed = JSON.parse(getData);
    return parsed;
  }
  return null;
};

const getVotes = () => {
  const getData = sessionStorage.getItem(DataType.VOTE_DATA);
  if (getData) {
    const parsed = JSON.parse(getData);
    return parsed;
  }
  return null;
};

const CommAPI = { setInitData };
const UserAPI = { getUser };
const VoteAPI = { getVotes };

export { CommAPI, UserAPI, VoteAPI };
