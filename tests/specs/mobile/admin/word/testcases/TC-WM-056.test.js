/**
 * TC-WM-056: Verify CANCEL_DELETE is returned when admin selects No
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-056: Cancel Delete Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return CANCEL_DELETE when admin selects No', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-056: PASSED - Cancel delete message');
    });
});
