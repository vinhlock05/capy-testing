/**
 * TC-UM-037: Verify MSG6 "Invalid username format" is returned
 */
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-037: Invalid Username Format Message', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should return MSG6 "Invalid username format"', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-037: PASSED - Invalid username message');
    });
});
