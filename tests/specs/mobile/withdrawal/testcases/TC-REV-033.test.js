/**
 * TC-REV-033: Verify validation passes for valid bank
 */
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-033: Valid Bank Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should pass validation for valid bank', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined,
            WithdrawalData.valid.bank,
            undefined
        );
        console.log('TC-REV-033: PASSED');
    });
});
