/**
 * TC-COMM-018: Verify Like, Comment, Report buttons are displayed
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-018: Action Buttons Display', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should display Comment and Report buttons', async () => {
        // Verify Comment button (submit)
        const commentBtn = await $(CommunityObject.comments.submitButton);
        await expect(commentBtn).toBeDisplayed();
        console.log('Comment submit button displayed');

        // Open options to check report
        await CommunityHelpers.pressBack();
        await CommunityHelpers.navigateToCommunity();
        await driver.pause(1000);
        await CommunityHelpers.openPostOptions();

        // Verify Report button in options
        const reportBtn = await $(CommunityObject.postOptions.reportButton);
        await expect(reportBtn).toBeDisplayed();
        console.log('Report button displayed');
        
        console.log('TC-COMM-018: PASSED');
    });
});
