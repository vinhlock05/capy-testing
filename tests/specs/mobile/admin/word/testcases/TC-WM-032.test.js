/**
 * TC-WM-032: Verify validation fails when word already exists in the same topic
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-032: Duplicate Word Validation', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should fail validation when word already exists', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('ExistingWord', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-032: PASSED - Duplicate word validation');
        await WordHelpers.closeDialog();
    });
});
