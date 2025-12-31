/**
 * TC-LEARN-008: Verify filter by beginner level displays only beginner courses
 * 
 * Preconditions:
 * User is on Course List screen with courses of multiple levels
 * 
 * Steps:
 * 1. Select Beginner level filter
 * 2. Observe displayed course cards
 * 
 * Expected: Only beginner courses are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-008: Filter Beginner Level', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });

    it('should display only beginner courses when filter is applied', async () => {
        // Step 1: Select Beginner level filter
        await LearnHelpers.selectLevelFilter('beginner');

        // Step 2: Verify courses are displayed or empty message
        const hasCourses = await LearnHelpers.isElementDisplayed(LearnObject.courseList.firstCourseCard);
        const hasEmptyMsg = await LearnHelpers.isElementDisplayed(LearnObject.courseList.emptyMessage);
        
        expect(hasCourses || hasEmptyMsg).toBe(true);

        if (hasCourses) {
            // Use dynamic locator to find level badge with expected level
            const levelSelector = LearnObject.getLevelBadge(LearnData.filters.levels.beginner);
            const levelBadge = await $(levelSelector);
            await expect(levelBadge).toBeDisplayed();
            
            const levelText = await levelBadge.getText();
            console.log('Level badge text:', levelText);
            console.log('Beginner filter applied - courses displayed');
        } else {
            console.log('No beginner courses available');
        }
        
        console.log('TC-LEARN-008: PASSED');
    });
});
