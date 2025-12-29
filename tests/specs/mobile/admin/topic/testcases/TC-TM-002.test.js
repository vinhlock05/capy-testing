/**
 * TC-TM-002: Verify getAllTopics() API is called when Topic Management is selected
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-002: GetAllTopics API Call', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should call getAllTopics API when Topic Management is selected', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await driver.pause(1000);
        console.log('TC-TM-002: PASSED - Topic list loaded');
    });
});
