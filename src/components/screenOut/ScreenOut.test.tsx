import { shallow } from "enzyme";
import { ScreenOut } from "./ScreenOut";

describe("ScreenOut", () => {
  let component: any = null;

  it("renders ScreenOut component", () => {
    component = shallow(<ScreenOut>text</ScreenOut>);
  });

  it("is text", () => {
    expect(component.text()).toEqual("text");
  });
});
