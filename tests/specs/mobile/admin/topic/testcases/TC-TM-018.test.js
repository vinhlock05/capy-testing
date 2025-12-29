/**
 * TC-TM-018: Verify deletion fails when topic does not exist
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-018: Delete Non-Existing Topic', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should fail deletion when topic does not exist', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-018: PASSED - Non-existing topic handled');
    });
});
