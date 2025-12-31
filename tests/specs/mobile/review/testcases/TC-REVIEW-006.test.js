/**
 * TC-REVIEW-006: Verify progress chart displays 4 proficiency levels
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-006: Progress Chart Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should display progress chart with 4 proficiency levels', async () => {
        // Wait for data to load
        await driver.pause(2000);

        // Verify chart container is displayed
        const chartContainer = await $(ReviewObject.overview.progressChart.container);
        await expect(chartContainer).toBeDisplayed();
        console.log('Progress chart container displayed');

        // Verify level labels (1, 2, 3, 4) are displayed
        const level1 = await $(ReviewObject.overview.progressChart.level1Label);
        await expect(level1).toBeDisplayed();
        console.log('Level 1 label displayed');

        const level2 = await $(ReviewObject.overview.progressChart.level2Label);
        await expect(level2).toBeDisplayed();
        console.log('Level 2 label displayed');

        const level3 = await $(ReviewObject.overview.progressChart.level3Label);
        await expect(level3).toBeDisplayed();
        console.log('Level 3 label displayed');

        const level4 = await $(ReviewObject.overview.progressChart.level4Label);
        await expect(level4).toBeDisplayed();
        console.log('Level 4 label displayed');
        
        console.log('TC-REVIEW-006: PASSED');
    });
});
