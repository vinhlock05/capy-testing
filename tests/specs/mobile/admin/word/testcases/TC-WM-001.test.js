/**
 * TC-WM-001: Verify navigation to Word Management screen
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-001: Navigation to Word Management', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should navigate to Word Management screen', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-001: PASSED');
    });
});
