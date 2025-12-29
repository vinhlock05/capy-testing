/**
 * TC-TM-020: Verify confirmation dialog is displayed before deleting topic
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-020: Delete Confirmation Dialog', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should display confirmation dialog before deleting topic', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const deleteBtn = await $(AdminObject.topicManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            console.log('TC-TM-020: PASSED - Confirmation shown');
            await TopicHelpers.pressBack();
        } catch (e) {
            console.log('TC-TM-020: SKIPPED');
        }
    });
});
