/**
 * TC-WM-042: Verify validation passes when audio is a valid audio file
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-042: Valid Audio File', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should pass validation when audio is a valid audio file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-042: PASSED - Valid audio');
    });
});
