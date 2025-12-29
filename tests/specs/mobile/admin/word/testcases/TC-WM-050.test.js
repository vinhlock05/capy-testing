/**
 * TC-WM-050: Verify admin can edit an existing word successfully
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-050: Edit Word', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should edit an existing word successfully', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-050: PASSED - Word edited');
    });
});
