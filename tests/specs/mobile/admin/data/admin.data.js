/**
 * Admin Test Data
 * Chứa các dữ liệu test cho Admin module
 */

const AdminData = {
    // ============================================
    // LOGIN DATA
    // ============================================
    login: {
        validAdmin: {
            username: 'Admin001',
            password: 'Admin123',
        }
    },

    // ============================================
    // USER MANAGEMENT DATA
    // ============================================
    user: {
        newUser: {
            fullName: 'User001',
            email: 'user001@example.com',
            password: 'User123',
            role: 'user',
        },
        updateUser: {
            fullName: 'User002',
            email: 'user002@example.com',
        },
        searchKeyword: 'User001',
    },

    // ============================================
    // COURSE MANAGEMENT DATA
    // ============================================
    course: {
        newCourse: {
            title: 'Course001',
            target: 'Test Target Description',
            description: 'This is a sample test for automation',
            level: 'soCap', // soCap, trungCap, caoCap
        },
        updateCourse: {
            title: 'Course002',
            target: 'Updated Target',
            description: 'Updated description',
        },
        searchKeyword: 'Course001',
        // Validation test data
        validation: {
            emptyName: '',
            emptyTarget: '',
            invalidName: '<script>alert("XSS")</script>',
            duplicateName: 'ExistingCourse',
            longName: 'A'.repeat(300),
            whitespaceOnly: '   ',
            specialChars: '!@#$%^&*()',
        },
        levels: {
            beginner: 'soCap',
            intermediate: 'trungCap',
            advanced: 'caoCap',
        },
    },

    // ============================================
    // TOPIC MANAGEMENT DATA
    // ============================================
    topic: {
        newTopic: {
            title: 'Topic001',
            description: 'This is a sample test for automation',
            duration: 60,
            type: 'IELTS',
        },
        updateTopic: {
            title: 'Topic002',
            description: 'Updated description',
        },
        searchKeyword: 'Topic001',
    },

    // ============================================
    // WORD MANAGEMENT DATA
    // ============================================
    word: {
        newWord: {
            title: 'Word001',
            description: 'This is a sample test for automation',
            duration: 60,
            type: 'IELTS',
        },
        updateWord: {
            title: 'Word002',
            description: 'Updated description',
        },
        searchKeyword: 'Word001',
    },

    // ============================================
    // EXPECTED MESSAGES
    // ============================================
    messages: {
        loginSuccess: 'Login successful',
        loginFailed: 'Invalid credentials',
        userCreated: 'User created successfully',
        userUpdated: 'User updated successfully',
        userDeleted: 'User deleted successfully',
        courseCreated: 'Course created successfully',
        courseUpdated: 'Course updated successfully',
        coursePublished: 'Course published successfully',
        confirmDelete: 'Are you sure you want to delete?',
    },

    // ============================================
    // VALIDATION DATA
    // ============================================
    validation: {
        invalidEmail: 'invalid-email',
        shortPassword: '123',
        specialCharacters: '!@#$%^&*()',
        longText: 'A'.repeat(500),
        emptyString: '',
    },
};

module.exports = AdminData;