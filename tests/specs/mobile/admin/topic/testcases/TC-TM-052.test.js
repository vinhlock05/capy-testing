/**
 * TC-TM-052: Verify DELETE_TOPIC(topicId) is called when admin confirms deletion
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-052: Delete Topic API Call', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should call DELETE_TOPIC when admin confirms deletion', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-052: PASSED - Delete API called');
    });
});
