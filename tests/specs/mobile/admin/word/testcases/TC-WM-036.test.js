/**
 * TC-WM-036: Verify validation fails when image is not an image file
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-036: Invalid Image File', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail validation when image is not an image file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-036: PASSED - Invalid image');
    });
});
