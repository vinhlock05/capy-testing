/**
 * TC-COMM-017: Verify vote count and comment count display correctly
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-017: Vote and Comment Counts', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should display vote count and comment count on posts', async () => {
        await driver.pause(2000);

        // Verify interaction count on post list (combined votes and comments)
        const interactionCount = await $(CommunityObject.community.postCard.interactionCount);
        await expect(interactionCount).toBeDisplayed();
        const countText = await interactionCount.getText();
        console.log('Interaction count on list:', countText);

        // Navigate to detail
        const firstPost = await $(CommunityObject.community.postList.firstPost);
        await firstPost.click();
        await driver.pause(2000);

        // Verify interaction count on detail
        const detailCount = await $(CommunityObject.postDetail.interactionCount);
        await expect(detailCount).toBeDisplayed();
        console.log('Interaction count on detail displayed');
        
        console.log('TC-COMM-017: PASSED');
    });
});
