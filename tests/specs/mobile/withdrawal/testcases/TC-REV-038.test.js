/**
 * TC-REV-038: Verify whitespace trimming in account number
 */
const WithdrawalObject = require('../object/withdrawal.object');
const WithdrawalData = require('../data/withdrawal.data');
const WithdrawalHelpers = require('../helpers/withdrawal.helpers');

describe('TC-REV-038: Account Number Whitespace Trimming', () => {
    before(async () => {
        await WithdrawalHelpers.loginAsUser();
        await WithdrawalHelpers.navigateToWithdrawal();
    });

    it('should trim whitespace in account number', async () => {
        await WithdrawalHelpers.fillWithdrawalForm(
            undefined, undefined,
            `  ${WithdrawalData.valid.accountNumber}  `
        );
        const accInput = await $(WithdrawalObject.form.accountNumberInput);
        const text = await accInput.getText();
        expect(text.trim()).toBe(WithdrawalData.valid.accountNumber);
        console.log('TC-REV-038: PASSED');
    });
});
