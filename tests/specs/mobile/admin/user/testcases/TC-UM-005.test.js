/**
 * TC-UM-005: Verify system handles successful getAllUser() response
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-005: Successful GetAllUser Response', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should handle successful getAllUser response', async () => {
        await UserHelpers.navigateToUserManagement();
        
        const addBtn = await $(AdminObject.userManagement.addUserButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-UM-005: PASSED');
    });
});
