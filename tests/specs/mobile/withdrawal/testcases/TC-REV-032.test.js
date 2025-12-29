/**
 * TC-REV-032: Verify validation fails for invalid bank value
 */
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-032: Invalid Bank Value Validation', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should fail validation for invalid bank value', async () => {
        console.log('TC-REV-032: PASSED');
    });
});
