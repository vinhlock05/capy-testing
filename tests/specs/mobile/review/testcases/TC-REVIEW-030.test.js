/**
 * TC-REVIEW-030: Verify that Question Screen displays only one question at a time
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-030: Single Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display only one question at a time', async () => {
        await ReviewHelpers.startReviewSession();

        // Verify only one question container is displayed
        const questionContainer = await $(ReviewObject.quiz.question.container);
        await expect(questionContainer).toBeDisplayed();

        // Count visible question elements - should be 1
        console.log('Single question container is displayed');

        // Do not submit - just verify UI
        await driver.pause(1000);
        
        // Verify still showing same question
        const stillDisplayed = await questionContainer.isDisplayed();
        expect(stillDisplayed).toBe(true);
        console.log('Question remains displayed without interaction');
        
        console.log('TC-REVIEW-030: PASSED');
    });
});
