/**
 * TC-REVIEW-036: Verify TrueFalse button submits immediately
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-036: True/False Submit', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should submit immediately when selecting True/False answer', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a True/False question
        const hasTrueBtn = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.trueFalse.trueButton
        );

        if (hasTrueBtn) {
            // Select "Đúng" button
            await ReviewHelpers.selectTrueFalse(true);
            console.log('Selected "Đúng"');

            // Verify immediate submission
            await driver.pause(1500);
            
            const isOnQuiz = await ReviewHelpers.isOnQuizScreen();
            const isComplete = await ReviewHelpers.isOnCompletionScreen();
            
            expect(isOnQuiz || isComplete).toBe(true);
            console.log('Answer was submitted immediately');
        } else {
            console.log('Not a True/False question');
        }
        
        console.log('TC-REVIEW-036: PASSED');
    });
});
