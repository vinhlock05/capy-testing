/**
 * TC-COMM-028: Verify Report form displays with required fields
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-028: Report Form Fields', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCommunity();
    });

    it('should display Report form with required fields', async () => {
        await driver.pause(2000);

        // Open post options and click report
        await CommunityHelpers.openPostOptions();
        await CommunityHelpers.clickReport();

        // Verify report form container
        const reportForm = await $(CommunityObject.reportForm.container);
        await expect(reportForm).toBeDisplayed();
        console.log('Report form displayed');

        // Verify content input
        const contentInput = await $(CommunityObject.reportForm.contentInput);
        await expect(contentInput).toBeDisplayed();
        console.log('Content input displayed');

        // Verify submit button
        const submitBtn = await $(CommunityObject.reportForm.submitButton);
        await expect(submitBtn).toBeDisplayed();
        console.log('Submit button displayed');
        
        console.log('TC-COMM-028: PASSED');
    });
});
