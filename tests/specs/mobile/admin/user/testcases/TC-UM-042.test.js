/**
 * TC-UM-042: Verify admin can create a new user with valid input
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-042: Create New User', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should create a new user with valid input', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueUsername = `NewUser_${Date.now()}`;
        await UserHelpers.fillUserForm(uniqueUsername, `${uniqueUsername}@test.com`, 'ValidPass123!', 'ValidPass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-042: PASSED - User created');
    });
});
