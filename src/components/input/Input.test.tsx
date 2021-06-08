import { shallow } from "enzyme";
import { Input } from "./Input";

const testData = {
  type: "date",
  value: "value",
  placeholder: "placeholder",
  onChange: jest.fn(),
};

const event = {
  target: { value: "value" },
};

describe("Input", () => {
  let component: any = null;

  it("renders Input component", () => {
    component = shallow(
      <Input
        type={testData.type}
        value={testData.value}
        placeholder={testData.placeholder}
        onChange={testData.onChange}
      />
    );
  });

  it("is text", () => {
    expect(component.prop("placeholder")).toBe(testData.placeholder);
    expect(component.prop("value")).toBe(testData.value);
    component.simulate("change", event);
    expect(testData.onChange).toBeCalledWith("value");
  });
});
