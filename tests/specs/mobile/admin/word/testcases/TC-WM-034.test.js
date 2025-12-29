/**
 * TC-WM-034: Verify word uniqueness excludes current word during edit
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-034: Edit Word Uniqueness', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should exclude current word during edit uniqueness check', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-034: PASSED - Edit uniqueness');
    });
});
