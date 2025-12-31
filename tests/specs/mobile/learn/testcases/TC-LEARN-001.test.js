/**
 * TC-LEARN-001: Verify selecting 'Học từ vựng' navigates to Course List screen
 * 
 * Preconditions:
 * 1. Application is launched
 * 2. User is logged in
 * 
 * Steps:
 * 1. Tap 'Học từ vựng' on the Main screen
 * 2. Observe the screen
 * 
 * Expected: Navigate to Course List screen
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-001: Navigation to Course List', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
    });

    it('should navigate to Course List screen when tapping "Học từ vựng"', async () => {
        // Step 1: Tap 'Học từ vựng' on Main screen
        const learnBtn = await $(LearnObject.mainScreen.learnVocabButton);
        await expect(learnBtn).toBeDisplayed();
        await learnBtn.click();
        await driver.pause(2000);

        // Step 2: Verify Course List screen is displayed
        const searchInput = await $(LearnObject.courseList.searchInput);
        await expect(searchInput).toBeDisplayed();
        
        console.log('TC-LEARN-001: PASSED');
    });
});
