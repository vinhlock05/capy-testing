/**
 * TC-UM-001: Verify navigation to User Management screen
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-001: Navigation to User Management', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should navigate to User Management screen', async () => {
        await UserHelpers.navigateToUserManagement();
        
        const addBtn = await $(AdminObject.userManagement.addUserButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-UM-001: PASSED');
    });
});
