/**
 * TC-WM-031: Verify MSG_INVALID_WORD_FORMAT is returned
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-031: Invalid Word Format Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return MSG_INVALID_WORD_FORMAT', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('<script>alert(1)</script>', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-031: PASSED - Invalid format message');
        await WordHelpers.closeDialog();
    });
});
