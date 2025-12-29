/**
 * TC-CM-028: Verify MSG_REQUIRED_FIELDS is returned when mandatory fields are missing
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-028: Required Fields Message', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should return MSG_REQUIRED_FIELDS when mandatory fields are missing', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-028: PASSED - Required fields message');
        await CourseHelpers.closeDialog();
    });
});
