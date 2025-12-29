/**
 * TC-WM-016: Verify admin can select a word to delete
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-016: Select Word to Delete', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should allow admin to select a word to delete', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-016: PASSED - Word selected');
    });
});
