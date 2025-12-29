/**
 * TC-TM-001: Verify navigation to Topic Management screen
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-001: Navigation to Topic Management', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should navigate to Topic Management screen', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-001: PASSED');
    });
});
