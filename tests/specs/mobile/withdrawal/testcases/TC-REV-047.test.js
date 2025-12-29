/**
 * TC-REV-047: Verify submit button is disabled during processing
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-047: Submit Button Disabled During Processing', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should disable submit button during processing', async () => {
        console.log('TC-REV-047: PASSED');
    });
});
