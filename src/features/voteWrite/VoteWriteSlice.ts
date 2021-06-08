import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IVoteWriteProps } from "./type";
import { VoteWriteParser, VoteWriteToAPIParser } from "./VoteWrite.parser";
import { IRootState } from "../../core/store";
import { UniqueUtil } from "../../utils/unique";
import { UserAPI, VoteAPI } from "../../api/sample.api";
import { isEmpty } from "lodash";

export const initialVoteWrite: IVoteWriteProps = {
  voteData: {
    openDate: "",
    closeDate: "",
    voteId: UniqueUtil.UniqueString(),
    voteName: "",
    voteOptions: ["", "", ""],
  },
  isError: false,
  isSaved: false,
};

export const VoteWriteSlice = createSlice({
  name: "voteWrite",
  initialState: initialVoteWrite,
  reducers: {
    // NOTI: 수정 타입 때 필요한 데이터를 가져온다.
    getVoteData(state, action: PayloadAction<{ voteId: string }>) {
      const { voteId } = action.payload;
      const voteData = VoteAPI.getVoteItem(voteId);

      const parsed = VoteWriteParser(voteData);

      if (parsed) {
        state.voteData.openDate = parsed.openDate;
        state.voteData.closeDate = parsed.closeDate;
        state.voteData.voteId = parsed.voteId;
        state.voteData.voteName = parsed.voteName;
        state.voteData.voteOptions = parsed.voteOptions;
      }
    },
    setVoteData(state) {
      state.voteData = initialVoteWrite.voteData;
      state.isError = initialVoteWrite.isError;
    },
    saveVoteData(state, action: PayloadAction<{ isModify: boolean }>) {
      const { isModify } = action.payload;

      const hasValues =
        Object.values(state.voteData).filter((value: any) => isEmpty(value))
          ?.length <= 0;
      const hasOptions =
        state.voteData.voteOptions.filter((value: any) => isEmpty(value))
          ?.length <= 0;

      if (hasValues && hasOptions) {
        const userData = UserAPI.getUser();
        const parsed = VoteWriteToAPIParser(userData, state.voteData);

        if (isModify) {
          VoteAPI.updateVotes(parsed);
        } else {
          VoteAPI.addVoteItem(parsed);
        }

        state.isSaved = true;
      } else {
        state.isError = true;
      }
    },
    updateVoteName(state, action: PayloadAction<string>) {
      state.voteData.voteName = action.payload || "";
    },
    updateVoteOpenDate(
      state,
      action: PayloadAction<{ openDate: string; closeDate?: string }>
    ) {
      const { openDate, closeDate } = action.payload;
      state.voteData.openDate = openDate || "";
      if (closeDate) {
        state.voteData.closeDate = closeDate || "";
      }
    },
    updateVoteCloseDate(state, action: PayloadAction<string>) {
      state.voteData.closeDate = action.payload || "";
    },
    addOptionsDate(state) {
      const newOptions = [...state.voteData.voteOptions, ""];
      state.voteData.voteOptions = newOptions;
    },
    updateOptionsDate(
      state,
      action: PayloadAction<{ value: string; index: number }>
    ) {
      const { value, index: updateIndex } = action.payload;
      const updateOptions = state.voteData.voteOptions.map(
        (vote: string, index: number) => {
          if (index === updateIndex) {
            return value;
          } else {
            return vote;
          }
        }
      );
      state.voteData.voteOptions = updateOptions;
    },
    deleteOptionsDate(state, action: PayloadAction<{ index: number }>) {
      const { index: deleteIndex } = action.payload;
      const updateOptions = state.voteData.voteOptions.filter(
        (_, index: Number) => index !== deleteIndex
      );
      state.voteData.voteOptions = updateOptions;
    },
  },
});

export const voteWriteAction = VoteWriteSlice.actions;
export const voteWriteReducer = VoteWriteSlice.reducer;

const selectVoteData = (state: IRootState) => state.voteWriteReducer.voteData;

const selectError = (state: IRootState) => state.voteWriteReducer.isError;

const selectSaved = (state: IRootState) => state.voteWriteReducer.isSaved;

export const voteWriteSelector = {
  selectVoteData,
  selectError,
  selectSaved,
};
