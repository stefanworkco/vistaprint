import ChristmasCards from "../../pageobjects/christmasCards.page";

const embossedFoil = ["Show All Designs", "Gold Foil", "Silver Foil", "Glitter Foil"];

describe("Christmas cards - Embossed Foil", () => {

  it("Embossed Foil button", () => {
    ChristmasCards.open();
    ChristmasCards.foilColorButton.waitForClickable();
    expect(ChristmasCards.foilColorButton).toHaveText("Embossed Foil");
  });

  it("Embossed Foil filter options", () => {
    ChristmasCards.foilColorButton.click();
    
    for (let i = 0 ; i < ChristmasCards.embossedFoilList.length; i++){
      if (i == 0){
        expect(ChristmasCards.embossedFoilList[i]).toHaveAttr("aria-selected", "true");
      } else {
        expect(ChristmasCards.embossedFoilList[i]).toHaveAttr("aria-selected", "false");
      }
      expect(ChristmasCards.embossedFoilList[i]).toHaveText(embossedFoil[i]);
    }
  });

  it("Embossed Foil - select option 1 = Gold Foil", () => {
    ChristmasCards.embossedFoilList[1].click();
    expect(ChristmasCards.embossedFoilList[0]).toHaveAttr("aria-selected", "false");
    expect(ChristmasCards.embossedFoilList[1]).toHaveAttr("aria-selected", "true");
    expect(browser).toHaveUrlContaining("?attributes=Foil%20Color_Gold");
  });

});
