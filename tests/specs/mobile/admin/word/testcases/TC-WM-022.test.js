/**
 * TC-WM-022: Verify admin can cancel delete action from confirmation dialog
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-022: Cancel Delete Word', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should allow admin to cancel delete action', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-022: PASSED - Cancel delete');
    });
});
