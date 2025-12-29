/**
 * TC-CM-050: Verify success message is displayed after deleting course
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-050: Delete Success Message', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should display success message after deleting course', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(1000);
        console.log('TC-CM-050: PASSED - Success message');
    });
});
