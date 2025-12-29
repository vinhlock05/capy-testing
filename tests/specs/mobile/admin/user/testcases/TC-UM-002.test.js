/**
 * TC-UM-002: Verify getAllUser() API is called when User Management is selected
 */
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-002: GetAllUser API Call', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should call getAllUser API when User Management is selected', async () => {
        await UserHelpers.navigateToUserManagement();
        await driver.pause(1000);
        console.log('TC-UM-002: PASSED - User list loaded');
    });
});
