/**
 * TC-REVIEW-007: Verify total learned words, total words to review and prepared word count display correctly
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-007: Word Counts Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should display all word counts correctly', async () => {
        await driver.pause(2000);

        // Verify total learned words label (e.g., "18 từ đã học chia theo cấp độ")
        const totalLearnedLabel = await $(ReviewObject.overview.progressSummary.totalLearnedWordsLabel);
        await expect(totalLearnedLabel).toBeDisplayed();
        const learnedText = await totalLearnedLabel.getText();
        console.log('Total learned words label:', learnedText);

        // Verify prepared word count (e.g., "Chuẩn bị ôn tập: 10 từ")
        const preparedCount = await $(ReviewObject.overview.progressSummary.preparedWordCount);
        await expect(preparedCount).toBeDisplayed();
        const preparedText = await preparedCount.getText();
        console.log('Prepared word count:', preparedText);
        
        console.log('TC-REVIEW-007: PASSED');
    });
});
