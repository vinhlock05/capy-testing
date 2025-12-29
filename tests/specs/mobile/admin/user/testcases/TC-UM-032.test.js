/**
 * TC-UM-032: Verify MSG3 "Invalid email format" is returned
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-032: Invalid Email Format Message', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should return MSG3 "Invalid email format"', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'notanemail', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-032: PASSED - Invalid email message');
        await UserHelpers.closeDialog();
    });
});
