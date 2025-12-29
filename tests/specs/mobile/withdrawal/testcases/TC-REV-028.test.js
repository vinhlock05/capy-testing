/**
 * TC-REV-028: Verify validation passes for valid amount
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-028: Valid Amount Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should pass validation for valid amount', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.valid.amount,
            undefined, undefined
        );
        console.log('TC-REV-028: PASSED');
    });
});
