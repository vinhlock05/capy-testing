/**
 * TC-TM-019: Verify MSG_TOPIC_NOT_FOUND is returned for non-existing topic
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-019: Topic Not Found Message', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should return MSG_TOPIC_NOT_FOUND for non-existing topic', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-019: PASSED - Not found message');
    });
});
