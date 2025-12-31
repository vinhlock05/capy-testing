/**
 * TC-COMM-046: Verify system rejects empty or invalid content
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-046: Reject Empty Content', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCreatePost();
    });

    it('should reject empty content when submitting', async () => {
        // Leave content empty
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await contentInput.clearValue();
        await driver.pause(500);

        // Try to submit
        await CommunityHelpers.submitPost();

        // Should still be on form (rejected)
        const stillOnForm = await CommunityHelpers.isElementDisplayed(
            CommunityObject.postForm.contentInput
        );
        expect(stillOnForm).toBe(true);
        console.log('Empty content rejected');
        
        console.log('TC-COMM-046: PASSED');
    });
});
