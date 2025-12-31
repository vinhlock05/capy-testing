/**
 * Community Module Page Object - XPath Locators
 * Chứa các xPath/selector của các element trong module Cộng đồng
 * 
 * DANH SÁCH XPath CẦN ĐIỀN:
 * ================================
 * 
 * 1. MAIN SCREEN:
 *    - communityButton: Nút "Cộng đồng" trên navigation bar
 * 
 * 2. COMMUNITY SCREEN (Post List):
 *    - createPostFAB: Nút tạo bài viết (FAB)
 *    - postList.container: Container danh sách bài viết
 *    - postList.firstPost: Bài viết đầu tiên
 *    - postCard.*: Các element trong 1 post card
 *    - emptyMessage: MSG21 khi không có bài viết
 *    - errorMessage: MSG29 khi lỗi
 * 
 * 3. POST CARD:
 *    - content: Nội dung tóm tắt
 *    - thumbnail: Ảnh thumbnail
 *    - tags: Thẻ tags
 *    - author: Tên tác giả
 *    - voteCount: Số vote
 *    - commentCount: Số bình luận
 *    - optionsButton: Nút 3 chấm
 *    - likeButton: Nút like
 * 
 * 4. POST OPTIONS MENU:
 *    - editButton: Nút sửa (chỉ owner)
 *    - deleteButton: Nút xóa (chỉ owner)
 *    - reportButton: Nút báo cáo
 * 
 * 5. POST DETAIL SCREEN:
 *    - content: Nội dung đầy đủ
 *    - images: Danh sách ảnh
 *    - tags: Tags
 *    - authorInfo: Thông tin tác giả
 *    - voteCount/commentCount
 *    - likeButton/commentButton/reportButton
 * 
 * 6. COMMENTS SECTION:
 *    - commentList: Danh sách comment
 *    - parentComment: Comment cha
 *    - expandRepliesButton: Nút mở rộng reply
 *    - childComment: Comment con
 *    - commentInput: Ô nhập bình luận
 *    - submitCommentButton: Nút gửi bình luận
 * 
 * 7. REPORT FORM:
 *    - container: Container form báo cáo
 *    - reasonSelect: Dropdown lý do
 *    - contentInput: Ô nhập nội dung
 *    - submitButton: Nút gửi báo cáo
 * 
 * 8. CREATE/EDIT POST SCREEN:
 *    - contentInput: Ô nhập nội dung bài viết
 *    - tagsInput: Ô nhập tags
 *    - imagePicker: Nút chọn ảnh
 *    - selectedImages: Danh sách ảnh đã chọn
 *    - submitButton: Nút đăng/cập nhật
 */

