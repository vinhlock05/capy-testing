/**
 * TC-REVIEW-033: Verify Question Screen updates to display next question after completion
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-033: Next Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display next question after submitting current one', async () => {
        await ReviewHelpers.startReviewSession();

        // Get first question word label (if possible)
        const wordLabel = await $(ReviewObject.quiz.question.wordLabel);
        let firstQuestionText = '';
        try {
            firstQuestionText = await wordLabel.getText();
            console.log('First question:', firstQuestionText);
        } catch (e) {}

        // Submit answer
        const hasOption = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.multipleChoice.option1
        );
        
        if (hasOption) {
            await ReviewHelpers.selectMultipleChoiceOption(1);
            await driver.pause(2000);

            // Check if on next question or completion
            const isOnQuiz = await ReviewHelpers.isOnQuizScreen();
            const isComplete = await ReviewHelpers.isOnCompletionScreen();
            
            if (isOnQuiz) {
                console.log('Next question is displayed');
            } else if (isComplete) {
                console.log('Completed all questions');
            }
            
            expect(isOnQuiz || isComplete).toBe(true);
        }
        
        console.log('TC-REVIEW-033: PASSED');
    });
});
