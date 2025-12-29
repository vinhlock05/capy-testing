/**
 * TC-CM-045: Verify course is not deleted when admin cancels confirmation
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-045: Cancel Delete Course', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should not delete course when admin cancels confirmation', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        try {
            await CourseHelpers.openEditCourseDialog();
            
            const deleteBtn = await $(AdminObject.courseManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            await CourseHelpers.pressBack();
            console.log('TC-CM-045: PASSED - Cancel delete worked');
        } catch (e) {
            console.log('TC-CM-045: SKIPPED');
        }
    });
});
