/**
 * TC-REV-014: Verify account number input field is displayed
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-014: Account Number Input Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display account number input field', async () => {
        const accInput = await $(WithdrawalObject.form.accountNumberInput);
        await expect(accInput).toBeDisplayed();
        console.log('TC-REV-014: PASSED');
    });
});
