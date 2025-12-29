/**
 * TC-REV-011: Verify withdrawal form is displayed when selecting Withdraw
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-011: Withdrawal Form Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display withdrawal form when selecting Withdraw', async () => {
        const amountInput = await $(WithdrawalObject.form.amountInput);
        await expect(amountInput).toBeDisplayed();
        console.log('TC-REV-011: PASSED');
    });
});
