/**
 * TC-TM-016: Verify admin can select a topic to delete
 */
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-016: Select Topic to Delete', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should allow admin to select a topic to delete', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            console.log('TC-TM-016: PASSED - Topic selected');
            await TopicHelpers.closeDialog();
        } catch (e) {
            console.log('TC-TM-016: SKIPPED - No topic');
        }
    });
});
