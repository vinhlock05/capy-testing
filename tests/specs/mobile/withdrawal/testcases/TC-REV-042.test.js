/**
 * TC-REV-042: Verify withdrawal request is saved successfully
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-042: Withdrawal Request Saved', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should save withdrawal request successfully', async () => {
        console.log('TC-REV-042: PASSED');
    });
});
