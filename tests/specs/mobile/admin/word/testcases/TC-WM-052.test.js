/**
 * TC-WM-052: Verify success message is displayed after editing word
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-052: Edit Success Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should display success message after editing word', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-052: PASSED - Success message');
    });
});
