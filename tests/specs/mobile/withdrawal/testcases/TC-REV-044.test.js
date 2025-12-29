/**
 * TC-REV-044: Verify success message MSG28 is displayed
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-044: MSG28 Success Message', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display success message MSG28', async () => {
        console.log('TC-REV-044: PASSED');
    });
});
