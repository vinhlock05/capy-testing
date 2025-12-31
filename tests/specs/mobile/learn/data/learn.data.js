/**
 * Learn Module Test Data
 * Chứa dữ liệu test cho module Học từ vựng
 * 
 * ĐÃ CẬP NHẬT: Dựa trên dữ liệu thực tế từ Appium Inspector
 */

const LearnData = {
    // ============================================
    // SEARCH DATA
    // ============================================
    search: {
        // Course search - Dựa trên tên khóa học thực tế
        validCourseTitle: 'Seamless',        // Tên khóa học: "Seamless modular framework"
        validCourseTitleLower: 'seamless',
        validCourseTitleUpper: 'SEAMLESS',
        invalidCourseTitle: 'axuek12345',
        
        // Topic search - Dựa trên tên topic thực tế
        validTopicTitle: 'sticky',           // Tên topic: "sticky a"
        invalidTopicTitle: 'zzzxxxyyy',
    },

    // ============================================
    // EXPECTED MESSAGES (Đã cập nhật từ app)
    // ============================================
    messages: {
        // Course List
        MSG29: 'Đã xảy ra lỗi',
        MSG30_courseEmpty: 'Không có khóa học',  // Empty course list
        MSG31_topicEmpty: 'Không có chủ đề',     // Empty topic list
        MSG32: 'Không có từ vựng',               // No words in topic
        MSG34_exitWarning: 'Tiến trình học sẽ không được lưu. Bạn có chắc muốn thoát?',
        
        // Completion
        congratulations: 'Hoàn thành',
        topicCompleted: 'Bạn đã hoàn thành chủ đề này!',
    },

    // ============================================
    // FILTER OPTIONS
    // ============================================
    filters: {
        levels: {
            all: 'Tất cả',
            beginner: 'Sơ cấp',
            intermediate: 'Trung cấp',
            advanced: 'Cao cấp',
        },
    },

    // ============================================
    // TEST WORDS (for input validation)
    // Dựa trên từ thực tế: "but" với phonetic "/punctually/"
    // ============================================
    testWords: {
        // Từ đúng - lấy từ flashcard thực tế
        correctWord: 'but',
        
        // Các biến thể để test case-insensitive
        correctWordUpper: 'BUT',
        correctWordMixed: 'BuT',
        correctWordWithSpaces: '  but  ',
        
        // Từ sai để test TC-LEARN-049
        incorrectWord: 'banana',
    },

    // ============================================
    // FLASHCARD DATA (Dữ liệu từ flashcard thực tế)
    // ============================================
    flashcardSample: {
        word: 'but',
        phonetic: '/punctually/',
        meaning: 'tempore audax',
        example: 'Coniuratio corrupti tripudio ullam.',
        exampleTranslation: 'ver cetera theologus virgo ater',
    },

    // ============================================
    // EXPECTED BEHAVIOR
    // ============================================
    expected: {
        // Progress bar
        initialProgress: 0,
        progressIncrementPerWord: 10,
        
        // Timing
        audioAutoplayDelay: 500,
        flipAnimationDuration: 300,
    },

    // ============================================
    // TEST COURSE & TOPIC (Dữ liệu thực tế)
    // ============================================
    testCourse: {
        name: 'Seamless modular framework',
        target: 'Internal Tactics Administrator',
        description: 'Astrum auctus creber damnatio vociferor decor doloremque crur.',
        level: 'Sơ cấp',
    },

    testTopic: {
        name: 'sticky a',
        description: 'Cras teneo ambulo dignissimos dedico utique.',
        isCompleted: false,
    },

    // ============================================
    // DIALOG BUTTONS TEXT
    // ============================================
    dialogButtons: {
        exitConfirm: 'Thoát',
        exitCancel: 'Hủy',
        exitTitle: 'Quay lại',
    },
};

module.exports = LearnData;
