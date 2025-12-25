// describe("Web React Login Test", () => {
//   it("should open the app and login", async () => {
//     // 1. Open Browser & Navigate
//     console.log("--- Step 1: Opening Web Page ---");
//     // Replace with your actual local React URL
//     await browser.url("http://localhost:3000/");

//     // Wait for title or some element
//     // Adjust if needed
//     console.log("--- Step 1: Page Opened ---");

//     // 2. Find Elements (Updated based on your screenshots)
//     // Username has id="username"
//     const usernameInput = await $("#username");

//     // Password usually has type="password" (assuming similar structure)
//     const passwordInput = await $("#password");

//     // Login button has text "Đăng nhập" inside
//     const loginBtn = await $("button=Đăng nhập");

//     /*
//            If you don't have name attributes, you can use:
//            - Class: $('.classname')
//            - ID: $('#id')
//            - Text: $('button=Đăng nhập')
//         */

//     // 3. Interact
//     if (await usernameInput.isExisting()) {
//       await usernameInput.setValue("Admin001");
//       await passwordInput.setValue("Admin123");
//       await loginBtn.click();
//       console.log("--- Step 2: Login Submitted ---");
//     } else {
//       console.log("--- [WARN] Elements not found, please check selectors ---");
//     }

//     await browser.pause(3000);
//     console.log("--- Step 3: Login Success, Home Screen Loaded ---");

//     let link = await $('a[href*="admin/courses"]');
//     if (await link.isExisting()) {
//       await link.click();
//       console.log("--- Step 4: Navigated to Courses ---");
//       await browser.pause(2000);
//     } else {
//       console.log("--- [WARN] Courses link not found ---");
//     }

//     const addButton = await $("button=Thêm khóa học");
//     if (await addButton.isExisting()) {
//       await addButton.click();
//       console.log("--- Step 5: Navigated to Add Course ---");
//       await browser.pause(2000);
//     } else {
//       console.log("--- [WARN] Add Course button not found ---");
//     }
//     // // 4. Navigation Test
//     // // Mapping item names to href fragments (more reliable than text)
//     // const menuMap = {
//     //     'Khóa học': 'courses',
//     //     'Chủ đề': 'topics',
//     //     'Từ vựng': 'vocabulary', // or 'words', check your URL
//     //     'Người dùng': 'users'     // or 'dashboard' or 'profile', check your URL
//     // };

//     // const menuItems = ['Khóa học', 'Chủ đề', 'Từ vựng', 'Người dùng'];

//     // for (const item of menuItems) {
//     //     console.log(`--- Navigating to: ${item} ---`);

//     //     // Text matching failed, so we use HREF attribute matching!
//     //     // Example: <a href="/admin/courses">...</a>
//     //     // Selector: a[href*="courses"] (contains "courses")

//     //     const hrefFragment = menuMap[item];
//     //     // Fallback to text if map is missing, but prefer href
//     //     let link;
//     //     if (hrefFragment) {
//     //          link = await $(`a[href*="${hrefFragment}"]`);
//     //     } else {
//     //          link = await $(`span=${item}`); // Try finding the span directly
//     //     }

//     //     if (await link.isExisting()) {
//     //         await link.click();
//     //         console.log(`--- Arrived at: ${item} ---`);
//     //         await browser.pause(2000);
//     //     } else {
//     //         console.log(`--- [WARN] Link "${item}" (href containing "${hrefFragment}") not found ---`);
//     //     }
//     // }

//     console.log("--- Test Completed ---");
//   });
// });
