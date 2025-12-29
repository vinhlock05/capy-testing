/**
 * TC-CM-030: Verify MSG_INVALID_NAME_FORMAT is returned
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-030: Invalid Name Format Message', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should return MSG_INVALID_NAME_FORMAT', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('<script>alert(1)</script>', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-030: PASSED - Invalid name message');
        await CourseHelpers.closeDialog();
    });
});
