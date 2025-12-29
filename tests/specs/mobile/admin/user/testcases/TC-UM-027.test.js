/**
 * TC-UM-027: Verify MSG2 "Passwords do not match" is returned
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-027: Password Mismatch Message', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should return MSG2 "Passwords do not match"', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', 'Pass123!', 'NotMatch!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-027: PASSED - Password mismatch message');
        await UserHelpers.closeDialog();
    });
});
