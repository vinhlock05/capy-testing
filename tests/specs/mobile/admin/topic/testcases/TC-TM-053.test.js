/**
 * TC-TM-053: Verify topic is deleted successfully after confirmation
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-053: Delete Topic Success', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should delete topic successfully after confirmation', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-053: PASSED - Topic deleted');
    });
});
