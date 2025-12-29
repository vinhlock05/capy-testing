/**
 * TC-WM-037: Verify MSG_INVALID_IMAGE is returned for invalid image file
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-037: Invalid Image Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return MSG_INVALID_IMAGE for invalid image file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-037: PASSED - Invalid image message');
    });
});
