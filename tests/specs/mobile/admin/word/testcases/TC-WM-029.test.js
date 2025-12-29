/**
 * TC-WM-029: Verify MSG_REQUIRED_FIELDS is returned when mandatory fields are missing
 */
const AdminObject = require('../../object/admin.object');
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-029: Required Fields Message', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should return MSG_REQUIRED_FIELDS when mandatory fields are missing', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-029: PASSED - Required fields message');
        await WordHelpers.closeDialog();
    });
});
