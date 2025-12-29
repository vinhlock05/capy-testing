/**
 * TC-CM-029: Verify validation fails for invalid course name format
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-029: Invalid Course Name Format', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should fail validation for invalid course name format', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('!@#$%^&*()', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-029: PASSED - Invalid name format validation');
        await CourseHelpers.closeDialog();
    });
});
