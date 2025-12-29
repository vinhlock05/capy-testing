/**
 * TC-CM-026: Verify validation fails when course name is empty
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-026: Empty Course Name Validation', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should fail validation when course name is empty', async () => {
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
});
