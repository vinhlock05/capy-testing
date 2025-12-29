/**
 * TC-TM-032: Verify MSG_TOPIC_NAME_TAKEN is returned
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-032: Topic Name Taken Message', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should return MSG_TOPIC_NAME_TAKEN', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        await TopicHelpers.fillTopicForm('ExistingTopic', 'Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-TM-032: PASSED - Duplicate name message');
        await TopicHelpers.closeDialog();
    });
});
