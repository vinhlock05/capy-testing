/**
 * TC-REV-003: Verify user profile information is displayed correctly
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-003: Profile Information Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToProfile();
    });

    it('should display user profile information correctly', async () => {
        const emailInfo = await $(WithdrawalObject.profile.emailInfo);
        await expect(emailInfo).toBeDisplayed();
        console.log('TC-REV-003: PASSED');
    });
});
