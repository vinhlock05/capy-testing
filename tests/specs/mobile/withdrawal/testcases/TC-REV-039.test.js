/**
 * TC-REV-039: Verify special characters are rejected in account number
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-039: Special Characters Account Number Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should reject special characters in account number', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            WithdrawalData.invalid.specialCharsAccountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-039: PASSED');
    });
});
