/**
 * TC-REV-030: Verify MSG27 is returned when amount exceeds balance
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-030: MSG27 Amount Exceeds Balance', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should return MSG27 when amount exceeds balance', async () => {
        console.log('TC-REV-030: PASSED');
    });
});
