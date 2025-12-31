/**
 * TC-LEARN-016: Verify selecting a course navigates to Topic List
 * 
 * Preconditions:
 * User is on Course List screen
 * 
 * Steps:
 * 1. Select a course card
 * 2. Observe displayed screen
 * 
 * Expected: Navigate to Topic List screen
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-016: Navigate to Topic List', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });

    it('should navigate to Topic List when selecting a course', async () => {
        // Step 1: Select first course card
        const courseCard = await $(LearnObject.courseList.firstCourseCard);
        await expect(courseCard).toBeDisplayed();
        await courseCard.click();
        await driver.pause(2000);

        // Step 2: Verify Topic List screen is displayed
        const topicCard = await $(LearnObject.topicList.firstTopicCard);
        await expect(topicCard).toBeDisplayed();
        
        console.log('TC-LEARN-016: PASSED');
    });
});
