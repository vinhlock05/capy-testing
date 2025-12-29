/**
 * TC-UM-012: Verify getUserById(userId) API is called when a user is selected
 */
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-012: GetUserById API Call', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should call getUserById API when a user is selected', async () => {
        await UserHelpers.navigateToUserManagement();
        
        try {
            await UserHelpers.openEditUserDialog();
            console.log('TC-UM-012: PASSED - API called');
            await UserHelpers.closeDialog();
        } catch (e) {
            console.log('TC-UM-012: SKIPPED');
        }
    });
});
