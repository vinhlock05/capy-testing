/**
 * TC-LEARN-028: Verify first flashcard is displayed correctly
 * 
 * Preconditions:
 * Selected topic contains at least one word
 * 
 * Steps:
 * 1. Navigate to Flashcard screen
 * 2. Observe flashcard content
 * 
 * Expected: First flashcard is displayed with word content
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-028: First Flashcard Display', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should display first flashcard correctly', async () => {
        // Step 1: Verify flashcard container is displayed
        const cardContainer = await $(LearnObject.flashcard.cardContainer);
        await expect(cardContainer).toBeDisplayed();

        // Step 2: Verify word is displayed
        const word = await $(LearnObject.flashcard.frontSide.word);
        await expect(word).toBeDisplayed();
        const wordText = await word.getText();
        expect(wordText.length).toBeGreaterThan(0);
        console.log('Flashcard word:', wordText);

        // Verify phonetic (on back side - flip card first)
        await LearnHelpers.flipCard();
        try {
            const phonetic = await $(LearnObject.flashcard.backSide.phonetic);
            if (await phonetic.isDisplayed()) {
                const phoneticText = await phonetic.getText();
                console.log('Phonetic:', phoneticText);
            }
        } catch (e) {}
        
        console.log('TC-LEARN-028: PASSED');
    });
});
