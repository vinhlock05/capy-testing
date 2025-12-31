/**
 * TC-LEARN-018: Verify topic list loads successfully for selected course
 * 
 * Preconditions:
 * User is on Topic List screen with valid course
 * 
 * Steps:
 * 1. Wait for topic API response
 * 2. Observe topic cards
 * 
 * Expected: Topics are displayed
 */

const LearnObject = require('../object/learn.object');
const LearnHelpers = require('../helpers/learn.helpers');

describe('TC-LEARN-018: Topic List Loads Successfully', () => {
    before(async () => {
        await LearnHelpers.loginAsUser();
        await LearnHelpers.navigateToTopicList();
    });
    it('should load and display topic list successfully', async () => {
        // Step 1: Wait for loading
        await driver.pause(2000);

        // Step 2: Verify topics are displayed
        const firstTopic = await $(LearnObject.topicList.firstTopicCard);
        await expect(firstTopic).toBeDisplayed();
        
        console.log('TC-LEARN-018: PASSED');
    });
});
