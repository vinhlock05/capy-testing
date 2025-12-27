/**
 * Withdrawal Module - Test Data
 */
const WithdrawalData = {
    valid: {
        amount: '10000',
        bank: 'BIDV',
        accountNumber: '123456789',
    },
    
    invalid: {
        zeroAmount: '0',
        negativeAmount: '-1000',
        nonNumericAmount: 'abc',
        specialCharsAmount: '!@#$',
        precisionOverflow: '1000.555',
        exceedBalanceAmount: '999999999',
        
        emptyAccountNumber: '',
        lettersAccountNumber: 'abc123',
        invalidLengthAccountNumber: '123',
        specialCharsAccountNumber: '123-456',
        
        unselectedBank: '',
    },
    
    messages: {
        invalidAmount: 'Invalid amount', // MSG26
        exceedBalance: 'Amount cannot greater than balance', // MSG27
        successWithdrawal: 'Request withdraw successfully', // MSG28
    }
};

module.exports = WithdrawalData;
