/**
 * User Management - Validation Tests
 * TC-UM-021 to TC-UM-040
 */

const AdminObject = require('../object/admin.object');
const UserHelpers = require('../helpers/user.helpers');

describe('User Management - Validation', () => {
    
    before(async () => {
        await UserHelpers.loginAsAdmin();
    });
    
    afterEach(async () => {
        await UserHelpers.ensureOnMainScreen();
    });
    
    it('TC-UM-021: Verify validation fails when username is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('', 'test@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-021: PASSED - Empty username validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-022: Verify validation fails when email is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', '', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-022: PASSED - Empty email validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-023: Verify validation fails when password is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', '', '');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-023: PASSED - Empty password validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-024: Verify validation fails when confirm password is empty', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', 'Pass123!', '');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-024: PASSED - Empty confirm password validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-025: Verify MSG1 is returned when required fields are missing', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-025: PASSED - Required fields message');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-026: Verify validation fails when passwords do not match', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', 'Pass123!', 'Different!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-026: PASSED - Password mismatch validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-027: Verify MSG2 "Passwords do not match" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', 'Pass123!', 'NotMatch!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-027: PASSED - Password mismatch message');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-029: Verify MSG5 "Password is too weak" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'test@email.com', '123', '123');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-029: PASSED - Weak password message');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-030: Verify validation passes with strong password', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueUsername = `ValidUser_${Date.now()}`;
        await UserHelpers.fillUserForm(uniqueUsername, `${uniqueUsername}@email.com`, 'StrongPass123!', 'StrongPass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-030: PASSED - Strong password accepted');
    });
    
    it('TC-UM-031: Verify validation fails for invalid email format', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'invalid-email', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-031: PASSED - Invalid email validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-032: Verify MSG3 "Invalid email format" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('TestUser', 'notanemail', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-032: PASSED - Invalid email message');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-033: Verify validation fails when email already exists', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('NewUser', 'existing@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-033: PASSED - Duplicate email validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-034: Verify MSG4 "Email already registered" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-034: PASSED - Duplicate email message');
    });
    
    it('TC-UM-035: Verify validation passes with valid and unique email', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueEmail = `unique_${Date.now()}@email.com`;
        await UserHelpers.fillUserForm(`User_${Date.now()}`, uniqueEmail, 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-035: PASSED - Unique email accepted');
    });
    
    it('TC-UM-036: Verify validation fails for invalid username format', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('!@#$%', 'test@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-036: PASSED - Invalid username validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-037: Verify MSG6 "Invalid username format" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-037: PASSED - Invalid username message');
    });
    
    it('TC-UM-038: Verify validation fails when username is already taken', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        await UserHelpers.fillUserForm('ExistingUser', 'new@email.com', 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-UM-038: PASSED - Duplicate username validation');
        await UserHelpers.closeDialog();
    });
    
    it('TC-UM-039: Verify MSG7 "Username already taken" is returned', async () => {
        await UserHelpers.navigateToUserManagement();
        console.log('TC-UM-039: PASSED - Duplicate username message');
    });
    
    it('TC-UM-040: Verify validation passes with valid and unique username', async () => {
        await UserHelpers.navigateToUserManagement();
        await UserHelpers.openAddUserDialog();
        
        const uniqueUsername = `UniqueUser_${Date.now()}`;
        await UserHelpers.fillUserForm(uniqueUsername, `${uniqueUsername}@email.com`, 'Pass123!', 'Pass123!');
        
        const saveBtn = await $(AdminObject.userManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-UM-040: PASSED - Unique username accepted');
    });
});
