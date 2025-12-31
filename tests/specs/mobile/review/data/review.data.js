/**
 * Review Module Test Data
 * Chứa dữ liệu test cho module Ôn tập
 */

const ReviewData = {
    // ============================================
    // LOGIN CREDENTIALS
    // ============================================
    login: {
        username: 'User001',
        password: 'User1123',
    },

    // ============================================
    // EXPECTED MESSAGES
    // ============================================
    messages: {
        MSG19_noWords: '',      // TODO: "Không có từ cần ôn tập"
        MSG29_error: '',        // TODO: "Đã xảy ra lỗi"
        completionTitle: '',    // TODO: "Hoàn thành"
        exitWarning: '',        // TODO: "Tiến trình ôn tập sẽ không được lưu..."
    },

    // ============================================
    // BUTTON TEXT
    // ============================================
    buttons: {
        startReview: 'Bắt đầu ôn tập',
        check: 'Kiểm tra',
        trueBtn: 'Đúng',
        falseBtn: 'Sai',
        confirm: 'Xác nhận',
        exit: 'Thoát',
        cancel: 'Hủy',
    },

    // ============================================
    // QUIZ TYPES
    // ============================================
    quizTypes: {
        FILL_IN: 'fill_in',
        CHOOSE_MEANING: 'choose_meaning',
        TRUE_FALSE: 'true_false',
        LISTEN_CHOOSE: 'listen_choose',
    },

    // ============================================
    // PROFICIENCY LEVELS
    // ============================================
    proficiencyLevels: [
        'Level 1',  // TODO: Actual level names
        'Level 2',
        'Level 3',
        'Level 4',
    ],

    // ============================================
    // TEST ANSWERS
    // ============================================
    testAnswers: {
        correctWord: '',        // TODO: Từ đúng để test
        incorrectWord: 'wronganswer123',
    },
};

module.exports = ReviewData;
