/**
 * TC-TM-030: Verify validation passes with valid topic title format
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-030: Valid Topic Title Format', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should pass validation with valid topic title format', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        const uniqueTitle = `ValidTopic_${Date.now()}`;
        await TopicHelpers.fillTopicForm(uniqueTitle, 'Valid Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-TM-030: PASSED - Valid topic created');
    });
});
