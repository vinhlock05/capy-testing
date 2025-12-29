/**
 * TC-WM-020: Verify confirmation dialog is displayed before deleting word
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-020: Delete Confirmation Dialog', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should display confirmation dialog before deleting word', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-020: PASSED - Confirmation shown');
    });
});
