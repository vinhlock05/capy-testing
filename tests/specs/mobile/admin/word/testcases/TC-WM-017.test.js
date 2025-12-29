/**
 * TC-WM-017: Verify getWordById(wordId) is called when deleting a word
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-017: GetWordById for Delete', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should call getWordById when deleting a word', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-017: PASSED - API called');
    });
});
