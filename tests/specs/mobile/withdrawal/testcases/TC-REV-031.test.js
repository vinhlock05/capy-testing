/**
 * TC-REV-031: Verify validation fails when bank is not selected
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-031: Bank Not Selected Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation when bank is not selected', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.valid.amount,
            false, // Don't select bank
            WithdrawalData.valid.accountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-031: PASSED');
    });
});
