/**
 * TC-TM-005: Verify system handles successful getAllTopics() response
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-005: Successful GetAllTopics Response', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should handle successful getAllTopics response', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-005: PASSED');
    });
});
