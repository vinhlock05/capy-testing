/**
 * TC-COMM-026: Verify submit comment button is inactive when comment is empty
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-026: Submit Button Disabled When Empty', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should disable submit button when comment is empty', async () => {
        // Comment input is already displayed when entering post detail
        
        // Ensure input is empty
        const input = await $(CommunityObject.comments.inputField);
        await input.clearValue();
        await driver.pause(500);

        // Check if submit button is disabled
        const isEnabled = await CommunityHelpers.isCommentSubmitEnabled();
        expect(isEnabled).toBe(false);
        console.log('Submit button is disabled when empty');
        
        console.log('TC-COMM-026: PASSED');
    });
});
