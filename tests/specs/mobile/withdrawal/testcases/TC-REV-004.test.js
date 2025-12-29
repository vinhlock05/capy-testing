/**
 * TC-REV-004: Verify user revenue/balance is displayed correctly
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-004: Balance Display', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should display user balance correctly', async () => {
        const balance = await $(WithdrawalObject.profile.currentBalance);
        const text = await balance.getText();
        await expect(text).toContain('Số dư');
        console.log('TC-REV-004: PASSED');
    });
});
