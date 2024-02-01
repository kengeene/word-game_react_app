import { render, screen } from "@testing-library/react";
import App from "../App.js";
import userEvent from "@testing-library/user-event";

describe("Game Page", () => {
  test("Example 1 renders successfully", async () => {
    render(<App />);
    const headingText = screen.getByTestId(/heading/i);

    expect(headingText).toBeInTheDocument();

    const logo = await screen.findByAltText(/word_game_logo/i);

    expect(logo).toBeInTheDocument();
  });

  test("Expect cllicked buttons to have selected class", async () => {
    render(<App />);

    await userEvent.click(screen.getByTestId(/buttonthree/i));
    expect(screen.getByTestId(/buttonthree/i)).toHaveClass("selected");

    //   const testValues = [
    //     "one",
    //     "two",
    //     "three",
    //     "four",
    //     "five",
    //     "six",
    //     "seven",
    //     "eight",
    //     "nine",
    //     "ten",
    //     "eleven",
    //     "tweleve",
    //   ];

    // find a way to dynamically set up tests based on input data
    //   testValues.forEach(async (value) => {
    //     test(`should test button-${value}`, async () => {
    //       const reg = new RegExp(`button-${value}`, "i");
    //       await userEvent.click(screen.getAllByTestId(reg));
    //       expect(screen.getAllByTestId(reg)).toHaveClass("selected");
    //     });
    //   });

    //   for (let i = 0; i < testValues.length; i++) {
    //     test(`should click button ${i}`, async () => {
    //       const reg = new RegExp(`button`, "i");
    //       await userEvent.click(screen.getByTestId(reg));
    //       expect(screen.getByText(reg)).toHaveClass("selected");
    //     });
    //   }
  });
});
