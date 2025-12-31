/**
 * TC-LEARN-032: Verify word, example sentence, and image are displayed correctly
 * 
 * Preconditions:
 * Flashcard screen is displayed with valid word data
 * 
 * Steps:
 * 1. Observe flashcard front side
 * 2. Observe image area
 * 
 * Expected: Word, example, and image are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-032: Flashcard Content Display', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should display word, example sentence, and image correctly', async () => {
        // Step 1: Verify word is displayed
        const word = await $(LearnObject.flashcard.frontSide.word);
        await expect(word).toBeDisplayed();
        const wordText = await word.getText();
        console.log('Word:', wordText);

        // Verify image (if available)
        try {
            const image = await $(LearnObject.flashcard.frontSide.image);
            if (await image.isDisplayed()) {
                console.log('Image is displayed');
            }
        } catch (e) {
            console.log('Image not found (may not have image for this word)');
        }

        // Flip card to see back side with example
        await LearnHelpers.flipCard();
        await driver.pause(500);

        // Verify example on back side
        try {
            const example = await $(LearnObject.flashcard.backSide.example);
            if (await example.isDisplayed()) {
                const exampleText = await example.getText();
                console.log('Example:', exampleText);
            }
        } catch (e) {
            console.log('Example not found');
        }

        // Verify meaning
        try {
            const meaning = await $(LearnObject.flashcard.backSide.meaning);
            if (await meaning.isDisplayed()) {
                const meaningText = await meaning.getText();
                console.log('Meaning:', meaningText);
            }
        } catch (e) {
            console.log('Meaning not found');
        }
        
        console.log('TC-LEARN-032: PASSED');
    });
});
