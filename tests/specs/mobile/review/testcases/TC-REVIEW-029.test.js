/**
 * TC-REVIEW-029: Verify that question screen displays when quiz starts
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-029: Quiz Screen Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display question screen when quiz starts', async () => {
        await ReviewHelpers.startReviewSession();

        // Verify question container is displayed
        const questionContainer = await $(ReviewObject.quiz.question.container);
        await expect(questionContainer).toBeDisplayed();
        console.log('Question container is displayed');

        // Verify progress icon is displayed
        const progressIcon = await $(ReviewObject.quiz.progressIcon);
        await expect(progressIcon).toBeDisplayed();
        console.log('Progress icon is displayed');

        // Verify at least one answer option is available
        const isOnQuiz = await ReviewHelpers.isOnQuizScreen();
        expect(isOnQuiz).toBe(true);
        
        console.log('TC-REVIEW-029: PASSED');
    });
});
