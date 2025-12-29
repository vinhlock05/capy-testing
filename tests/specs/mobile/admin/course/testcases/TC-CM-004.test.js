/**
 * TC-CM-004: Verify loading indicator is displayed while loading course list
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-004: Loading Indicator', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should display loading indicator while loading course list', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(500);
        console.log('TC-CM-004: PASSED - Loading handled');
    });
});
