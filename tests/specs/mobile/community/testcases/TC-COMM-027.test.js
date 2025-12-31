/**
 * TC-COMM-027: Verify selecting Report option opens Report form
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-027: Open Report Form', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should open Report form when selecting Report option', async () => {
        await driver.pause(2000);

        // Open post options
        await CommunityHelpers.openPostOptions();

        // Click report
        await CommunityHelpers.clickReport();

        // Verify report form is displayed
        const reportForm = await $(CommunityObject.reportForm.container);
        await expect(reportForm).toBeDisplayed();
        console.log('Report form is displayed');
        
        console.log('TC-COMM-027: PASSED');
    });
});
