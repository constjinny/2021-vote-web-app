import dayjs from "dayjs";
import UserProfile from "../assets/images/imageList";

const toDate = dayjs().second(0).millisecond(0);

const DummyData = {
  user: {
    id: "jinny",
    nick_name: "jinny",
    profile_url: UserProfile.jinny,
  },
  vote: [
    {
      author: {
        id: "owl",
        nick_name: "부엉님",
        profile_url: UserProfile.owl,
      },
      open_date: toDate.subtract(96, "hour").valueOf(),
      close_date: toDate.subtract(72, "hour").valueOf(),
      vote_id: "ca23065fe7",
      vote_name: "신규 프로젝트의 회의 참석여부 선택해주세요.",
      vote_options: [
        {
          option_id: "ca23065fe7-item1",
          option_value: "참석",
          selected_ids: [
            "jinny",
            "owl",
            "user1",
            "user2",
            "user3",
            "user4",
            "user5",
            "user6",
            "user7",
          ],
        },
        {
          option_id: "ca23065fe7-item2",
          option_value: "미참석",
          selected_ids: ["user8"],
        },
      ],
    },
    {
      author: {
        id: "owl",
        nick_name: "부엉님",
        profile_url: UserProfile.owl,
      },
      open_date: toDate.subtract(48, "hour").valueOf(),
      close_date: toDate.add(24, "hour").valueOf(),
      vote_id: "a830191fde",
      vote_name: "먹고싶은 회식 메뉴는?",
      vote_options: [
        {
          option_id: "a830191fde-item1",
          option_value: "김치찌개",
          selected_ids: ["jinny"],
        },
        {
          option_id: "a830191fde-item2",
          option_value: "된장찌개",
          selected_ids: ["owl", "user1", "user2"],
        },
        {
          option_id: "a830191fde-item3",
          option_value: "부대찌개",
          selected_ids: ["user3"],
        },
      ],
    },
    {
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
    },
    {
      author: {
        id: "jinny",
        nick_name: "jinny",
        profile_url: UserProfile.jinny,
      },
      open_date: toDate.add(240, "hour").valueOf(),
      close_date: toDate.add(264, "hour").valueOf(),
      vote_id: "b830191fdi",
      vote_name: "프로그램에 대한 만족도 조사",
      vote_options: [
        {
          option_id: "b830191fdi-item1",
          option_value: "매우 만족",
          selected_ids: [],
        },
        {
          option_id: "b830191fdi-item2",
          option_value: "만족",
          selected_ids: [],
        },
        {
          option_id: "b830191fdi-item3",
          option_value: "보통",
          selected_ids: [],
        },
        {
          option_id: "b830191fdi-item4",
          option_value: "불만족",
          selected_ids: [],
        },
        {
          option_id: "b830191fdi-item5",
          option_value: "매우 불만족",
          selected_ids: [],
        },
      ],
    },
  ],
};

export default DummyData;
