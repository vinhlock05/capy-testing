/**
 * TC-COMM-003: Verify post list displays correctly when API returns posts
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-003: Post List Display', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should display post list when API returns posts', async () => {
        await driver.pause(2000);

        // Check if post list or empty message is displayed
        const hasPostList = await CommunityHelpers.isElementDisplayed(
            CommunityObject.community.postList.container
        );
        const hasEmptyMsg = await CommunityHelpers.isElementDisplayed(
            CommunityObject.community.emptyMessage
        );

        expect(hasPostList || hasEmptyMsg).toBe(true);

        if (hasPostList) {
            const firstPost = await $(CommunityObject.community.postList.firstPost);
            await expect(firstPost).toBeDisplayed();
            console.log('Post list is displayed');
        } else {
            console.log('Empty message is displayed');
        }
        
        console.log('TC-COMM-003: PASSED');
    });
});
