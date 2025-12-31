/**
 * TC-LEARN-007: Verify search is case-insensitive
 * 
 * Preconditions:
 * Course list contains matching data
 * 
 * Steps:
 * 1. Enter course title in lowercase "vocab"
 * 2. Clear search and enter same title in uppercase - "VOCAB"
 * 
 * Expected: Both searches return the same results
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-007: Case-insensitive Search', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });

    it('should return same results for lowercase and uppercase search', async () => {
        // Step 1: Search with lowercase
        await LearnHelpers.searchCourse(LearnData.search.validCourseTitleLower);
        
        const firstCourse = await $(LearnObject.courseList.firstCourseCard);
        await expect(firstCourse).toBeDisplayed();
        
        const title1 = await $(LearnObject.courseList.courseCard.title);
        const titleTextLower = await title1.getText();
        console.log('Lowercase search result:', titleTextLower);

        // Step 2: Clear and search with uppercase
        await LearnHelpers.clearSearch();
        await LearnHelpers.searchCourse(LearnData.search.validCourseTitleUpper);
        
        const courseAfterUpper = await $(LearnObject.courseList.firstCourseCard);
        await expect(courseAfterUpper).toBeDisplayed();
        
        const title2 = await $(LearnObject.courseList.courseCard.title);
        const titleTextUpper = await title2.getText();
        console.log('Uppercase search result:', titleTextUpper);

        // Verify both searches return same result
        expect(titleTextLower).toEqual(titleTextUpper);
        
        console.log('TC-LEARN-007: PASSED');
    });
});
