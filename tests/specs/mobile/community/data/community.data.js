/**
 * Community Module Test Data
 * Chứa dữ liệu test cho module Cộng đồng
 */

const CommunityData = {
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
        MSG21_noPosts: '',      // TODO: "Không có bài viết"
        MSG29_error: '',        // TODO: "Đã xảy ra lỗi"
        MSG36_uploadFailed: '', // TODO: "Tải ảnh thất bại"
    },

    // ============================================
    // TEST DATA FOR COMMENT
    // ============================================
    comment: {
        validComment: 'test bình luận',
        testCmt: 'test cmt',
    },

    // ============================================
    // TEST DATA FOR REPORT
    // ============================================
    report: {
        reason: 'Nội dung không phù hợp',
        content: 'nội dung không phù hợp',
    },

    // ============================================
    // TEST DATA FOR POST
    // ============================================
    post: {
        validContent: 'Bài viết mới',
        validTags: 'Học tập',
        emptyContent: '',
    },

    // ============================================
    // BUTTON TEXT
    // ============================================
    buttons: {
        createPost: '', // TODO: "Tạo bài viết" hoặc icon
        submit: 'Đăng',
        edit: 'Sửa',
        delete: 'Xóa',
        report: 'Báo cáo',
        cancel: 'Hủy',
        like: '', // TODO: Icon hoặc text
        comment: '', // TODO: Icon hoặc text
    },
};

module.exports = CommunityData;
