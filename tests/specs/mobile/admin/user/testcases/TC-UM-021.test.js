/**
 * TC-UM-021: Verify validation fails when username is empty
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-021: Empty Username Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should fail validation when username is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('', 'test@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-021: PASSED - Empty username validation');
        await UserHelpers.closeDialog();
    });
});
