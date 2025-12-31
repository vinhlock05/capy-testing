/**
 * Review Module Page Object - XPath Locators
 * Chứa các xPath/selector của các element trong module Ôn tập
 * 
 * LƯU Ý:
 * - Các locator có @text="..." là STATIC
 * - Feedback và Audio cần TEST BẰNG MẮT
 */

const ReviewObject = {
    // ============================================
    // LOGIN (Copy từ Learn module)
    // ============================================
    login: {
        usernameInput: '//android.widget.ScrollView/android.widget.EditText[1]',
        passwordInput: '//android.widget.ScrollView/android.widget.EditText[2]',
        loginButton: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
    },

    // ============================================
    // MAIN SCREEN (Home)
    // ============================================
    mainScreen: {
        reviewButton: '//android.widget.TextView[@text="Ôn tập"]', // TODO: Nút "Ôn tập" trên màn hình chính
    },

    // ============================================
    // REVIEW OVERVIEW SCREEN (Màn hình tổng quan ôn tập)
    // ============================================
    overview: {
        // === Header ===
        screenTitle: '//android.widget.TextView[@text="Ôn tập"]',

        // === Progress Summary Section ===
        progressSummary: {
            container: '//android.view.View/android.view.View',
            // Text động: "18 từ đã học chia theo cấp độ" 
            totalLearnedWordsLabel: '//android.widget.TextView[contains(@text, "từ đã học chia theo cấp độ")]',
            // Text động: "Chuẩn bị ôn tập: 10 từ"
            preparedWordCount: '//android.widget.TextView[contains(@text, "Chuẩn bị ôn tập")]',
        },

        // === Progress Chart (Bar chart với 4 levels) ===
        progressChart: {
            container: '//android.view.View/android.view.View',
            // Các bar có text "X từ" bên dưới
            level1Label: '(//android.widget.TextView[@text="1"])[1]',
            level2Label: '(//android.widget.TextView[@text="2"])[1]',
            level3Label: '(//android.widget.TextView[@text="3"])[1]',
            level4Label: '(//android.widget.TextView[@text="4"])[1]',
            // Số từ của mỗi level (cần dùng dynamic locator)
            // getWordCountByLevel: (level) => `//android.widget.TextView[@text="${level}"]/../android.widget.TextView[contains(@text, "từ")]`
        },

        // === Action Buttons ===
        startReviewButton: '//android.widget.Button[.//android.widget.TextView[@text="Ôn tập ngay"]]',
        startReviewButtonText: '//android.widget.TextView[@text="Ôn tập ngay"]',

        // === Messages ===
        noWordsMessage: '//android.widget.TextView[contains(@text, "Không có từ")]',
        errorMessage: '//android.widget.TextView[contains(@text, "Lỗi")]',
        loadingIndicator: '//android.widget.ProgressBar',
    },

    // Dynamic locator cho word count theo level
    getWordCountByLevel: (wordsText) => `//android.widget.TextView[@text="${wordsText}"]`,

    // ============================================
    // QUIZ SCREEN (Màn hình câu hỏi)
    // ============================================
    quiz: {
        // === Progress Bar ===
        progressIcon: '//android.widget.ImageView[@content-desc="Progress Icon"]',
        progressBar: '//android.widget.ProgressBar',
        progressText: '//android.widget.TextView[contains(@text, "/")]', // Text "3/10"

        // === Question Area (Dạng SEE_WORD_CHOOSE_MEANING) ===
        question: {
            container: '//android.widget.ScrollView',
            // "Từ: countess" - từ cần chọn nghĩa
            wordLabel: '//android.widget.TextView[contains(@text, "Từ:")]',
            // "Có nghĩa là:" - prompt chọn nghĩa
            meaningPrompt: '//android.widget.TextView[@text="Có nghĩa là:"]',
        },

        // === Multiple Choice Options (4 lựa chọn) ===
        multipleChoice: {
            // Các option là android.view.View chứa TextView
            option1: '(//android.widget.ScrollView//android.view.View[android.widget.TextView])[1]',
            option2: '(//android.widget.ScrollView//android.view.View[android.widget.TextView])[2]',
            option3: '(//android.widget.ScrollView//android.view.View[android.widget.TextView])[3]',
            option4: '(//android.widget.ScrollView//android.view.View[android.widget.TextView])[4]',
            // Lấy text của option theo index
            option1Text: '(//android.widget.ScrollView//android.view.View/android.widget.TextView)[1]',
            option2Text: '(//android.widget.ScrollView//android.view.View/android.widget.TextView)[2]',
            option3Text: '(//android.widget.ScrollView//android.view.View/android.widget.TextView)[3]',
            option4Text: '(//android.widget.ScrollView//android.view.View/android.widget.TextView)[4]',
        },

        // === True/False Buttons ===
        trueFalse: {
            trueButton: '//android.widget.Button[.//android.widget.TextView[@text="Đúng"]]',
            falseButton: '//android.widget.Button[.//android.widget.TextView[@text="Sai"]]',
        },

        // === Fill-In Input ===
        fillIn: {
            inputField: '//android.widget.EditText',
            checkButton: '//android.widget.Button[.//android.widget.TextView[@text="Kiểm tra"]]',
        },

        // === Listen and Choose ===
        listenChoose: {
            audioIcon: '//android.widget.ImageView[@content-desc="Audio Icon" or @content-desc="Play Audio"]',
            // Options giống multiple choice
        },

        // === Word Detail Popup (Bottom Sheet sau khi chọn đáp án) ===
        wordDetail: {
            // Icon audio trong popup
            audioIcon: '//android.view.View//android.widget.ImageView',
            // Từ vựng chính (ví dụ: "countess")
            word: '(//android.view.View//android.widget.TextView)[1]',
            // Loại từ "(Noun)"
            partOfSpeech: '//android.widget.TextView[contains(@text, "(") and contains(@text, ")")]',
            // Phiên âm "/although/"
            phonetic: '//android.widget.TextView[starts-with(@text, "/") and substring(@text, string-length(@text)) = "/"]',
            // Nghĩa (ví dụ: "autus cognatus")
            meaning: '//android.widget.TextView[@text="autus cognatus"]', // Dynamic
            // Ví dụ "Ví dụ: ..."
            example: '//android.widget.TextView[starts-with(@text, "Ví dụ:")]',
            // Dịch nghĩa "Dịch: ..."
            translation: '//android.widget.TextView[starts-with(@text, "Dịch:")]',
        },

        // === Continue Button ===
        continueButton: '//android.widget.Button[.//android.widget.TextView[@text="Tiếp tục"]]',
        continueButtonText: '//android.widget.TextView[@text="Tiếp tục"]',

        // === Feedback (VISUAL TEST - màu sắc option) ===
        feedback: {
            // Option đúng có viền xanh, option sai có viền đỏ
            // Cần kiểm tra bằng mắt hoặc screenshot comparison
            correctOptionIndicator: '', // VISUAL TEST ONLY - Checkmark xanh
            incorrectOptionIndicator: '', // VISUAL TEST ONLY - X đỏ
        },
    },

    // ============================================
    // COMPLETION SCREEN (Màn hình hoàn thành ôn tập)
    // ============================================
    completion: {
        // Container của dialog
        container: '//android.view.View/android.view.View/android.view.View/android.view.View',
        // Tiêu đề "Hoàn tất ôn tập"
        title: '//android.widget.TextView[@text="Hoàn tất ôn tập"]',
        
        // === Statistics ===
        stats: {
            // Text động: "Bạn đã ôn được 8 từ"
            wordsReviewed: '//android.widget.TextView[contains(@text, "Bạn đã ôn được")]',
        },

        // === Actions ===
        continueButton: '//android.widget.Button',
        continueButtonText: '//android.widget.TextView[@text="Tiếp tục"]',
    },

    // ============================================
    // EXIT DIALOG (Dialog thoát giữa chừng)
    // ============================================
    exitDialog: {
        container: '//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View',      // TODO: Container dialog
        message: '//android.widget.TextView[@text="Tiến trình sẽ không được lưu. Bạn có chắc muốn thoát?"]',        // TODO: Nội dung cảnh báo
        confirmButton: '//android.widget.TextView[@text="Thoát"]',  // TODO: Nút xác nhận thoát
        cancelButton: '//android.widget.TextView[@text="Hủy"]',   // TODO: Nút hủy
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
    getOptionByIndex: (index) => `(//android.view.View[contains(@clickable,"true")])[${index}]`,
};

module.exports = ReviewObject;
