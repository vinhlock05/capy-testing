/**
 * TC-COMM-001: Verify selecting Community navigates to Community screen
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-001: Navigate to Community Screen', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
    });

    afterEach(async () => {
        await CommunityHelpers.ensureOnMainScreen();
    });

    it('should navigate to Community screen when clicking "Cộng đồng"', async () => {
        // Click "Cộng đồng" button
        const communityBtn = await $(CommunityObject.mainScreen.communityButton);
        await expect(communityBtn).toBeDisplayed();
        await communityBtn.click();
        await driver.pause(2000);

        // Verify Community screen is displayed
        const openFAB = await $(CommunityObject.community.openFAB);
        await expect(openFAB).toBeDisplayed();
        
        console.log('TC-COMM-001: PASSED');
    });
});
