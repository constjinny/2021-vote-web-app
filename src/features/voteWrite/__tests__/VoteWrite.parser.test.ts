import UserProfile from "../../../assets/images/imageList";

import { VoteWriteParser, VoteWriteToAPIParser } from "../VoteWrite.parser";

const testUserData = {
  id: "jinny",
  nick_name: "jinny",
  profile_url: UserProfile.jinny,
};

const testAPIData = {
  author: testUserData,
  close_date: 1624060980000,
  open_date: 1623974580000,
  vote_id: "b830191fdi",
  vote_name: "테스트 투표",
  vote_options: [
    {
      option_id: "b830191fdi-item1",
      option_value: "투표 항목",
      selected_ids: [],
    },
  ],
};

const testModifyData = {
  closeDate: "2021-06-19",
  openDate: "2021-06-18",
  voteId: "b830191fdi",
  voteName: "테스트 투표",
  voteOptions: ["투표 항목"],
};

const testSaveData = {
  author: { id: "jinny", nick_name: "jinny", profile_url: "jinny_profile.png" },
  close_date: 1624028400000,
  open_date: 1623942000000,
  vote_id: "b830191fdi",
  vote_name: "테스트 투표",
  vote_options: [
    {
      option_id: "b830191fdi-option0",
      option_value: "투표 항목",
      selected_ids: [],
    },
  ],
};

test("parsed voteWriteData", () => {
  expect(VoteWriteParser(testAPIData)).toMatchObject(
    expect.objectContaining(testModifyData)
  );
});

test("parsed voteWriteToAPIData", () => {
  expect(VoteWriteToAPIParser(testUserData, testModifyData)).toMatchObject(
    expect.objectContaining(testSaveData)
  );
});
