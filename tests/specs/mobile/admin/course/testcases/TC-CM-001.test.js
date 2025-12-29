/**
 * TC-CM-001: Verify navigation to Course Management screen
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-001: Navigation to Course Management', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should navigate to Course Management screen', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        const addBtn = await $(AdminObject.courseManagement.addCourseButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-CM-001: PASSED');
    });
});
