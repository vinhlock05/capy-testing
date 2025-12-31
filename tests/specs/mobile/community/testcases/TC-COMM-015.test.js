/**
 * TC-COMM-015: Verify clicking post card navigates to Post Detail screen
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-015: Navigate to Post Detail', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should navigate to Post Detail when clicking post card', async () => {
        await driver.pause(2000);

        // Click first post
        const firstPost = await $(CommunityObject.community.postList.firstPost);
        await firstPost.click();
        await driver.pause(2000);

        // Verify Post Detail screen is displayed
        const postContent = await $(CommunityObject.postDetail.content);
        await expect(postContent).toBeDisplayed();
        console.log('Post Detail screen is displayed');
        
        console.log('TC-COMM-015: PASSED');
    });
});
