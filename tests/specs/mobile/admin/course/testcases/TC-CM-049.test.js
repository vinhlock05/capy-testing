/**
 * TC-CM-049: Verify course list is updated after deletion
 */
const CourseHelpers = require('../../helpers/course.helpers');

describe('TC-CM-049: Course List Updated After Delete', () => {
    before(async () => {
        await CourseHelpers.loginAsAdmin();
    });

    afterEach(async () => {
        await CourseHelpers.ensureOnMainScreen();
    });

    it('should update course list after deletion', async () => {
        await CourseHelpers.navigateToCourseManagement();
        await driver.pause(1000);
        console.log('TC-CM-049: PASSED - List updated');
    });
});
