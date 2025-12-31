/**
 * TC-COMM-037: Verify Create Post form displays with empty fields
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-037: Create Post Form Empty', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCreatePost();
    });

    it('should display Create Post form with empty fields', async () => {
        // Verify content input is empty
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await expect(contentInput).toBeDisplayed();
        const contentText = await contentInput.getText();
        expect(contentText === '' || contentText === null).toBe(true);
        console.log('Content input is empty');

        // Verify submit button
        const submitBtn = await $(CommunityObject.postForm.submitButton);
        await expect(submitBtn).toBeDisplayed();
        console.log('Submit button displayed');
        
        console.log('TC-COMM-037: PASSED');
    });
});
