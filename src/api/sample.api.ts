import DummyData from "../data/sample.data";
import { IVotesAPIProps, IVoteOptionAPIProps } from "./type";

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

const updateVotes = (newVote: IVotesAPIProps) => {
  const getData = sessionStorage.getItem(DataType.VOTE_DATA);
  if (getData) {
    const parsed = JSON.parse(getData);
    const updated = [...parsed, newVote];

    sessionStorage.setItem(DataType.VOTE_DATA, JSON.stringify(updated));

    const getUpdateData = getVotes();
    return getUpdateData;
  }
  return null;
};

const getVoteItem = (id: string) => {
  const getData = sessionStorage.getItem(DataType.VOTE_DATA);
  if (getData) {
    const parsed = JSON.parse(getData);
    const filtered = parsed.find((vote: IVotesAPIProps) => vote.vote_id === id);
    return filtered;
  }
  return null;
};

const updateVoteOptionCount = (data: {
  userId: string;
  voteId: string;
  optionId: string;
}) => {
  if (data) {
    const { userId, voteId, optionId } = data;
    const getData = getVotes();

    const updateData = getData.map((vote: IVotesAPIProps) => {
      const { vote_id, vote_options } = vote;

      if (vote_id === voteId) {
        const updateVoteOptions = vote_options.map(
          (option: IVoteOptionAPIProps) => {
            const { option_id, selected_ids } = option;
            if (option_id === optionId) {
              return { ...option, selected_ids: [...selected_ids, userId] };
            } else {
              return option;
            }
          }
        );
        return { ...vote, vote_options: updateVoteOptions };
      } else {
        return vote;
      }
    });

    sessionStorage.setItem(DataType.VOTE_DATA, JSON.stringify(updateData));

    const getUpdateData = getVotes();
    return getUpdateData;
  }
  return null;
};

const CommAPI = { setInitData };
const UserAPI = { getUser };
const VoteAPI = { getVotes, updateVotes, getVoteItem, updateVoteOptionCount };

export { CommAPI, UserAPI, VoteAPI };
