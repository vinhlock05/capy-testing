/**
 * TC-LEARN-038: Verify that when user interacts the flashcard, it flips front to back and vice versa
 * 
 * Preconditions:
 * Flashcard is displayed
 * 
 * Steps:
 * 1. Tap on flashcard
 * 2. Tap on flashcard again
 * 
 * Expected: Card flips between front and back side
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-038: Flashcard Flip', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToFlashcard();
    });

    it('should flip flashcard when tapped', async () => {
        // Verify front side is initially displayed
        const frontWord = await $(LearnObject.flashcard.frontSide.word);
        await expect(frontWord).toBeDisplayed();
        console.log('Front side displayed initially');

        // Step 1: Tap to flip to back
        await LearnHelpers.flipCard();
        
        // Verify back side is now displayed
        const backMeaning = await $(LearnObject.flashcard.backSide.meaning);
        await expect(backMeaning).toBeDisplayed();
        console.log('Back side displayed after first tap');

        // Step 2: Tap again to flip back to front
        await LearnHelpers.flipCard();
        
        // Verify front side is displayed again
        const frontWordAgain = await $(LearnObject.flashcard.frontSide.word);
        await expect(frontWordAgain).toBeDisplayed();
        console.log('Front side displayed after second tap');
        
        console.log('TC-LEARN-038: PASSED');
    });
});
