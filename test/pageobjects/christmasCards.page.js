import Page from "./page";

class ChristmasCards extends Page {
    constructor() {
        super('./holiday/christmas-cards');
    }
    
    get pageTitle() { return $('[elementtiming="first-meaningful-paint"]'); }
    get previewButton() { return $('[data-translation="Fly-Out Viewed"]'); }
    get uploadSidebar () { return $('//div[@class="stylized-dialog stylized-dialog-visible stylized-dialog-panel stylized-dialog-skin-full-bleed stylized-dialog-panel-capped visage-vanilla-ignore"]'); }
    get uploadButton() { return $('//span[@data-translation="Fly-Out Clicked"]'); }
    get privacyButton() { return $('//a[@data-translation="Fly-Out Clicked"]'); }
    get closeButton() { return $('//button[@data-translation="Fly-Out Closed"]'); }
    get numberOfPhotosButton() { return $('#numberofphotos'); }
    get numberOfPhotosList() { return $$('//ul[@id="listbox--listbox-input--2"]/li'); }
    get foilColorButton() { return $('#foil-color'); }
    get embossedFoilList() { return $$('//ul[@id="listbox--listbox-input--3"]/li'); }
    get trimButton() { return $('#trim'); }
    get trimList() { return $$('//ul[@id="listbox--listbox-input--4"]/li'); }
    get upload() { return $('//input[@class="styles-module--input--21zdC"]'); }
    get clearPreviewButton() { return $('//button[@data-translation="Button Clicked:Clear Photo Preview"]'); }

    attachDocument (name) {
        const path = require('path');
        const filePath = path.resolve(__dirname, `../files/${name}.png`);
        const remoteFilePath = browser.uploadFile(filePath);
        this.upload.setValue(remoteFilePath);
      }
}

export default new ChristmasCards();