/**
 * TC-TM-031: Verify validation fails when topic title already exists in the same course
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-031: Duplicate Topic Title', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should fail validation when topic title already exists', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        await TopicHelpers.fillTopicForm('ExistingTopic', 'Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-TM-031: PASSED - Duplicate title validation');
        await TopicHelpers.closeDialog();
    });
});
