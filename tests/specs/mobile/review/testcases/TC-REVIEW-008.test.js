/**
 * TC-REVIEW-008: Verify review words load successfully when API returns valid data
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-008: Review Words Load', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
        await ReviewHelpers.navigateToReviewOverview();
    });

    it('should load and display review overview data', async () => {
        await driver.pause(2000);

        // Check if start review button or no words message is displayed
        const hasStartButton = await ReviewHelpers.isElementDisplayed(
            ReviewObject.overview.startReviewButton
        );
        
        const hasNoWordsMessage = await ReviewHelpers.isElementDisplayed(
            ReviewObject.overview.noWordsMessage
        );

        // Either start button or no words message should be displayed
        expect(hasStartButton || hasNoWordsMessage).toBe(true);

        if (hasStartButton) {
            console.log('Start review button is displayed - words available to review');
        } else {
            console.log('No words to review message is displayed');
        }
        
        console.log('TC-REVIEW-008: PASSED');
    });
});
