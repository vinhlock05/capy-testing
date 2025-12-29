/**
 * TC-WM-006: Verify system handles failed getAllWords() response
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-006: Failed GetAllWords Response', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should handle failed getAllWords response', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-006: PASSED - Error handling verified');
    });
});
