/**
 * TC-WM-046: Verify input data is retained after validation error
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-046: Data Retained After Error', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should retain input data after validation error', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const testWord = 'RetainedWord';
        const wordInput = await $(AdminObject.wordManagement.inputWordName);
        await wordInput.setValue(testWord);
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        const retainedValue = await wordInput.getText();
        expect(retainedValue).toContain(testWord);
        console.log('TC-WM-046: PASSED - Data retained');
        
        await WordHelpers.closeDialog();
    });
});
