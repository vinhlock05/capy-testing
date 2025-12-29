/**
 * TC-UM-041: Verify admin can open Create User screen
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-041: Open Create User Screen', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should open Create User screen', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const usernameInput = await $(AdminObject.userManagement.inputUsername);
        await expect(usernameInput).toBeDisplayed();
        console.log('TC-UM-041: PASSED - Create screen opened');
        
        await UserHelpers.closeDialog();
    });
});
