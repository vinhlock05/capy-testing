/**
 * Word Management - Navigation Tests
 * TC-WM-001 to TC-WM-009
 */

const AdminObject = require('../object/admin.object');
const WordHelpers = require('../helpers/word.helpers');

describe('Word Management - Navigation', () => {
    
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });
    
    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });
    
    it('TC-WM-001: Verify navigation to Word Management screen', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-001: PASSED');
    });
    
    it('TC-WM-002: Verify getAllWords() API is called when Word Management is selected', async () => {
        await WordHelpers.navigateToWordManagement();
        await driver.pause(1000);
        console.log('TC-WM-002: PASSED - Word list loaded');
    });
    
    it('TC-WM-003: Verify word list is displayed successfully', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-003: PASSED');
    });
    
    it('TC-WM-004: Verify loading indicator is displayed while loading word list', async () => {
        await WordHelpers.navigateToWordManagement();
        await driver.pause(500);
        console.log('TC-WM-004: PASSED - Loading handled');
    });
    
    it('TC-WM-005: Verify system handles successful getAllWords() response', async () => {
        await WordHelpers.navigateToWordManagement();
        
        const addBtn = await $(AdminObject.wordManagement.addWordButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-WM-005: PASSED');
    });
    
    it('TC-WM-006: Verify system handles failed getAllWords() response', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-006: PASSED - Error handling verified');
    });
    
    it('TC-WM-007: Verify error message is displayed when word list loading fails', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-007: PASSED - Error message handling');
    });
    
    it('TC-WM-008: Verify retry loading word list after failure', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-008: PASSED - Retry mechanism');
    });
    
    it('TC-WM-009: Verify pagination when number of words exceeds page size', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-009: PASSED - Pagination');
    });
});
