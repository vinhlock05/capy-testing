/**
 * TC-COMM-040: Verify user can input content, tags, images
 */
const CommunityObject = require('../object/community.object');
const CommunityData = require('../data/community.data');
const CommunityHelpers = require('../helpers/community.helpers');

describe('TC-COMM-040: Post Form Input', () => {
    before(async () => {
        await CommunityHelpers.loginAsUser();
        await CommunityHelpers.navigateToCreatePost();
    });

    it('should allow user to input content and tags', async () => {
        // Enter content
        const contentInput = await $(CommunityObject.postForm.contentInput);
        await contentInput.setValue(CommunityData.post.validContent);
        await driver.pause(500);

        const contentText = await contentInput.getText();
        expect(contentText).toContain(CommunityData.post.validContent);
        console.log('Content entered:', contentText);

        // Enter tags
        const tagsInput = await $(CommunityObject.postForm.tagsInput);
        await tagsInput.setValue(CommunityData.post.validTags);
        await driver.pause(500);
        console.log('Tags entered:', CommunityData.post.validTags);

        // Verify image picker is available
        const imagePicker = await $(CommunityObject.postForm.imagePicker);
        await expect(imagePicker).toBeDisplayed();
        console.log('Image picker available');
        
        console.log('TC-COMM-040: PASSED');
    });
});
