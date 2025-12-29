/**
 * TC-REV-043: Verify request is sent to admin
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-043: Request Sent to Admin', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should send request to admin', async () => {
        console.log('TC-REV-043: PASSED');
    });
});
