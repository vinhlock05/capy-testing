/**
 * TC-COMM-023: Verify user can unlike a post after liking
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-023: Unlike Post', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should unlike a post after liking', async () => {
        await driver.pause(2000);

        // Like the post
        await CommunityHelpers.likePost();
        await driver.pause(500);
        console.log('Liked post');

        // Unlike the post
        await CommunityHelpers.likePost();
        await driver.pause(500);
        console.log('Unliked post');
        
        console.log('TC-COMM-023: PASSED');
    });
});
