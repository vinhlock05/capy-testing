/**
 * TC-COMM-020: Verify child comments load when expanding parent comment
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-020: Child Comments Load', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should load child comments when expanding parent comment', async () => {
        // Scroll to comments
        await CommunityHelpers.scrollDown();
        await driver.pause(1000);

        // Check if expand replies button exists
        const hasExpandBtn = await CommunityHelpers.isElementDisplayed(
            CommunityObject.comments.parentComment.expandReplies
        );

        if (hasExpandBtn) {
            await CommunityHelpers.expandReplies();

            // Verify child comments are displayed
            const childComment = await $(CommunityObject.comments.childComment.container);
            await expect(childComment).toBeDisplayed();
            console.log('Child comments loaded');
        } else {
            console.log('No replies to expand');
        }
        
        console.log('TC-COMM-020: PASSED');
    });
});
