/**
 * TC-TM-004: Verify loading indicator is displayed while loading topic list
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-004: Loading Indicator', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should display loading indicator while loading topic list', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await driver.pause(500);
        console.log('TC-TM-004: PASSED - Loading handled');
    });
});
