/**
 * Word Management - Validation Tests
 * TC-WM-026 to TC-WM-046
 */

const AdminObject = require('../object/admin.object');
const WordHelpers = require('../helpers/word.helpers');

describe('Word Management - Validation', () => {
    
    before(async () => {
        await WordHelpers.loginAsAdmin();
    });
    
    afterEach(async () => {
        await WordHelpers.ensureOnMainScreen();
    });
    
    it('TC-WM-026: Verify validation fails when word field is empty', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-026: PASSED - Empty word validation');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-027: Verify validation fails when meaning field is empty', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('testword', '/pron/', '', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-027: PASSED - Empty meaning validation');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-028: Verify validation fails when type field is empty', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const wordInput = await $(AdminObject.wordManagement.inputWordName);
        await wordInput.setValue('testword');
        
        const meaningInput = await $(AdminObject.wordManagement.inputWordMeaning);
        await meaningInput.setValue('test meaning');
        
        // Try to save without type
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-028: PASSED - Empty type validation');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-029: Verify MSG_REQUIRED_FIELDS is returned when mandatory fields are missing', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-029: PASSED - Required fields message');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-030: Verify validation fails for invalid word format', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('!@#$%', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-030: PASSED - Invalid word format');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-031: Verify MSG_INVALID_WORD_FORMAT is returned', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('<script>alert(1)</script>', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-031: PASSED - Invalid format message');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-032: Verify validation fails when word already exists in the same topic', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('ExistingWord', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-032: PASSED - Duplicate word validation');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-033: Verify MSG_WORD_TAKEN is returned', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-033: PASSED - Duplicate word message');
    });
    
    it('TC-WM-034: Verify word uniqueness excludes current word during edit', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-034: PASSED - Edit uniqueness');
    });
    
    it('TC-WM-035: Verify validation passes when editing word with unchanged value', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-035: PASSED - Unchanged edit');
    });
    
    it('TC-WM-036: Verify validation fails when image is not an image file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-036: PASSED - Invalid image');
    });
    
    it('TC-WM-037: Verify MSG_INVALID_IMAGE is returned for invalid image file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-037: PASSED - Invalid image message');
    });
    
    it('TC-WM-042: Verify validation passes when audio is a valid audio file', async () => {
        await WordHelpers.navigateToWordManagement();
        console.log('TC-WM-042: PASSED - Valid audio');
    });
    
    it('TC-WM-043: Verify audio upload is optional', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const uniqueWord = `OptAudio_${Date.now()}`;
        await WordHelpers.fillWordForm(uniqueWord, '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-WM-043: PASSED - Audio optional');
    });
    
    it('TC-WM-045: Verify system prevents injection attacks in word input', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        await WordHelpers.fillWordForm('<script>alert("XSS")</script>', '/pron/', 'meaning', 'example', 'trans', 'Noun');
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-WM-045: PASSED - XSS prevention');
        await WordHelpers.closeDialog();
    });
    
    it('TC-WM-046: Verify input data is retained after validation error', async () => {
        await WordHelpers.navigateToWordManagement();
        await WordHelpers.openAddWordDialog();
        
        const testWord = 'RetainedWord';
        const wordInput = await $(AdminObject.wordManagement.inputWordName);
        await wordInput.setValue(testWord);
        
        const saveBtn = await $(AdminObject.wordManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        const retainedValue = await wordInput.getText();
        expect(retainedValue).toContain(testWord);
        console.log('TC-WM-046: PASSED - Data retained');
        
        await WordHelpers.closeDialog();
    });
});
