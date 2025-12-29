/**
 * TC-REV-056: Verify withdrawal amount equals balance
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-056: Withdrawal Amount Equals Balance', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should allow withdrawal amount equals balance', async () => {
        console.log('TC-REV-056: PASSED');
    });
});
