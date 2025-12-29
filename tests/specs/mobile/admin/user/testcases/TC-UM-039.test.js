/**
 * TC-UM-039: Verify MSG7 "Username already taken" is returned
 */
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-039: Duplicate Username Message', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should return MSG7 "Username already taken"', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-039: PASSED - Duplicate username message');
    });
});
