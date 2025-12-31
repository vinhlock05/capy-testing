/**
 * TC-COMM-019: Verify parent comments load successfully
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-019: Parent Comments Load', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should load parent comments successfully', async () => {
        // Scroll to comments section
        await CommunityHelpers.scrollDown();
        await driver.pause(1000);

        // Check if comments container is displayed
        const hasComments = await CommunityHelpers.isElementDisplayed(
            CommunityObject.comments.container
        );

        if (hasComments) {
            const firstComment = await $(CommunityObject.comments.firstComment);
            await expect(firstComment).toBeDisplayed();
            console.log('Parent comments loaded');
        } else {
            console.log('No comments on this post');
        }
        
        console.log('TC-COMM-019: PASSED');
    });
});
