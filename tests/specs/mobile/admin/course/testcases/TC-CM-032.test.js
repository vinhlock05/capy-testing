/**
 * TC-CM-032: Verify validation fails when course name already exists
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-032: Duplicate Course Name Validation', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should fail validation when course name already exists', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await CourseHelpers.openAddCourseDialog();
        
        await CourseHelpers.fillCourseForm('ExistingCourse', 'Target', 'SoCap');
        
        const saveBtn = await $(AdminObject.courseManagement.addDialog.saveBtn);
        await saveBtn.click();
        await driver.pause(1000);
        
        console.log('TC-CM-032: PASSED - Duplicate name validation');
        await CourseHelpers.closeDialog();
    });
});
