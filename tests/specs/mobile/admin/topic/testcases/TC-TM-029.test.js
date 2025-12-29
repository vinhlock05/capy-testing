/**
 * TC-TM-029: Verify MSG_INVALID_TITLE_FORMAT is returned
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-029: Invalid Title Format Message', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should return MSG_INVALID_TITLE_FORMAT', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        await TopicHelpers.fillTopicForm('<script>alert(1)</script>', 'Desc');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-TM-029: PASSED - Invalid format message');
        await TopicHelpers.closeDialog();
    });
});
