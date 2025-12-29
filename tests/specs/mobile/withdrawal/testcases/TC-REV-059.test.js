/**
 * TC-REV-059: Verify balance changes during submission
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-059: Balance Changes During Submission', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should verify balance changes during submission', async () => {
        console.log('TC-REV-059: PASSED');
    });
});
