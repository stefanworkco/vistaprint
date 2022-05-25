import ChristmasCards from "../../pageobjects/christmasCards.page";

describe("Christmas cards - Upload your photo sidebar", () => {

  it("Preview button text", () => {
    ChristmasCards.open();
    ChristmasCards.previewButton.waitForDisplayed();
    expect(ChristmasCards.previewButton).toHaveText("Preview with your photo");
  });

  it("Click on Preview button to opens sidebar", () => {
    ChristmasCards.previewButton.click();
    expect(ChristmasCards.uploadSidebar).toBeClickable();
    expect(ChristmasCards.uploadButton).toHaveText("Upload photo");
    expect(ChristmasCards.privacyButton).toHaveText("Privacy & Cookie Policy");
    expect(ChristmasCards.privacyButton).toHaveAttr("href", "https://www.vistaprint.ca/privacy-policy")
  });

  it("Close sidebar", () => {
    ChristmasCards.closeButton.click();
    expect(ChristmasCards.previewButton).toBeDisplayed();
  });

  it("Open preview sidebar and upload photo", () => {
    ChristmasCards.previewButton.click();
    ChristmasCards.uploadButton.waitForDisplayed();
    ChristmasCards.attachDocument('example');
    expect(ChristmasCards.clearPreviewButton).toBeDisplayed();
    expect(ChristmasCards.clearPreviewButton).toHaveText("Clear preview photo");
  });

});
