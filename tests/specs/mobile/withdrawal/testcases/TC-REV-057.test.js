/**
 * TC-REV-057: Verify withdrawal with minimum allowed amount
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-057: Minimum Amount Withdrawal', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should allow withdrawal with minimum allowed amount', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            '50000', // Test Min
            WithdrawalData.valid.bank,
            WithdrawalData.valid.accountNumber
        );
        console.log('TC-REV-057: PASSED');
    });
});
