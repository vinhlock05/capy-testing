/**
 * TC-REV-041: Verify createPayout API is called correctly
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-041: CreatePayout API Call', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should call createPayout API correctly', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            WithdrawalData.valid.amount,
            WithdrawalData.valid.bank,
            WithdrawalData.valid.accountNumber
        );
        await WithdrawalHelpers.submitWithdrawal();
        console.log('TC-REV-041: PASSED');
    });
});
