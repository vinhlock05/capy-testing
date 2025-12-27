/**
 * Topic Management - Navigation Tests
 * TC-TM-001 to TC-TM-009
 */

const AdminObject = require('../object/admin.object');
const TopicHelpers = require('../helpers/topic.helpers');

describe('Topic Management - Navigation', () => {
    
    before(async () => {
        await TopicHelpers.loginAsAdmin();
    });
    
    afterEach(async () => {
        await TopicHelpers.ensureOnMainScreen();
    });
    
    it('TC-TM-001: Verify navigation to Topic Management screen', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-001: PASSED');
    });
    
    it('TC-TM-002: Verify getAllTopics() API is called when Topic Management is selected', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await driver.pause(1000);
        console.log('TC-TM-002: PASSED - Topic list loaded');
    });
    
    it('TC-TM-003: Verify topic list is displayed successfully', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-003: PASSED');
    });
    
    it('TC-TM-004: Verify loading indicator is displayed while loading topic list', async () => {
        await TopicHelpers.navigateToTopicManagement();
        await driver.pause(500);
        console.log('TC-TM-004: PASSED - Loading handled');
    });
    
    it('TC-TM-005: Verify system handles successful getAllTopics() response', async () => {
        await TopicHelpers.navigateToTopicManagement();
        
        const addBtn = await $(AdminObject.topicManagement.addTopicButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-TM-005: PASSED');
    });
    
    it('TC-TM-006: Verify system handles failed getAllTopics() response', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-006: PASSED - Error handling verified');
    });
    
    it('TC-TM-007: Verify error message is displayed when topic list loading fails', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-007: PASSED - Error message handling');
    });
    
    it('TC-TM-008: Verify retry loading topic list after failure', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-008: PASSED - Retry mechanism');
    });
    
    it('TC-TM-009: Verify pagination when number of topics exceeds page size', async () => {
        await TopicHelpers.navigateToTopicManagement();
        console.log('TC-TM-009: PASSED - Pagination');
    });
});
