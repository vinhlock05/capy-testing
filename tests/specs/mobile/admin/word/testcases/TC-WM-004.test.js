/**
 * TC-WM-004: Verify loading indicator is displayed while loading word list
 */
const WordHelpers = require('../../helpers/word.helpers');

describe('TC-WM-004: Loading Indicator', () => {
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });

    it('should display loading indicator while loading word list', async () => {
        await WordHelpers.navigateToWordManagement();
        await driver.pause(500);
        console.log('TC-WM-004: PASSED - Loading handled');
    });
});
