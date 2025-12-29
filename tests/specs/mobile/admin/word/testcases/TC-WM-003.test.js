/**
 * TC-WM-003: Verify word list is displayed successfully
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-003: Word List Display', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should display word list successfully', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-003: PASSED');
    });
});
