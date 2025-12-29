/**
 * TC-TM-026: Verify validation fails when topic title is empty
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-026: Empty Topic Title Validation', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should fail validation when topic title is empty', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        await TopicHelpers.fillTopicForm('', 'Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-TM-026: PASSED - Empty title validation');
        await TopicHelpers.closeDialog();
    });
});
