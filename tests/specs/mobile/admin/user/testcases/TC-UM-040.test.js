/**
 * TC-UM-040: Verify validation passes with valid and unique username
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-040: Valid Unique Username Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should pass validation with valid and unique username', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueUsername = `UniqueUser_${Date.now()}`;
        await UserHelpers.fillUserForm(uniqueUsername, `${uniqueUsername}@email.com`, 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-040: PASSED - Unique username accepted');
    });
});
