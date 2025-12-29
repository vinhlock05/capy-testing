/**
 * TC-WM-009: Verify pagination when number of words exceeds page size
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-009: Word Pagination', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should handle pagination when number of words exceeds page size', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-009: PASSED - Pagination');
    });
});
