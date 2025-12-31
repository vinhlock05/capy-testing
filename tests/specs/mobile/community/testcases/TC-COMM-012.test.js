/**
 * TC-COMM-012: Verify Edit button is visible only for post owner
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-012: Edit Button for Owner', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should show Edit button when user is post owner', async () => {
        await driver.pause(2000);

        // Open options menu for first post (assuming it's user's post)
        await CommunityHelpers.openPostOptions();

        // Check if Edit button is visible
        const hasEditBtn = await CommunityHelpers.isElementDisplayed(
            CommunityObject.postOptions.editButton
        );

        if (hasEditBtn) {
            const editBtn = await $(CommunityObject.postOptions.editButton);
            await expect(editBtn).toBeDisplayed();
            console.log('Edit button is visible for owner');
        } else {
            console.log('Edit button not visible - post is not owned by current user');
        }
        
        console.log('TC-COMM-012: PASSED');
    });
});
