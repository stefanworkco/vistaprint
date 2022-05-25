import ChristmasCards from "../../pageobjects/christmasCards.page";

describe("Christmas cards overview", () => {

  it("Christmas cards page page title and header", () => {
    ChristmasCards.open();
    ChristmasCards.pageTitle.waitForDisplayed();
    expect(browser).toHaveTitle("Christmas Cards 2022, Holiday Cards | VistaPrint")
    expect(ChristmasCards.pageTitle).toHaveText("Custom Holiday & Christmas Cards");
  });

});
