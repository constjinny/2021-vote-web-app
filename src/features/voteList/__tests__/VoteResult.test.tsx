import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../core/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { VoteResult } from "../VoteResult";

const testData = {
  author: {
    id: "jinny",
    nickName: "jinny",
    profileUrl: "jinny_profile.png",
  },
  closeDate: "2021년 6월 19일",
  isClose: true,
  isEdit: true,
  isOpen: true,
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
};

describe("VoteResult", () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  let component: any = null;

  it("renders VoteResult component", () => {
    component = shallow(
      <Provider store={store}>
        <VoteResult data={testData} />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
