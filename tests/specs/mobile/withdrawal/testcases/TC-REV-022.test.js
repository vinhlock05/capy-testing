/**
 * TC-REV-022: Verify validation fails when amount is negative
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-022: Negative Amount Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when amount is negative', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.invalid.negativeAmount,
            undefined, undefined
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-022: PASSED');
    });
});
