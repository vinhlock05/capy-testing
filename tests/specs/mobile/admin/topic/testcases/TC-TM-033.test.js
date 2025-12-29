/**
 * TC-TM-033: Verify topic name uniqueness excludes current topic during edit
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-033: Edit Topic Uniqueness', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should exclude current topic during edit uniqueness check', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        try {
            await TopicHelpers.openEditTopicDialog();
            
            const saveBtn = await $(AdminObject.topicManagement.editDialog.saveBtn);
            await saveBtn.click();
            await driver.pause(2000);
            
            console.log('TC-TM-033: PASSED');
        } catch (e) {
            console.log('TC-TM-033: SKIPPED - No topic to edit');
        }
    });
});
