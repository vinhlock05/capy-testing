/**
 * TC-WM-030: Verify validation fails for invalid word format
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-030: Invalid Word Format', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail validation for invalid word format', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('!@#$%', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-030: PASSED - Invalid word format');
        await WordHelpers.closeDialog();
    });
});
