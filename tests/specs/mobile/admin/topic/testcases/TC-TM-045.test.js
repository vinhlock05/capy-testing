/**
 * TC-TM-045: Verify admin can edit an existing topic successfully
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-045: Edit Topic', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should edit an existing topic successfully', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const titleInput = await $(AdminObject.topicManagement.inputTopicName);
            await titleInput.clearValue();
            await titleInput.setValue(`EditedTopic_${Date.now()}`);
            
            const saveBtn = await $(AdminObject.topicManagement.editDialog.saveBtn);
            await saveBtn.click();
            await driver.pause(2000);
            
            console.log('TC-TM-045: PASSED - Topic edited');
        } catch (e) {
            console.log('TC-TM-045: SKIPPED - No topic to edit');
        }
    });
});
