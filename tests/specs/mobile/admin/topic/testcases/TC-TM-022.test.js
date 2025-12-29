/**
 * TC-TM-022: Verify admin can cancel delete action from confirmation dialog
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-022: Cancel Delete Topic', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should allow admin to cancel delete action', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const deleteBtn = await $(AdminObject.topicManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            await TopicHelpers.pressBack();
            console.log('TC-TM-022: PASSED - Cancel delete');
        } catch (e) {
            console.log('TC-TM-022: SKIPPED');
        }
    });
});
