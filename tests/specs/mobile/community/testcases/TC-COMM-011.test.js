/**
 * TC-COMM-011: Verify clicking Create Post FAB navigates to Create Post screen
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-011: Navigate to Create Post', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should navigate to Create Post screen when clicking FAB', async () => {
        // First click openFAB to expand menu
        const openFab = await $(CommunityObject.community.openFAB);
        await openFab.click();
        await driver.pause(500);

        // Then click Create Post FAB
        const fab = await $(CommunityObject.community.createPostFAB);
        await fab.click();
        await driver.pause(2000);

        // Verify Create Post screen is displayed
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await expect(contentInput).toBeDisplayed();
        console.log('Create Post screen is displayed');
        
        console.log('TC-COMM-011: PASSED');
    });
});
