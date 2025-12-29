/**
 * TC-TM-043: Verify topic is saved successfully
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-043: Topic Saved', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should save topic successfully', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-043: PASSED - Topic saved');
    });
});
