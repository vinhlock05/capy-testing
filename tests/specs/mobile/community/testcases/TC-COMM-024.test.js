/**
 * TC-COMM-024: Verify comment input field appears when Comment is selected
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-024: Comment Input Field', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should display comment input field in post detail', async () => {
        // Comment input is already displayed when entering post detail
        // via clicking "TRẢ LỜI" button on post card
        
        // Verify comment input field is displayed
        const commentInput = await $(CommunityObject.comments.inputField);
        await expect(commentInput).toBeDisplayed();
        console.log('Comment input field is displayed');
        
        console.log('TC-COMM-024: PASSED');
    });
});
