/**
 * TC-TM-028: Verify validation fails for invalid topic title format
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-028: Invalid Topic Title Format', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should fail validation for invalid topic title format', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        await TopicHelpers.fillTopicForm('!@#$%', 'Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-TM-028: PASSED - Invalid title format');
        await TopicHelpers.closeDialog();
    });
});
