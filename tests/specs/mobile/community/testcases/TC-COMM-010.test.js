/**
 * TC-COMM-010: Verify Create Post FAB is visible and clickable
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-010: Create Post FAB', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should display visible and clickable Create Post FAB', async () => {
        await driver.pause(2000);

        // First verify openFAB is displayed
        const openFab = await $(CommunityObject.community.openFAB);
        await expect(openFab).toBeDisplayed();
        console.log('Open FAB button is visible');

        // Click to open FAB menu
        await openFab.click();
        await driver.pause(500);

        // Verify Create Post FAB is displayed
        const fab = await $(CommunityObject.community.createPostFAB);
        await expect(fab).toBeDisplayed();
        console.log('Create Post FAB is visible');

        // Verify FAB is clickable
        await expect(fab).toBeClickable();
        console.log('Create Post FAB is clickable');
        
        console.log('TC-COMM-010: PASSED');
    });
});
