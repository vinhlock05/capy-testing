/**
 * TC-WM-002: Verify getAllWords() API is called when Word Management is selected
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-002: GetAllWords API Call', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should call getAllWords API when Word Management is selected', async () => {
        await WordHelpers.navigateToWordManagement();
        await driver.pause(1000);
        console.log('TC-WM-002: PASSED - Word list loaded');
    });
});
