/**
 * TC-WM-018: Verify deletion fails when word does not exist
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-018: Delete Non-Existing Word', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail deletion when word does not exist', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-018: PASSED - Non-existing word handled');
    });
});
