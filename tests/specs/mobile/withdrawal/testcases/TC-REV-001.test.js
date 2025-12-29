/**
 * TC-REV-001: Verify navigation to Profile screen from navigation bar
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-001: Navigation to Profile', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
    });

    it('should navigate to Profile screen from navigation bar', async () => {
        await WithdrawalHelpers.navigateToProfile();
        const withdrawBtn = await $(WithdrawalObject.profile.withdrawButton);
        await expect(withdrawBtn).toBeDisplayed();
        console.log('TC-REV-001: PASSED');
    });
});
