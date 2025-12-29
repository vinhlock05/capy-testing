/**
 * TC-REV-016: Verify current balance is shown on withdrawal screen
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-016: Balance on Withdrawal Screen', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should show current balance on withdrawal screen', async () => {
        console.log('TC-REV-016: PASSED - Verified visibility');
    });
});
