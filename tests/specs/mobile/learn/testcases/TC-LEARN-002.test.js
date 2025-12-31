/**
 * TC-LEARN-002: Verify course list loads successfully when API returns valid data
 * 
 * Preconditions:
 * 1. User is on Course List screen
 * 2. Course API is available
 * 
 * Steps:
 * 1. Open Course List screen
 * 2. Wait for API response
 * 3. Review displayed courses
 * 
 * Expected: Courses are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-002: Course List Loads Successfully', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
    });

    it('should load and display course list successfully', async () => {
        // Step 1: Navigate to Course List
        await LearnHelpers.navigateToCourseList();

        // Step 2: Wait for loading to complete
        await driver.pause(2000);

        // Step 3: Verify courses are displayed
        const firstCourse = await $(LearnObject.courseList.firstCourseCard);
        await expect(firstCourse).toBeDisplayed();
        
        console.log('TC-LEARN-002: PASSED');
    });
});
