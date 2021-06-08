import { shallow } from "enzyme";
import { Tag } from "./Tag";

describe("Tag", () => {
  let component: any = null;

  it("renders Tag component", () => {
    component = shallow(<Tag text="text" />);
  });

  it("is text", () => {
    expect(component.text()).toEqual("text");
  });
});
