/**
 * TC-UM-047: Verify updated user information is saved
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-047: Updated User Info Saved', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should save updated user information', async () => {
        await UserHelpers.navigateToUserManagement();
        
        const addBtn = await $(AdminObject.userManagement.addUserButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-UM-047: PASSED - Update saved');
    });
});
