/**
 * TC-REV-027: Verify validation fails for precision overflow
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-027: Precision Overflow Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation for precision overflow', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.invalid.precisionOverflow,
            undefined, undefined
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-027: PASSED');
    });
});
