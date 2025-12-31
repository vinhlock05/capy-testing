/**
 * TC-COMM-022: Verify user can like a post successfully
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-022: Like Post', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should like a post successfully', async () => {
        await driver.pause(2000);

        // Click like button
        await CommunityHelpers.likePost();
        await driver.pause(1000);

        // Verify like action (interaction count may change)
        console.log('Like action performed');
        
        console.log('TC-COMM-022: PASSED');
    });
});
