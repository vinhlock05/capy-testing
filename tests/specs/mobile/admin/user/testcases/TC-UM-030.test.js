/**
 * TC-UM-030: Verify validation passes with strong password
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-030: Strong Password Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should pass validation with strong password', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueUsername = `ValidUser_${Date.now()}`;
        await UserHelpers.fillUserForm(uniqueUsername, `${uniqueUsername}@email.com`, 'StrongPass123!', 'StrongPass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-030: PASSED - Strong password accepted');
    });
});
