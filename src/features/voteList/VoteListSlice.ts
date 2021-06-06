import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "../../core/store";
import dayjs from "dayjs";

const initialChatAPI: any = {
  voteList: [],
};

export const VoteListSlice = createSlice({
  name: "voteList",
  initialState: initialChatAPI,
  reducers: {
    getLoadDataAPI() {},
  },
});

export const voteListAction = VoteListSlice.actions;
export const voteListReducer = VoteListSlice.reducer;

const selectVoteList = (state: IRootState) => state.voteListReducer.voteList;

export const chatAPISelector = {
  selectVoteList,
};
