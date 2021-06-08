import UserProfile from "../../../assets/images/imageList";

import VoteListParser from "../VoteList.parser";

const testUserId = "jinny";
const testVotes = [
  {
    author: {
      id: "jinny",
      nick_name: "jinny",
      profile_url: UserProfile.jinny,
    },
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
  },
];

const expected = [
  {
    author: {
      id: "jinny",
      nickName: "jinny",
      profileUrl: "jinny_profile.png",
    },
    closeDate: "2021년 6월 19일",
    isClose: false,
    isEdit: true,
    isOpen: false,
    isResultId: "",
    isSelectId: "",
    openDate: "2021년 6월 18일",
    voteId: "b830191fdi",
    voteName: "테스트 투표",
    voteOptions: [
      {
        count: 0,
        optionId: "b830191fdi-item1",
        optionValue: "투표 항목",
        selectedIds: [],
      },
    ],
  },
];

test("parsed voteListData", () => {
  expect(VoteListParser({ userId: testUserId, votesData: testVotes })).toEqual(
    expect.arrayContaining(expected)
  );
});
