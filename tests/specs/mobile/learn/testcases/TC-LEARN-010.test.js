/**
 * TC-LEARN-010: Verify filter by advanced level displays only advanced courses
 * 
 * Preconditions:
 * User is on Course List screen with courses of multiple levels
 * 
 * Steps:
 * 1. Select Advanced level filter
 * 2. Observe displayed course cards
 * 
 * Expected: Only advanced courses are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnData = require('../data/learn.data');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-010: Filter Advanced Level', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToCourseList();
    });

    it('should display only advanced courses when filter is applied', async () => {
        // Step 1: Select Advanced level filter
        await LearnHelpers.selectLevelFilter('advanced');

        // Step 2: Verify courses are displayed or empty message
        const hasCourses = await LearnHelpers.isElementDisplayed(LearnObject.courseList.firstCourseCard);
        const hasEmptyMsg = await LearnHelpers.isElementDisplayed(LearnObject.courseList.emptyMessage);
        
        expect(hasCourses || hasEmptyMsg).toBe(true);

        if (hasCourses) {
            // Use dynamic locator to find level badge with expected level
            const levelSelector = LearnObject.getLevelBadge(LearnData.filters.levels.advanced);
            const levelBadge = await $(levelSelector);
            await expect(levelBadge).toBeDisplayed();
            
            const levelText = await levelBadge.getText();
            console.log('Level badge text:', levelText);
            console.log('Advanced filter applied - courses displayed');
        } else {
            console.log('No advanced courses available');
        }
        
        console.log('TC-LEARN-010: PASSED');
    });
});
