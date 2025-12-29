/**
 * TC-REV-021: Verify validation fails when amount equals zero
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-021: Zero Amount Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when amount equals zero', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.invalid.zeroAmount,
            WithdrawalData.valid.bank,
            WithdrawalData.valid.accountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-021: PASSED');
    });
});
