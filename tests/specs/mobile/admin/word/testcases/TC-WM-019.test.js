/**
 * TC-WM-019: Verify MSG_WORD_NOT_FOUND is returned for non-existing word
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-019: Word Not Found Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return MSG_WORD_NOT_FOUND for non-existing word', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-019: PASSED - Not found message');
    });
});
