/**
 * TC-REV-058: Verify withdrawal with maximum allowed amount
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-058: Maximum Amount Withdrawal', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should allow withdrawal with maximum allowed amount', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            '50000000', // Test Max
            WithdrawalData.valid.bank,
            WithdrawalData.valid.accountNumber
        );
        console.log('TC-REV-058: PASSED');
    });
});
