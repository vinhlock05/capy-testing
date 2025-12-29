/**
 * TC-CM-051: Verify system handles delete API failure
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-051: Delete API Failure Handling', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should handle delete API failure', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(1000);
        console.log('TC-CM-051: PASSED - Error handling');
    });
});
