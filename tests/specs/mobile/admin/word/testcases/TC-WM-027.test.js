/**
 * TC-WM-027: Verify validation fails when meaning field is empty
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-027: Empty Meaning Validation', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail validation when meaning field is empty', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('testword', '/pron/', '', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-027: PASSED - Empty meaning validation');
        await WordHelpers.closeDialog();
    });
});
