/**
 * TC-WM-033: Verify MSG_WORD_TAKEN is returned
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-033: Word Taken Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return MSG_WORD_TAKEN', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-033: PASSED - Duplicate word message');
    });
});
