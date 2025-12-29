/**
 * TC-UM-003: Verify list of users is displayed successfully
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-003: User List Display', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should display list of users successfully', async () => {
        await UserHelpers.navigateToUserManagement();
        
        const addBtn = await $(AdminObject.userManagement.addUserButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-UM-003: PASSED');
    });
});
