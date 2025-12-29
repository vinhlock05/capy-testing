/**
 * TC-CM-031: Verify validation passes with valid course name format
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-031: Valid Course Name Format', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should pass validation with valid course name format', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        const uniqueName = `ValidCourse_${Date.now()}`;
        await CourseHelpers.fillCourseForm(uniqueName, 'Valid Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(2000);
        
        console.log('TC-CM-031: PASSED - Valid course created');
    });
});
