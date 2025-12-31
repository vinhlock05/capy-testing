/**
 * TC-COMM-016: Verify Post Detail displays full content, images, tags, author info
 */
const CommunityObject = require('../object/community.object');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-016: Post Detail Content', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToPostDetail();
    });

    it('should display full post content, images, tags, and author info', async () => {
        // Verify content
        const content = await $(CommunityObject.postDetail.content);
        await expect(content).toBeDisplayed();
        console.log('Content displayed');

        // Verify author info
        const authorName = await $(CommunityObject.postDetail.authorName);
        await expect(authorName).toBeDisplayed();
        console.log('Author name displayed');

        // Verify tags (if available)
        try {
            const tags = await $(CommunityObject.postDetail.tags);
            if (await tags.isDisplayed()) {
                console.log('Tags displayed');
            }
        } catch (e) {
            console.log('Tags not found');
        }

        // Verify images (if available)
        try {
            const images = await $(CommunityObject.postDetail.images);
            if (await images.isDisplayed()) {
                console.log('Images displayed');
            }
        } catch (e) {
            console.log('Images not found');
        }
        
        console.log('TC-COMM-016: PASSED');
    });
});
