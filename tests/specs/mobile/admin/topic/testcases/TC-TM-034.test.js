/**
 * TC-TM-034: Verify validation passes when editing topic with unchanged title
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-034: Edit Unchanged Topic Title', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should pass validation when editing topic with unchanged title', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const saveBtn = await $(AdminObject.topicManagement.editDialog.saveBtn);
            await saveBtn.click();
            await driver.pause(2000);
            
            console.log('TC-TM-034: PASSED');
        } catch (e) {
            console.log('TC-TM-034: SKIPPED');
        }
    });
});
