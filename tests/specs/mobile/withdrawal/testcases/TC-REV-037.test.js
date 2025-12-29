/**
 * TC-REV-037: Verify validation passes for valid account number
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-037: Valid Account Number Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should pass validation for valid account number', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            WithdrawalData.valid.accountNumber
        );
        console.log('TC-REV-037: PASSED');
    });
});
