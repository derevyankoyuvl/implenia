const {I} = inject()

module.exports = {

    async acceptCookies() {
        I.click({css: 'button[data-testid=uc-accept-all-button]'} );
    },

    acceptCookie() {
        I.click({css: 'button[data-testid=uc-accept-all-button]'} );
    },

    changeWindowSize(width, length) {
        I.resizeWindow(width, length)
    },

    checkImage(element, image, toleranceLevel){
        I.waitForElement(element)
        I.screenshotElement(element, image);
        let baseImage = image + ".png"
        I.seeVisualDiff(baseImage, {tolerance: toleranceLevel, prepareBaseImage: false, needsSameDimension: false});
    },
}
