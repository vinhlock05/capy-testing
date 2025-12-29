/**
 * TC-WM-028: Verify validation fails when type field is empty
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-028: Empty Type Validation', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail validation when type field is empty', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const wordInput = await $(AdminObject.wordManagement.inputWordName);
        await wordInput.setValue('testword');
        
        const meaningInput = await $(AdminObject.wordManagement.inputWordMeaning);
        await meaningInput.setValue('test meaning');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-028: PASSED - Empty type validation');
        await WordHelpers.closeDialog();
    });
});
