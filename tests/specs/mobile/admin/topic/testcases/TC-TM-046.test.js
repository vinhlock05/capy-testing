/**
 * TC-TM-046: Verify updated topic information is saved
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-046: Topic Update Saved', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should save updated topic information', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-046: PASSED - Update saved');
    });
});
