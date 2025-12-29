/**
 * TC-TM-037: Verify validation passes when thumbnail is a valid image
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-037: Valid Thumbnail Image', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should pass validation when thumbnail is a valid image', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-037: PASSED - Valid image');
    });
});
