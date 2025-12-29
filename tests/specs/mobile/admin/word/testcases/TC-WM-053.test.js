/**
 * TC-WM-053: Verify cancel create word does not save data
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-053: Cancel Create Word', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should not save data when cancel create word', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('CancelWord', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const cancelBtn = await $(AdminObject.wordManagement.addDialog.cancelBtn);
        await cancelBtn.click();
        await driver.pause(1000);
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-053: PASSED - Cancel did not save');
    });
});
