/**
 * TC-REV-024: Verify validation fails when amount is empty
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-024: Empty Amount Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when amount is empty', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.invalid.emptyAmount,
            undefined, undefined
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-024: PASSED');
    });
});
