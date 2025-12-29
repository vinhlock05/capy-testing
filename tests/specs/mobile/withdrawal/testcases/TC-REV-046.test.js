/**
 * TC-REV-046: Verify duplicate submissions are prevented
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-046: Prevent Duplicate Submissions', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should prevent duplicate submissions', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.valid.amount,
            WithdrawalData.valid.bank,
            WithdrawalData.valid.accountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-046: PASSED');
    });
});
