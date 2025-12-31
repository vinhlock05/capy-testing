/**
 * Learn Module Page Object - XPath Locators
 * Chứa các xPath/selector của các element trong module Học từ vựng
 * 
 * HƯỚNG DẪN:
 * 1. Mở Appium Inspector
 * 2. Navigate đến từng màn hình
 * 3. Copy XPath của element vào vị trí tương ứng
 * 4. Ưu tiên sử dụng: content-desc > resource-id > text > XPath
 * 
 * LƯU Ý:
 * - Các locator có @text="..." là STATIC, chỉ hoạt động với text cố định
 * - Để test động, sử dụng các hàm getDynamic...() bên dưới
 * - Feedback section (L141-L146) CHỈ TEST BẰNG MẮT (Visual Testing)
 */

const LearnObject = {
    login: {
        usernameInput: '//android.widget.ScrollView/android.widget.EditText[1]',
        passwordInput: '//android.widget.ScrollView/android.widget.EditText[2]',
        loginButton: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
    },
    // ============================================
    // MAIN SCREEN (Home)
    // ============================================
    mainScreen: {
        // Button "Học từ vựng" trên màn hình chính
        learnVocabButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]', // TODO: Lấy XPath từ Appium Inspector
    },

    // ============================================
    // COURSE LIST SCREEN (Danh sách khóa học)
    // ============================================
    courseList: {
        // Thanh tìm kiếm
        searchInput: '//android.widget.EditText', // TODO

        // Filter chips theo level
        openFilterButton: '//android.view.View[@content-desc="Lọc trình độ"]',
        filterAll: '//android.widget.ScrollView/android.view.View[1]',          // TODO: "Tất cả"
        filterBeginner: '//android.widget.ScrollView/android.view.View[2]',     // TODO: "Sơ cấp" / "Beginner"
        filterIntermediate: '//android.widget.ScrollView/android.view.View[3]', // TODO: "Trung cấp" / "Intermediate"  
        filterAdvanced: '//android.widget.ScrollView/android.view.View[4]',     // TODO: "Cao cấp" / "Advanced"

        // Course cards
        firstCourseCard: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View',    // TODO: Card đầu tiên
        
        // Course card details (trong 1 card)
        courseCard: {
            title: '//android.widget.TextView[@text="Organized AI-powered standardization"]',          // TODO: Tên khóa học
            target: '//android.widget.TextView[contains(@text, "Mục tiêu")]',         // TODO: Mục tiêu
            description: '//android.widget.TextView[contains(@text, "Nội dung")]',    // TODO: Mô tả
            levelBadge: '(//android.widget.TextView[contains(@text, "Trình độ")])[1]',     // TODO: Badge hiển thị level
        },

        // Messages
        emptyMessage: '//android.widget.TextView[@text="Không có khóa học"]',       // TODO: MSG30 - Không có khóa học
        errorMessage: '',       // TODO: MSG29 - Lỗi API
        loadingIndicator: '',   // TODO: Loading spinner
    },

    // ============================================
    // TOPIC LIST SCREEN (Danh sách chủ đề)
    // ============================================
    topicList: {
        // Header
        screenTitle: '//android.widget.TextView[@text="Organized AI-powered standardization"]',        // TODO: Tiêu đề màn hình

        // Thanh tìm kiếm
        searchInput: '//android.widget.EditText',        // TODO

        // Topic cards
        firstTopicCard: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View',     // TODO: Card đầu tiên

        // Topic card details
        topicCard: {
            title: '//android.widget.TextView[contains(@text, "blah")]',          // TODO: Tên chủ đề
            description: '//android.widget.TextView[contains(@text, "Bellum magnam caritas cauda.")]',    // TODO: Mô tả
            completedIcon: '',  // TODO: Icon đã hoàn thành (checkmark)
            progressText: '',   // TODO: Text tiến độ (nếu có)
        },

        // Messages
        emptyMessage: '//android.widget.TextView[@text="Không có chủ đề"]',       // TODO: MSG31 - Không có chủ đề
        errorMessage: '',       // TODO: MSG29 - Lỗi API
        loadingIndicator: '',   // TODO

        // Back button
        backButton: '//android.widget.Button',         // TODO
    },

    // ============================================
    // FLASHCARD SCREEN (Màn hình học flashcard)
    // ============================================
    flashcard: {
        // === Progress Bar ===
        progressBar: '',        // TODO: Thanh tiến độ
        progressText: '',       // TODO: Text "3/10" hoặc "30%"
        progressIcon: '//android.widget.ImageView[@content-desc="Progress Icon"]',       // TODO: Icon tiến độ

        // === Card Container ===
        cardContainer: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]',      // TODO: Container chính của flashcard

        // === Front Side (Mặt trước) ===
        frontSide: {
            container: '',      // TODO: Container mặt trước
            word: '//android.widget.TextView[@text="countess"]',           // TODO: Từ vựng (VD: "Apple")
            image: '//android.view.View[@content-desc="Illustration"]',          // TODO: Hình ảnh minh họa
        },

        // === Back Side (Mặt sau) ===
        backSide: {
            container: '',      // TODO: Container mặt sau
            phonetic: '//android.widget.TextView[@text="/although/"]',       // TODO: Phiên âm (VD: "/ˈæp.əl/")
            meaning: '//android.widget.TextView[@text="autus cognatus"]',        // TODO: Nghĩa tiếng Việt
            example: '//android.widget.TextView[@text="Adversus universe alioqui totam clamo provident."]',        // TODO: Câu ví dụ
            exampleTranslation: '//android.widget.TextView[@text="adiuvo cubo conicio carbo urbs"]', // TODO: Dịch câu ví dụ
        },

        // === Audio Buttons ===
        audio: {
            speakerNormalBtn: '//android.view.View[@content-desc="Phát âm"]', // TODO: Nút phát âm tốc độ thường (1x)
            speakerSlowBtn: '//android.view.View[@content-desc="Phát chậm"]',   // TODO: Nút phát âm chậm (0.5x / snail icon)
        },

        // === Action Buttons ===
        knownButton: '//android.widget.TextView[@text="Đã biết"]',        // TODO: Nút "Đã biết"
        continueButton: '//android.widget.TextView[@text="Tiếp tục"]',     // TODO: Nút "Tiếp tục"

        // === Messages ===
        noWordMessage: '',      // TODO: MSG32 - Không có từ vựng

        // === Back/Exit ===
        backButton: '',         // TODO: Nút back
    },

    // ============================================
    // LISTENING & INPUT SCREEN (Màn hình nghe và nhập)
    // ============================================
    listeningScreen: {
        // === Audio Section ===
        audio: {
            speakerNormalBtn: '//android.view.View[@content-desc="Phát âm"]', // TODO: Nút phát âm tốc độ thường
            speakerSlowBtn: '//android.view.View[@content-desc="Phát chậm"]',   // TODO: Nút phát âm chậm
        },

        // === Input Section ===
        answerInput: '//android.widget.EditText',        // TODO: Ô nhập đáp án
        checkButton: '//android.widget.TextView[@text="Kiểm tra"]',        // TODO: Nút "Kiểm tra"

        // === Feedback ===
        // ⚠️ CHỈ TEST BẰNG MẮT (Visual Testing) - Không automation
        // Lý do: Feedback UI thay đổi động, khó xác định locator ổn định
        feedback: {
            container: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]',
            correctIcon: '',    // VISUAL TEST ONLY
            incorrectIcon: '',  // VISUAL TEST ONLY  
            correctWord: '',    // VISUAL TEST ONLY
        },

        // === Progress ===
        progressBar: '',        // TODO: Thanh tiến độ (nếu hiển thị)
    },

    // ============================================
    // COMPLETION SCREEN (Màn hình hoàn thành)
    // ============================================
    completion: {
        // === Success Message ===
        messageContainer: '//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View',   // TODO: Container thông báo
        congratsText: '//android.widget.TextView[@text="Hoàn thành"]',       // TODO: Text chúc mừng
        completionMessage: '//android.widget.TextView[@text="Bạn đã hoàn thành chủ đề này!"]',  // TODO: MSG30 hoặc message hoàn thành

        // === Stats (nếu có) ===
        stats: {
            totalWords: '',     // TODO: Tổng số từ
            correctCount: '',   // TODO: Số từ đúng
            incorrectCount: '', // TODO: Số từ sai
        },

        // === Actions ===
        returnButton: '',       // TODO: Nút quay về
        retryButton: '',        // TODO: Nút học lại (nếu có)
    },

    // ============================================
    // DIALOGS (Các dialog popup)
    // ============================================
    dialogs: {
        // Exit Warning Dialog (MSG34)
        exitWarning: {
            container: '//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View',      // TODO: Dialog container
            message: '//android.widget.TextView[@text="Tiến trình học sẽ không được lưu. Bạn có chắc muốn thoát?"]',        // TODO: Nội dung cảnh báo
            title: '//android.widget.TextView[@text="Quay lại"]',          // TODO: Tiêu đề dialog
            confirmButton: '//android.widget.TextView[@text="Thoát"]',  // TODO: Nút xác nhận thoát
            cancelButton: '//android.widget.TextView[@text="Hủy"]',   // TODO: Nút hủy
        },

        // Generic Error Dialog
        error: {
            container: '',      // TODO
            message: '',        // TODO
            okButton: '',       // TODO
        },
    },

    // ============================================
    // COMMON ELEMENTS
    // ============================================
    common: {
        loadingSpinner: '',     // TODO: Loading spinner chung
        toastMessage: '',       // TODO: Toast notification
        backButton: '',         // TODO: Nút back chung
    },
    // ============================================
    // DYNAMIC LOCATORS (Hàm tạo locator động)
    // ============================================
    
    /**
     * Get TextView by text content
     * @param {string} text - Text to find
     * @returns {string} XPath selector
     */
    getTextView: (text) => `//android.widget.TextView[@text="${text}"]`,
    
    /**
     * Get element by content-desc
     * @param {string} desc - Content description
     * @returns {string} XPath selector
     */
    getByContentDesc: (desc) => `//*[@content-desc="${desc}"]`,
    
    /**
     * Get View by content-desc
     * @param {string} desc - Content description
     * @returns {string} XPath selector
     */
    getViewByContentDesc: (desc) => `//android.view.View[@content-desc="${desc}"]`,
    
    /**
     * Get level badge by level name
     * @param {string} levelName - Level name (Sơ cấp, Trung cấp, Cao cấp)
     * @returns {string} XPath selector for "Trình độ: [levelName]"
     */
    getLevelBadge: (levelName) => `//android.widget.TextView[contains(@text, "Trình độ: ${levelName}")]`,
};

module.exports = LearnObject;
