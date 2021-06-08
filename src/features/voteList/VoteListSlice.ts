import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import VoteListParser from "./VoteList.parser";
import { IVoteListStateProps } from "./type";
import { IRootState } from "../../core/store";
import { UserAPI, VoteAPI } from "../../api/sample.api";

const initialVoteList: IVoteListStateProps = {
  userId: "",
  voteList: [],
};

export const VoteListSlice = createSlice({
  name: "voteList",
  initialState: initialVoteList,
  reducers: {
    // NOTI: 필요한 값을 파서를 통해 추려 사용
    getLoadData(state) {
      const userData = UserAPI.getUser();
      const votesData = VoteAPI.getVotes();

      const parsed = VoteListParser({ userId: userData.id, votesData });

      if (parsed) {
        state.userId = userData.id;
        state.voteList = parsed;
      }
    },
    updateVoteOptionCount(
      state,
      action: PayloadAction<{
        userId: string;
        voteId: string;
        optionId: string;
      }>
    ) {
      const userData = UserAPI.getUser();
      const updateVoteData = VoteAPI.updateVoteOptionCount(action.payload);

      const parsed = VoteListParser({
        userId: userData.id,
        votesData: updateVoteData,
      });

      if (parsed) {
        state.voteList = parsed;
      }
    },
    deleteVote(state, action: PayloadAction<string>) {
      const userData = UserAPI.getUser();
      const updateVoteData = VoteAPI.deleteVoteItem(action.payload);

      const parsed = VoteListParser({
        userId: userData.id,
        votesData: updateVoteData,
      });

      if (parsed) {
        state.voteList = parsed;
      }
    },
  },
});

export const voteListAction = VoteListSlice.actions;
export const voteListReducer = VoteListSlice.reducer;

const selectUserId = (state: IRootState) => state.voteListReducer.userId;

const selectVoteList = (state: IRootState) => state.voteListReducer.voteList;

export const voteListSelector = {
  selectUserId,
  selectVoteList,
};
