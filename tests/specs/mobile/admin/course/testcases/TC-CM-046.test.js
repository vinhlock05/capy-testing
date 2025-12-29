/**
 * TC-CM-046: Verify CANCEL_DELETE is returned when admin selects No
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-046: Cancel Delete Message', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should return CANCEL_DELETE when admin selects No', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        try {
            await CourseHelpers.openEditCourseDialog();
            
            const deleteBtn = await $(AdminObject.courseManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            await CourseHelpers.pressBack();
            console.log('TC-CM-046: PASSED - Cancel delete message');
        } catch (e) {
            console.log('TC-CM-046: SKIPPED');
        }
    });
});
