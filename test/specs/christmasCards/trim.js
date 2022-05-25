import ChristmasCards from "../../pageobjects/christmasCards.page";

const trim = ["Standard", "Rounded", "Scalloped Edges"];

describe("Christmas cards - Trim", () => {

  it("Trim button", () => {
    ChristmasCards.open();
    ChristmasCards.trimButton.waitForClickable();
    expect(ChristmasCards.trimButton).toHaveText("Trim");
  });

  it("Trim filter options", () => {
    ChristmasCards.trimButton.click();
    
    for (let i = 0 ; i < ChristmasCards.trimList.length; i++){
      if (i == 0){
        expect(ChristmasCards.trimList[i]).toHaveAttr("aria-selected", "true");
      } else {
        expect(ChristmasCards.trimList[i]).toHaveAttr("aria-selected", "false");
      }
      expect(ChristmasCards.trimList[i]).toHaveText(trim[i]);
    }
  });

  it("Trim - select option 1 = Rounded", () => {
    ChristmasCards.trimList[1].click();
    expect(ChristmasCards.trimList[0]).toHaveAttr("aria-selected", "false");
    expect(ChristmasCards.trimList[1]).toHaveAttr("aria-selected", "true");
    expect(browser).toHaveUrlContaining("?attributes=Trim_Rounded");
  });

});
