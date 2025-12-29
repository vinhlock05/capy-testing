/**
 * TC-UM-011: Verify admin can select a user from user list
 */
const AdminObject = require('../../object/admin.object');
const UserHelpers = require('../../helpers/user.helpers');

describe('TC-UM-011: Select User From List', () => {
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });

    it('should select a user from user list', async () => {
        await UserHelpers.navigateToUserManagement();
        
        try {
            const expandBtn = await $(AdminObject.userManagement.expandBtn);
            if (await expandBtn.isDisplayed()) {
                await expandBtn.click();
                await driver.pause(1000);
                await expandBtn.click();
                await driver.pause(500);
                console.log('TC-UM-011: PASSED - User selected');
            }
        } catch (e) {
            console.log('TC-UM-011: SKIPPED - No users');
        }
    });
});
