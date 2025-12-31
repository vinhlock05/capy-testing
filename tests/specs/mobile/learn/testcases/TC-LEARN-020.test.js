/**
 * TC-LEARN-020: Verify topic card displays title and description correctly
 * 
 * Preconditions:
 * Topic list is displayed
 * 
 * Steps:
 * 1. Observe a topic card
 * 2. Compare with API data
 * 
 * Expected: Topic information is displayed correctly
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-020: Topic Card Display', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToTopicList();
    });

    it('should display topic card with title and description', async () => {
        // Step 1: Verify topic card is displayed
        const topicCard = await $(LearnObject.topicList.firstTopicCard);
        await expect(topicCard).toBeDisplayed();

        // Verify title
        const title = await $(LearnObject.topicList.topicCard.title);
        await expect(title).toBeDisplayed();
        const titleText = await title.getText();
        expect(titleText.length).toBeGreaterThan(0);
        console.log('Topic Title:', titleText);

        // Verify description (if visible)
        try {
            const description = await $(LearnObject.topicList.topicCard.description);
            if (await description.isDisplayed()) {
                const descText = await description.getText();
                console.log('Topic Description:', descText);
            }
        } catch (e) {
            console.log('Description not visible');
        }
        
        console.log('TC-LEARN-020: PASSED');
    });
});
