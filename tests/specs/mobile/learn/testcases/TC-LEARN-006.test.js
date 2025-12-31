/**
 * TC-LEARN-006: Verify search returns empty result when no match
 * 
 * Preconditions:
 * Course list is displayed
 * 
 * Steps:
 * 1. Enter a non-existing course title "axuek" into search box
 * 2. Observe the screen
 * 
 * Expected: Empty result message is displayed
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-006: Search No Match', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });


    it('should display empty result when search has no match', async () => {
        // Step 1: Enter non-existing course title
        await LearnHelpers.searchCourse(LearnData.search.invalidCourseTitle);

        // Step 2: Verify empty message is displayed
        const emptyMessage = await $(LearnObject.courseList.emptyMessage);
        await expect(emptyMessage).toBeDisplayed();
        
        // Verify no course cards are displayed
        const courseCardExists = await LearnHelpers.isElementDisplayed(LearnObject.courseList.firstCourseCard);
        expect(courseCardExists).toBe(false);
        
        console.log('TC-LEARN-006: PASSED');
    });
});
