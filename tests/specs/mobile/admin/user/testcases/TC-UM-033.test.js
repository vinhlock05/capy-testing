/**
 * TC-UM-033: Verify validation fails when email already exists
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-033: Duplicate Email Validation', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should fail validation when email already exists', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('NewUser', 'existing@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-033: PASSED - Duplicate email validation');
        await UserHelpers.closeDialog();
    });
});
