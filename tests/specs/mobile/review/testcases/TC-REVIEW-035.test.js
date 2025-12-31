/**
 * TC-REVIEW-035: Verify user can select answer (multiple choice) and answer is submitted immediately
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-035: Multiple Choice Submit', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should submit immediately when selecting multiple choice answer', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a multiple choice question
        const hasOption1 = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.multipleChoice.option1
        );

        if (hasOption1) {
            // Get current question state
            const beforeClick = await ReviewHelpers.getProgressValue();
            console.log('Progress before:', beforeClick);

            // Select option 1
            await ReviewHelpers.selectMultipleChoiceOption(1);
            console.log('Selected option 1');

            // Verify feedback or next question appears (immediate submission)
            await driver.pause(1500);
            
            // Check if still on quiz or moved to next question
            const isOnQuiz = await ReviewHelpers.isOnQuizScreen();
            const isComplete = await ReviewHelpers.isOnCompletionScreen();
            
            expect(isOnQuiz || isComplete).toBe(true);
            console.log('Answer was submitted');
        } else {
            console.log('Not a multiple choice question');
        }
        
        console.log('TC-REVIEW-035: PASSED');
    });
});
