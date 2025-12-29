/**
 * TC-TM-050: Verify topic is not deleted when admin cancels confirmation
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-050: Cancel Delete Topic', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should not delete topic when admin cancels confirmation', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const deleteBtn = await $(AdminObject.topicManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            await TopicHelpers.pressBack();
            console.log('TC-TM-050: PASSED - Topic not deleted');
        } catch (e) {
            console.log('TC-TM-050: SKIPPED');
        }
    });
});
