/**
 * TC-WM-005: Verify system handles successful getAllWords() response
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-005: Successful GetAllWords Response', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should handle successful getAllWords response', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-005: PASSED');
    });
});
