import { shallow } from "enzyme";
import { Button } from "./Button";

const mockOnClick = jest.fn();

describe("Button", () => {
  let component: any = null;

  it("renders Button component", () => {
    component = shallow(<Button onClick={mockOnClick}>Text</Button>);
  });

  it("is Text", () => {
    expect(component.text()).toEqual("Text");
  });

  it("calls functions", () => {
    component.simulate("click");
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
