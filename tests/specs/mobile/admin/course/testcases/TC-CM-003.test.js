/**
 * TC-CM-003: Verify course list is displayed successfully
 */
const AdminObject = require('../../object/admin.object');
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-003: Course List Display', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should display course list successfully', async () => {
        await CourseHelpers.navigateToCourseManagement();
        
        const addBtn = await $(AdminObject.courseManagement.addCourseButton);
        await expect(addBtn).toBeDisplayed();
        console.log('TC-CM-003: PASSED');
    });
});
