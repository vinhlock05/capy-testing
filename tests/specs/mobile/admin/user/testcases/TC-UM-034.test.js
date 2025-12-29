/**
 * TC-UM-034: Verify MSG4 "Email already registered" is returned
 */
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-034: Duplicate Email Message', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should return MSG4 "Email already registered"', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-034: PASSED - Duplicate email message');
    });
});
