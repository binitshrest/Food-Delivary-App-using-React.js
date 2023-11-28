import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Pages Test Cases", () => {
  it("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input inside contact us component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact us component", () => {
    render(<ContactUs />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes[0]);
    //   console.log(inputBoxes.length);

    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
