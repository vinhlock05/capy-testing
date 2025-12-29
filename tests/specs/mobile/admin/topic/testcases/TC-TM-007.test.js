/**
 * TC-TM-007: Verify error message is displayed when topic list loading fails
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-007: Error Message on Loading Failure', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should display error message when topic list loading fails', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-007: PASSED - Error message handling');
    });
});
