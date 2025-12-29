/**
 * TC-TM-003: Verify topic list is displayed successfully
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-003: Topic List Display', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should display topic list successfully', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-003: PASSED');
    });
});
