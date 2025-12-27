// describe('Android App Login Test', () => {
//     it('should login successfully', async () => {
//         // Wait for app to load
//         await driver.pause(3000);
//         console.log('--- Step 1: App opened ---');

//         // 1. Enter Username (EditText index 0)
//         console.log('--- Step 2: Finding Username Input ---');
//         // Because there's no unique ID, we use the UIAutomator Android selector strategy
//         const usernameInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
//         await usernameInput.setValue('Admin001');
//         console.log('--- Step 2: Entered Username ---');
//         await driver.pause(1000);

//         // 2. Enter Password (EditText index 1)
//         console.log('--- Step 3: Finding Password Input ---');
//         const passwordInput = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
//         await passwordInput.setValue('Admin123');
//         console.log('--- Step 3: Entered Password ---');
//         await driver.pause(1000);

//         // 3. Click Login Button 
//         // Strategy: Find Button by Text "Đăng nhập" because index might change
//         console.log('--- Step 4: Finding Login Button ---');
//         // XPath is reliable for text matching if no ID exists: //android.widget.Button[@text="Đăng nhập"]
//         // Or UIAutomator: new UiSelector().text("Đăng nhập")
//         const loginBtn = await $('android=new UiSelector().text("Đăng nhập")');
//         await loginBtn.click();
//         console.log('--- Step 4: Clicked Login Button ---');
        
//         // Wait to see the result
//         await driver.pause(5000);
//         console.log('--- Step 5: Login Success, Home Screen Loaded ---');

//         // Navigation Steps
//         const menuItems = ['Khoá học', 'Chủ đề', 'Từ vựng', 'Người dùng'];

//         for (const item of menuItems) {
//             console.log(`--- Navigating to: ${item} ---`);
            
//             // 1. Open Navigation Drawer
//             // TODO: Replace the XPath below with the actual one from Appium Inspector
//             // Example: //android.widget.Button[@content-desc="Open navigation drawer"]
//             const menuBtn = await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button');
//             await menuBtn.click();
//             await driver.pause(1000); // Wait for drawer animation

//             // 2. Click the Menu Item by Text
//             const menuItem = await $(`android=new UiSelector().text("${item}")`);
//             await menuItem.click();
            
//             console.log(`--- Arrived at: ${item} ---`);
//             await driver.pause(2000); // Stay a bit to observe
//         }

//         console.log('--- Test Completed ---');
//     });
// });
