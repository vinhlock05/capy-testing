describe('Android App Scheleton Test', () => {
    it('should open the app successfully', async () => {
        // The driver is initialized automatically by WebdriverIO
        // This pause is just for you to visually verify the app launched
        await driver.pause(5000);

        // Example of interacting with an element (replace with actual ID from Inspector)
        // const loginBtn = await $('~login_button_id');
        // await loginBtn.click();

        // Simple assertion
        // const title = await $('id=com.example:id/title');
        // await expect(title).toHaveText('Welcome');
    });
});
