/**
 * TC-REV-012: Verify amount input field is displayed
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-012: Amount Input Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display amount input field', async () => {
        const amountInput = await $(WithdrawalObject.form.amountInput);
        await expect(amountInput).toBeDisplayed();
        console.log('TC-REV-012: PASSED');
    });
});
