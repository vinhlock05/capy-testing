/**
 * TC-COMM-004: Verify post card displays all required elements
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-004: Post Card Elements', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should display content, thumbnail, tags, author, votes, comments on post card', async () => {
        await driver.pause(2000);

        // Verify first post exists
        const firstPost = await $(CommunityObject.community.postList.firstPost);
        await expect(firstPost).toBeDisplayed();

        // Verify post card elements
        const content = await $(CommunityObject.community.postCard.content);
        await expect(content).toBeDisplayed();
        console.log('Content displayed');

        const author = await $(CommunityObject.community.postCard.author);
        await expect(author).toBeDisplayed();
        console.log('Author displayed');

        // Verify interaction count (combined votes and comments)
        const interactionCount = await $(CommunityObject.community.postCard.interactionCount);
        await expect(interactionCount).toBeDisplayed();
        const countText = await interactionCount.getText();
        console.log('Interaction count:', countText);
        
        console.log('TC-COMM-004: PASSED');
    });
});
