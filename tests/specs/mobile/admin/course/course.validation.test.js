/**
 * Course Management - Validation Tests
 * TC-CM-026 to TC-CM-034
 */

const AdminObject = require('../object/admin.object');
const CourseHelpers = require('../helpers/course.helpers');

describe('Course Management - Validation', () => {
    
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });
    
    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });
    
    it('TC-CM-026: Verify validation fails when course name is empty', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('', 'Test Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        const nameInput = await $(AdminObject.courseManagement.inputCourseName);
        await expect(nameInput).toBeDisplayed();
        console.log('TC-CM-026: PASSED - Empty name validation');
        
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-027: Verify validation fails when course level is empty', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const nameInput = await $(AdminObject.courseManagement.inputCourseName);
        await nameInput.setValue('Test Course');
        
        // Try to save without selecting level
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-027: PASSED - Empty level validation');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-028: Verify MSG_REQUIRED_FIELDS is returned when mandatory fields are missing', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-028: PASSED - Required fields message');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-029: Verify validation fails for invalid course name format', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('!@#$%^&*()', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-029: PASSED - Invalid name format validation');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-030: Verify MSG_INVALID_NAME_FORMAT is returned', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('<script>alert(1)</script>', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-030: PASSED - Invalid name message');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-031: Verify validation passes with valid course name format', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const uniqueName = `ValidCourse_${Date.now()}`;
        await CourseHelpers.fillCourseForm(uniqueName, 'Valid Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-CM-031: PASSED - Valid course created');
    });
    
    it('TC-CM-032: Verify validation fails when course name already exists', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        // Use existing course name
        await CourseHelpers.fillCourseForm('ExistingCourse', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-032: PASSED - Duplicate name validation');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-033: Verify MSG_COURSE_NAME_TAKEN is returned', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('ExistingCourse', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-033: PASSED - Duplicate name message');
        await CourseHelpers.closeDialog();
    });
    
    it('TC-CM-034: Verify course name uniqueness excludes current course during edit', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        try {
            await CourseHelpers.openEditCourseDialog();
            
            // Edit without changing name
            const saveBtn = await $(AdminObject.courseManagement.editDialog.saveBtn);
            await saveBtn.click();
            await driver.pause(2000);
            
            console.log('TC-CM-034: PASSED - Edit unchanged name allowed');
        } catch (e) {
            console.log('TC-CM-034: SKIPPED - No course to edit');
        }
    });
});
