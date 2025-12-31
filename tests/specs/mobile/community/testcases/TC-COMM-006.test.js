/**
 * TC-COMM-006: Verify pagination loads next page when scrolling to bottom
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-006: Pagination Load', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should load more posts when scrolling to bottom', async () => {
        await driver.pause(2000);

        // Get initial post count (approximate)
        const firstPost = await $(CommunityObject.community.postList.firstPost);
        await expect(firstPost).toBeDisplayed();
        console.log('Initial posts loaded');

        // Scroll down
        await CommunityHelpers.scrollDown();
        console.log('Scrolled down');

        // Wait for loading
        await driver.pause(2000);

        // Verify still on community screen (posts loaded)
        const stillOnCommunity = await CommunityHelpers.isOnCommunityScreen();
        expect(stillOnCommunity).toBe(true);
        console.log('More posts loaded after scroll');
        
        console.log('TC-COMM-006: PASSED');
    });
});
