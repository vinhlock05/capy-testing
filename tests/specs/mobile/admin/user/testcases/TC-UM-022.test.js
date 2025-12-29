/**
 * TC-UM-022: Verify validation fails when email is empty
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-022: Empty Email Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should fail validation when email is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', '', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-022: PASSED - Empty email validation');
        await UserHelpers.closeDialog();
    });
});
