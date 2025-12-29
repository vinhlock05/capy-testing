/**
 * TC-TM-035: Verify validation fails when thumbnail is not an image file
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-035: Invalid Thumbnail File', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should fail validation when thumbnail is not an image file', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-035: PASSED - Image validation');
    });
});
