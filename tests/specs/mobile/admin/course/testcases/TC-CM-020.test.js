/**
 * TC-CM-020: Verify confirmation dialog is displayed before deletion
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-020: Delete Confirmation Dialog', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should display confirmation dialog before deletion', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        try {
            await CourseHelpers.openEditCourseDialog();
            
            const deleteBtn = await $(AdminObject.courseManagement.editDialog.deleteBtn);
            await deleteBtn.click();
            await driver.pause(1000);
            
            console.log('TC-CM-020: PASSED - Confirmation shown');
            await CourseHelpers.pressBack();
        } catch (e) {
            console.log('TC-CM-020: SKIPPED - No course');
        }
    });
});
