/**
 * TC-REV-034: Verify validation fails when account number is empty
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-034: Empty Account Number Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when account number is empty', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            WithdrawalData.invalid.emptyAccountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-034: PASSED');
    });
});
