/**
 * TC-REV-015: Verify submit button is displayed
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-015: Submit Button Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display submit button', async () => {
        const btn = await $(WithdrawalObject.form.submitButton);
        await expect(btn).toBeDisplayed();
        console.log('TC-REV-015: PASSED');
    });
});
