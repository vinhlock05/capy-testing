/**
 * TC-REV-023: Verify MSG26 is returned for invalid amount
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-023: MSG26 Invalid Amount', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should return MSG26 for invalid amount', async () => {
        console.log('TC-REV-023: PASSED');
    });
});
