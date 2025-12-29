/**
 * TC-CM-005: Verify system handles successful getAllCourses() response
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-005: Successful GetAllCourses Response', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should handle successful getAllCourses response', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        const addBtn = await $(AdminObject.courseManagement.addCourseButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-CM-005: PASSED');
    });
});
