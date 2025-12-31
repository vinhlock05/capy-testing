/**
 * TC-LEARN-005: Verify search by course title returns matching courses
 * 
 * Preconditions:
 * Course list is displayed
 * 
 * Steps:
 * 1. Enter an existing course title into search box
 * 2. Observe course list
 * 
 * Expected: Matching courses are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-005: Search Course by Title', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });

    it('should return matching courses when searching by title', async () => {
        // Step 1: Enter existing course title
        await LearnHelpers.searchCourse(LearnData.search.validCourseTitle);

        // Step 2: Verify matching courses are displayed
        const firstCourse = await $(LearnObject.courseList.firstCourseCard);
        await expect(firstCourse).toBeDisplayed();
        
        // Verify the course title contains search text
        const title = await $(LearnObject.courseList.courseCard.title);
        const titleText = await title.getText();
        expect(titleText.toLowerCase()).toContain(LearnData.search.validCourseTitle.toLowerCase());
        
        console.log('Search result:', titleText);
        console.log('TC-LEARN-005: PASSED');
    });
});
