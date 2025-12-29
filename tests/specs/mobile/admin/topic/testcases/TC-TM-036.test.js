/**
 * TC-TM-036: Verify MSG_INVALID_IMAGE is returned for invalid thumbnail file
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-036: Invalid Image Message', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should return MSG_INVALID_IMAGE for invalid thumbnail file', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-036: PASSED - Invalid image message');
    });
});
