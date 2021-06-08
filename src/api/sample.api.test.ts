import dayjs from "dayjs";
import DummyData from "../data/sample.data";
import UserProfile from "../assets/images/imageList";

import { CommAPI, UserAPI, VoteAPI } from "./sample.api";

CommAPI.setInitData();

const toDate = dayjs().second(0).millisecond(0);

const testNewVote = {
  author: {
    id: "jinny",
    nick_name: "jinny",
    profile_url: UserProfile.jinny,
  },
  open_date: toDate.valueOf(),
  close_date: toDate.add(120, "hour").valueOf(),
  vote_id: "a830191fdi",
  vote_name: "내일 오전 회의 시간 투표합니다.",
  vote_options: [
    {
      option_id: "a830191fdi-item1",
      option_value: "오전 9시",
      selected_ids: ["user3", "user4", "user5", "user6", "user7", "user8"],
    },
    {
      option_id: "a830191fdi-item2",
      option_value: "오전 10시",
      selected_ids: ["owl", "user1", "user2"],
    },
    {
      option_id: "a830191fdi-item3",
      option_value: "오전 11시",
      selected_ids: [],
    },
  ],
};

describe("sample api", () => {
  it("getUser", () => {
    expect(UserAPI.getUser()).toEqual(expect.objectContaining(DummyData.user));
  });

  it("getVotes", () => {
    expect(VoteAPI.getVotes()).toEqual(expect.objectContaining(DummyData.vote));
  });

  it("updateVotes", () => {
    expect(VoteAPI.updateVotes(testNewVote)).toEqual(
      expect.objectContaining(DummyData.vote)
    );
  });

  it("getVoteItem", () => {
    expect(VoteAPI.getVoteItem("a830191fdi")).toEqual(
      expect.objectContaining(testNewVote)
    );
  });

  it("addVoteItem", () => {
    expect(VoteAPI.addVoteItem(testNewVote)).toEqual(
      expect.objectContaining(DummyData.vote)
    );
  });
});
