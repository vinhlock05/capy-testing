/**
 * TC-LEARN-026: Verify selecting a topic navigates to the flashcard screen
 * 
 * Preconditions:
 * Topic list is displayed
 * 
 * Steps:
 * 1. Select a topic card
 * 2. Observe displayed screen
 * 
 * Expected: Navigate to Flashcard screen
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-026: Navigate to Flashcard', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToTopicList();
    });

    it('should navigate to Flashcard screen when selecting a topic', async () => {
        // Step 1: Select first topic card
        const topicCard = await $(LearnObject.topicList.firstTopicCard);
        await expect(topicCard).toBeDisplayed();
        await topicCard.click();
        await driver.pause(2000);

        // Step 2: Verify Flashcard screen is displayed
        const progressIcon = await $(LearnObject.flashcard.progressIcon);
        await expect(progressIcon).toBeDisplayed();
        
        // Or verify flashcard content
        const flashcardContainer = await $(LearnObject.flashcard.cardContainer);
        await expect(flashcardContainer).toBeDisplayed();
        
        console.log('TC-LEARN-026: PASSED');
    });
});
