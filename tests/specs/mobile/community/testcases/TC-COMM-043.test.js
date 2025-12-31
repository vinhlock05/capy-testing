/**
 * TC-COMM-043: Verify submit triggers input validation
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-043: Submit Validation', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCreatePost();
    });

    it('should trigger validation when submitting empty form', async () => {
        // Leave content empty
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await contentInput.clearValue();
        await driver.pause(500);

        // Click submit
        await CommunityHelpers.submitPost();

        // Should still be on create post screen (validation failed)
        const stillOnForm = await CommunityHelpers.isElementDisplayed(
            CommunityObject.postForm.contentInput
        );
        expect(stillOnForm).toBe(true);
        console.log('Validation triggered - still on form');
        
        console.log('TC-COMM-043: PASSED');
    });
});
