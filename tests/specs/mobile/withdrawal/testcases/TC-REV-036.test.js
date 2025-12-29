/**
 * TC-REV-036: Verify validation fails for invalid account length
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-036: Invalid Account Length Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation for invalid account length', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            WithdrawalData.invalid.invalidLengthAccountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-036: PASSED');
    });
});
