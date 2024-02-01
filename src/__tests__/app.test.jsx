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

describe("should display the correct answers at the bottom", () => {
  test("should display correct answers for the first combination", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId(/buttonone/i));
    await userEvent.click(screen.getByTestId(/buttontwo/i));
    await userEvent.click(screen.getByTestId(/buttonthree/i));
    const headingText = screen.getByTestId(/answer0/i);
    expect(headingText).toBeInTheDocument();
  });

  // Reactivate other tests after reimplementing notifications
  //   test("should display correct answers for the second combination", async () => {
  //     render(<App />);
  //     await userEvent.click(screen.getByTestId(/buttonfour/i));
  //     await userEvent.click(screen.getByTestId(/buttonfive/i));
  //     await userEvent.click(screen.getByTestId(/buttonsix/i));
  //     const headingText = screen.getByTestId(/answer1/i);
  //     expect(headingText).toBeInTheDocument();
  //   });
  //   test("should display correct answers for the third combination", async () => {
  //     render(<App />);
  //     await userEvent.click(screen.getByTestId(/buttonseven/i));
  //     await userEvent.click(screen.getByTestId(/buttoneight/i));
  //     await userEvent.click(screen.getByTestId(/buttonnine/i));
  //     const headingText = screen.getByTestId(/answer2/i);
  //     expect(headingText).toBeInTheDocument();
  //   });
  //   test("should display correct answers for the fourth combination", async () => {
  //     render(<App />);
  //     await userEvent.click(screen.getByTestId(/buttonten/i));
  //     await userEvent.click(screen.getByTestId(/buttoneleven/i));
  //     await userEvent.click(screen.getByTestId(/buttontweleve/i));
  //     const headingText = screen.getByTestId(/answer3/i);
  //     expect(headingText).toBeInTheDocument();
  //   });
});
