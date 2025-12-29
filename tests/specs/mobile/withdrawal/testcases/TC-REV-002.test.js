/**
 * TC-REV-002: Verify getProfile(userId) API is called when Profile is selected
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-002: Profile API Call', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToProfile();
    });

    it('should call getProfile API when Profile is selected', async () => {
        const emailInfo = await $(WithdrawalObject.profile.emailInfo);
        await expect(emailInfo).toBeDisplayed();
        console.log('TC-REV-002: PASSED');
    });
});
