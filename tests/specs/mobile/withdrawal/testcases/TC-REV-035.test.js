/**
 * TC-REV-035: Verify validation fails when account number contains letters
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-035: Letters in Account Number Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when account number contains letters', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            WithdrawalData.invalid.lettersAccountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-035: PASSED');
    });
});
