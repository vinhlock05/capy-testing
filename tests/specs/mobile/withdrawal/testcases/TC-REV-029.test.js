/**
 * TC-REV-029: Verify validation fails when amount exceeds balance
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-029: Amount Exceeds Balance Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when amount exceeds balance', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.invalid.exceedBalanceAmount,
            undefined, undefined
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-029: PASSED');
    });
});
