/**
 * TC-REVIEW-052: Verify review session resumes when user dismisses exit dialog
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-052: Resume After Exit Cancel', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should resume review session when dismissing exit dialog', async () => {
        await ReviewHelpers.startReviewSession();

        // Verify on quiz screen
        const isOnQuiz = await ReviewHelpers.isOnQuizScreen();
        expect(isOnQuiz).toBe(true);
        console.log('On quiz screen');

        // Attempt to exit
        await ReviewHelpers.pressBack();
        await driver.pause(500);

        // Dismiss exit dialog
        await ReviewHelpers.cancelExit();
        await driver.pause(500);

        // Verify still on quiz screen
        const stillOnQuiz = await ReviewHelpers.isOnQuizScreen();
        expect(stillOnQuiz).toBe(true);
        console.log('Review session resumed after canceling exit');
        
        console.log('TC-REVIEW-052: PASSED');
    });
});
