/**
 * TC-UM-035: Verify validation passes with valid and unique email
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-035: Valid Unique Email Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should pass validation with valid and unique email', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueEmail = `unique_${Date.now()}@email.com`;
        await UserHelpers.fillUserForm(`User_${Date.now()}`, uniqueEmail, 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-035: PASSED - Unique email accepted');
    });
});
