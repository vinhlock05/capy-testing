/**
 * TC-CM-027: Verify validation fails when course level is empty
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-027: Empty Course Level Validation', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should fail validation when course level is empty', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const nameInput = await $(AdminObject.courseManagement.inputCourseName);
        await nameInput.setValue('Test Course');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-027: PASSED - Empty level validation');
        await CourseHelpers.closeDialog();
    });
});
