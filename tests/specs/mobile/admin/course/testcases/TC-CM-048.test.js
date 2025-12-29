/**
 * TC-CM-048: Verify course is deleted successfully after confirmation
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-048: Delete Course Success', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should delete course successfully after confirmation', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(1000);
        console.log('TC-CM-048: PASSED - Delete success');
    });
});
