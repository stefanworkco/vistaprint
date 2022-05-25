import ChristmasCards from "../../pageobjects/christmasCards.page";

const numberOfPictures = [ "0", "1", "2", "3+"];

describe("Christmas cards  - Number of photos filter field", () => {

  it("Number of Photos button", () => {
    ChristmasCards.open();
    ChristmasCards.numberOfPhotosButton.waitForClickable();
    expect(ChristmasCards.numberOfPhotosButton).toHaveText("Number of Photos");
  });

  it("Number of Photos filter options", () => {
    ChristmasCards.numberOfPhotosButton.click();
    for (let i = 0 ; i < ChristmasCards.numberOfPhotosList.length; i++){
      expect(ChristmasCards.numberOfPhotosList[i]).toHaveText(numberOfPictures[i]);
    }
  });

  it("Click on Number of Photos 1 and check url", () => {
    ChristmasCards.numberOfPhotosList[1].click();
    expect(browser).toHaveUrlContaining("?attributes=NumberOfPhotos_1");
    expect(ChristmasCards.numberOfPhotosList[1]).toHaveAttr("aria-selected", "true");
    expect(ChristmasCards.numberOfPhotosButton).toHaveText("Number of Photos (1)");
  });

  it("Click on Number of Photos 2 and check url for both options", () => {
    ChristmasCards.numberOfPhotosList[2].click();
    expect(browser).toHaveUrlContaining("?attributes=NumberOfPhotos_1%2CNumberOfPhotos_2");
    expect(ChristmasCards.numberOfPhotosList[2]).toHaveAttr("aria-selected", "true");
    expect(ChristmasCards.numberOfPhotosButton).toHaveText("Number of Photos (2)");
  });

});
