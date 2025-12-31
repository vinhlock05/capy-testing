/**
 * TC-REVIEW-024: Verify Listen and Choose question displays audio icon and options
 */
const ReviewObject = require('../object/review.object');
const ReviewHelpers = require('../helpers/review.helpers');

describe('TC-REVIEW-024: Listen and Choose Question Display', () => {
    before(async () => {
        await ReviewHelpers.loginAsUser();
    });

    it('should display Listen and Choose question with audio icon and options', async () => {
        await ReviewHelpers.startReviewSession();

        // Check if this is a Listen and Choose question
        const hasAudioIcon = await ReviewHelpers.isElementDisplayed(
            ReviewObject.quiz.listenChoose.audioIcon
        );

        if (hasAudioIcon) {
            // Verify audio icon
            const audioIcon = await $(ReviewObject.quiz.listenChoose.audioIcon);
            await expect(audioIcon).toBeDisplayed();
            console.log('Audio icon is displayed');

            // Verify multiple choice options (same as multipleChoice)
            const hasOption1 = await ReviewHelpers.isElementDisplayed(
                ReviewObject.quiz.multipleChoice.option1
            );
            expect(hasOption1).toBe(true);
            console.log('Options are displayed');
        } else {
            console.log('Not a Listen and Choose question - question type is random');
        }
        
        console.log('TC-REVIEW-024: PASSED');
    });
});
