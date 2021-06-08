import { shallow } from "enzyme";
import { Profile } from "./Profile";
import UserProfile from "../../assets/images/imageList";

const testData = {
  url: UserProfile.jinny,
  name: "jinny",
};

describe("Profile", () => {
  let component: any = null;

  it("renders Profile component", () => {
    component = shallow(<Profile url={testData.url} name={testData.name} />);
  });

  it("is text", () => {
    expect(component.find("img").prop("src")).toBe(testData.url);
    expect(component.find("img").prop("alt")).toBe(
      `${testData.name}의 프로필 사진`
    );
    expect(component.find("em").text()).toBe(testData.name);
  });
});
