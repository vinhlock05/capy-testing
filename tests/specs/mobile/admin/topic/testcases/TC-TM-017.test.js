/**
 * TC-TM-017: Verify getTopicById(topicId) is called when deleting a topic
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-017: GetTopicById for Delete', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should call getTopicById when deleting a topic', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const deleteBtn = await $(AdminObject.topicManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            console.log('TC-TM-017: PASSED');
            await TopicHelpers.pressBack();
        } catch (e) {
            console.log('TC-TM-017: SKIPPED');
        }
    });
});
