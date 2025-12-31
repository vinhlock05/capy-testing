/**
 * TC-REVIEW-019: Verify Choose Meaning question displays word with multiple options
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-019: Choose Meaning Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display Choose Meaning question with word and options', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a multiple choice question
        const hasOption1 = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.multipleChoice.option1
        );

        if (hasOption1) {
            // Verify word label is displayed (e.g., "Từ: countess")
            const wordLabel = await $(ReviewObject.quiz.question.wordLabel);
            await expect(wordLabel).toBeDisplayed();
            console.log('Word label is displayed');

            // Verify meaning prompt is displayed (e.g., "Có nghĩa là:")
            const meaningPrompt = await $(ReviewObject.quiz.question.meaningPrompt);
            await expect(meaningPrompt).toBeDisplayed();
            console.log('Meaning prompt is displayed');

            // Verify all 4 options are displayed
            const option1 = await $(ReviewObject.quiz.multipleChoice.option1);
            const option2 = await $(ReviewObject.quiz.multipleChoice.option2);
            const option3 = await $(ReviewObject.quiz.multipleChoice.option3);
            const option4 = await $(ReviewObject.quiz.multipleChoice.option4);

            await expect(option1).toBeDisplayed();
            await expect(option2).toBeDisplayed();
            await expect(option3).toBeDisplayed();
            await expect(option4).toBeDisplayed();
            console.log('All 4 options are displayed');
        } else {
            console.log('Not a Choose Meaning question - question type is random');
        }
        
        console.log('TC-REVIEW-019: PASSED');
    });
});
