/**
 * TC-REVIEW-005: Verify progress summary loads successfully when API returns valid data
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-005: Progress Summary Load', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should load and display progress summary successfully', async () => {
        // Wait for data to load
        await driver.pause(2000);

        // Verify progress summary container is displayed
        const summaryContainer = await $(ReviewObject.overview.progressSummary.container);
        await expect(summaryContainer).toBeDisplayed();

        // Verify total learned words label is displayed (e.g., "18 từ đã học chia theo cấp độ")
        const totalLearnedLabel = await $(ReviewObject.overview.progressSummary.totalLearnedWordsLabel);
        await expect(totalLearnedLabel).toBeDisplayed();
        const labelText = await totalLearnedLabel.getText();
        console.log('Total learned words label:', labelText);

        // Verify prepared word count is displayed (e.g., "Chuẩn bị ôn tập: 10 từ")
        const preparedCount = await $(ReviewObject.overview.progressSummary.preparedWordCount);
        await expect(preparedCount).toBeDisplayed();
        const preparedText = await preparedCount.getText();
        console.log('Prepared word count:', preparedText);
        
        console.log('TC-REVIEW-005: PASSED');
    });
});
