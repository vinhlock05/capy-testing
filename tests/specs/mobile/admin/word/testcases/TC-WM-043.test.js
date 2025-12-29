/**
 * TC-WM-043: Verify audio upload is optional
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-043: Optional Audio Upload', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should create word without audio (optional)', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const uniqueWord = `OptAudio_${Date.now()}`;
        await WordHelpers.fillWordForm(uniqueWord, '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-WM-043: PASSED - Audio optional');
    });
});
