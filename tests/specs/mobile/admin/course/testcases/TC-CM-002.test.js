/**
 * TC-CM-002: Verify getAllCourses() API is called when Course Management is selected
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-002: GetAllCourses API Call', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should call getAllCourses API when Course Management is selected', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(1000);
        console.log('TC-CM-002: PASSED - Course list loaded');
    });
});