const CommunityObject = {
    // ============================================
    // LOGIN
    // ============================================
    login: {
        usernameInput: '//android.widget.ScrollView/android.widget.EditText[1]',
        passwordInput: '//android.widget.ScrollView/android.widget.EditText[2]',
        loginButton: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
    },

    // ============================================
    // MAIN SCREEN
    // ============================================
    mainScreen: {
        communityButton: '//android.widget.TextView[@text="Cộng đồng"]', // TODO: Nút "Cộng đồng" trên navigation bar
    },

    // ============================================
    // COMMUNITY SCREEN (Post List)
    // ============================================
    community: {
        // === Header ===
        screenTitle: '', // TODO: Tiêu đề "Cộng đồng"

        // === Create Post FAB ===
        openFAB: '//android.view.View[@content-desc="Mở rộng"]', // TODO: Nút mở FAB
        createPostFAB: '//android.view.View[@content-desc="Create Post"]', // TODO: Floating Action Button tạo bài viết

        // === Post List ===
        postList: {
            container: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]',  // TODO: Container danh sách bài viết
            firstPost: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View',  // TODO: Bài viết đầu tiên
        },

        // === Post Card Details ===
        postCard: {
            content: '//android.widget.TextView[@text="hmmm"]',        // TODO: Nội dung tóm tắt bài viết
            thumbnail: '//android.widget.ImageView[@content-desc="Image 1"]',      // TODO: Ảnh thumbnail
            tags: '//android.widget.TextView[@text="#hihi"]',           // TODO: Thẻ tags
            author: '//android.widget.TextView[@text="User001"]',         // TODO: Tên tác giả
            avatar: '//android.widget.ImageView[@content-desc="Avatar"]',         // TODO: Avatar tác giả
            interactionCount: '//android.widget.TextView[contains(@text,"trả lời, lượt thích")]',
            optionsButton: '//android.view.View[@content-desc="More options"]',  // TODO: Nút 3 chấm (options menu)
            likeButton: '//android.widget.CheckBox',     // TODO: Nút like
            commentButton: '//android.widget.TextView[@text="TRẢ LỜI"]',  // TODO: Nút comment
        },

        // === Messages ===
        emptyMessage: '',   // TODO: MSG21 - Không có bài viết
        errorMessage: '',   // TODO: MSG29 - Lỗi API
        loadingIndicator: '', // TODO: Loading spinner
    },

    // ============================================
    // POST OPTIONS MENU (Popup sau khi click 3 chấm)
    // ============================================
    postOptions: {
        editButton: '//android.widget.TextView[@text="Chỉnh sửa"]',     // TODO: Nút "Sửa" (chỉ hiện với owner)
        deleteButton: '//android.widget.TextView[@text="Xóa"]',   // TODO: Nút "Xóa" (chỉ hiện với owner)
        reportButton: '//android.widget.TextView[@text="Báo cáo vi phạm"]',   // TODO: Nút "Báo cáo"
    },

    // ============================================
    // POST DETAIL SCREEN
    // ============================================
    postDetail: {
        // === Content ===
        content: '//android.widget.TextView[@text="hmmm"]',        // TODO: Nội dung bài viết đầy đủ
        images: '//android.widget.ImageView[@content-desc="Image 1"]',         // TODO: Danh sách ảnh
        tags: '//android.widget.TextView[@text="#hihi"]',           // TODO: Tags
        
        // === Author Info ===
        authorName: '//android.widget.TextView[@text="User001"]',     // TODO: Tên tác giả
        authorAvatar: '//android.view.View[@content-desc="Avatar"]',   // TODO: Avatar tác giả
        postDate: '//android.widget.TextView[@text="31/12/2025 12:13"]',       // TODO: Ngày đăng

        // === Interactions ===
        interactionCount: '//android.widget.TextView[contains(@text,"trả lời, lượt thích")]',      // TODO: Số lượt vote
        commentButton: '//android.widget.TextView[@text="TRẢ LỜI"]',  // TODO: Nút comment
        reportButton: '//android.widget.TextView[@text="Báo cáo vi phạm"]',   // TODO: Nút báo cáo
    },

    // ============================================
    // COMMENTS SECTION
    // ============================================
    comments: {
        // === Comment List ===
        container: '',          // TODO: Container phần bình luận
        firstComment: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[3]',       // TODO: Comment đầu tiên
        
        // === Parent Comment ===
        parentComment: {
            avatar: '(//android.view.View[@content-desc="Avatar"])[2]',         // TODO: Avatar người bình luận
            name: '(//android.widget.TextView[@text="User001"])[1]',           // TODO: Tên người bình luận
            content: '//android.widget.TextView[@text="hahi"]',        // TODO: Nội dung bình luận
            date: '(//android.widget.TextView[@text="31/12/2025 12:17"])[1]',           // TODO: Ngày bình luận
            expandReplies: '(//android.widget.TextView[@text="Trả lời"])[1]',  // TODO: Nút "Xem thêm phản hồi"
        },

        // === Child Comment ===
        childComment: {
            container: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[5]',      // TODO: Container comment con
            content: '//android.widget.TextView[@text="hm"]',        // TODO: Nội dung reply
        },

        // === Comment Input ===
        inputField: '//android.widget.EditText',         // TODO: Ô nhập bình luận
        submitButton: '//android.view.View[@content-desc="Gửi"]',       // TODO: Nút gửi bình luận
    },

    // ============================================
    // REPORT FORM
    // ============================================
    reportForm: {
        container: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View',
        contentInput: '//android.widget.EditText',
        submitButton: '//android.widget.TextView[@text="Gửi báo cáo"]',
        cancelButton: '//android.widget.ImageView[@content-desc="Back"]',
    },

    // ============================================
    // CREATE/EDIT POST SCREEN
    // ============================================
    postForm: {
        // === Content ===
        contentInput: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.widget.EditText[2]',       // TODO: Ô nhập nội dung bài viết
        tagsInput: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.widget.EditText[1]',          // TODO: Ô nhập tags

        // === Images ===
        imagePicker: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button',        // TODO: Nút chọn ảnh
        selectedImages: '',     // TODO: Container ảnh đã chọn
        removeImageButton: '(//android.view.View[@content-desc="Xóa"])[2]',  // TODO: Nút xóa ảnh

        // === Actions ===
        submitButton: '//android.widget.TextView[@text="Xong"]',       // TODO: Nút đăng/cập nhật bài viết
        cancelButton: '',       // TODO: Nút hủy
    },

    // ============================================
    // COMMON ELEMENTS
    // ============================================
    common: {
        loadingSpinner: '',
        backButton: '',
        toastMessage: '',
    },

    // ============================================
    // DYNAMIC LOCATORS
    // ============================================
    getTextView: (text) => `//android.widget.TextView[@text="${text}"]`,
    getByContentDesc: (desc) => `//*[@content-desc="${desc}"]`,
    getPostByIndex: (index) => `(//android.view.View[contains(@clickable,"true")])[${index}]`,
};

module.exports = CommunityObject;
