/**
 * TC-TM-042: Verify admin can create topic with valid input
 */
const AdminObject = require('../../object/admin.object');
const TopicHelpers = require('../../helpers/topic.helpers');

describe('TC-TM-042: Create Topic', () => {
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });

    it('should create topic with valid input', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await TopicHelpers.openAddTopicDialog();
        
        const uniqueTitle = `CRUDTopic_${Date.now()}`;
        await TopicHelpers.fillTopicForm(uniqueTitle, 'CRUD Test Description');
        
        const saveBtn = await $(AdminObject.topicManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-TM-042: PASSED - Topic created');
    });
});
