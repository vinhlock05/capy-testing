/**
 * Admin Page Object - XPath Locators
 * Chứa các xPath/selector của các element trên trang Admin
 */

const AdminObject = {
    // ============================================
    // LOGIN SCREEN
    // ============================================
    login: {
        usernameInput: '//android.widget.ScrollView/android.widget.EditText[1]',
        passwordInput: '//android.widget.ScrollView/android.widget.EditText[2]',
        loginButton: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
    },

    // ============================================
    // NAVIGATION / MENU
    // ============================================
    menu: {
        menu: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button',
        userManagement: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[5]',
        courseManagement: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]',
        topicManagement: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]',
        wordManagement: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]',
        logout: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[9]',
    },

    // ============================================
    // USER MANAGEMENT SCREEN
    // ============================================
    userManagement: {
        searchInput: '',
        addUserButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]',
        deleteButton: '',
        editButton: '//android.widget.ImageView[@content-desc="Edit"]',
        inputUsername: '//android.widget.ScrollView/android.view.View[2]/android.widget.EditText[1]',
        inputEmail: '//android.widget.ScrollView/android.view.View[2]/android.widget.EditText[2]',
        inputPassword: '//android.widget.ScrollView/android.view.View[2]/android.widget.EditText[3]',
        inputConfirmPassword: '//android.widget.ScrollView/android.view.View[2]/android.widget.EditText[4]',
        dropdownRole: '//android.widget.ScrollView/android.view.View[1]/android.view.View[2]',
        Admin: '//android.widget.ScrollView/android.view.View[1]',
        User: '//android.widget.ScrollView/android.view.View[2]',
        expandBtn: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View',
        addDialog: {
            cancelBtn: '//android.widget.ScrollView/android.view.View[3]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[4]/android.widget.Button',
        },
        editDialog: {
            deleteBtn: '//android.widget.ScrollView/android.view.View[4]/android.widget.Button',
            cancelBtn: '//android.widget.ScrollView/android.view.View[5]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[6]/android.widget.Button',
        },
    },

    // ============================================
    // COURSE MANAGEMENT SCREEN
    // ============================================
    courseManagement: {
        searchInput: '',
        addCourseButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]',
        editButton: '(//android.view.View[@content-desc="Edit"])[1]',
        inputCourseName: '//android.widget.ScrollView/android.widget.EditText[1]',
        inputCourseTarget: '//android.widget.ScrollView/android.widget.EditText[2]',
        inputCourseDescription: '//android.widget.ScrollView/android.widget.EditText[3]',
        optionSoCap: '//android.widget.ScrollView/android.view.View[1]',
        optionTrungCap: '//android.widget.ScrollView/android.view.View[2]',
        optionCaoCap: '//android.widget.ScrollView/android.view.View[3]',
        dropdownType: '//android.widget.ScrollView/android.view.View[1]',
        
        addDialog: {
            cancelBtn: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[3]/android.widget.Button',
        },
        editDialog: {
            deleteBtn: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
            cancelBtn: '//android.widget.ScrollView/android.view.View[3]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[4]/android.widget.Button',
        },
    },

    // ============================================
    // TOPIC MANAGEMENT SCREEN
    // ============================================
    topicManagement: {
        searchInput: '',
        addTopicButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]',
        editButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button',
        inputTopicName: '//android.widget.ScrollView/android.widget.EditText[1]',
        inputTopicDescription: '//android.widget.ScrollView/android.widget.EditText[2]',
        addDialog: {
            cancelBtn: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[3]/android.widget.Button',
        },
        editDialog: {
            deleteBtn: '//android.widget.ScrollView/android.view.View[2]/android.widget.Button',
            cancelBtn: '//android.widget.ScrollView/android.view.View[3]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[4]/android.widget.Button',
        },
    },

    // ============================================
    // WORD MANAGEMENT SCREEN
    // ============================================
    wordManagement: {
        searchInput: '',
        addWordButton: '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]',
        inputWordName: '//android.widget.ScrollView/android.widget.EditText[1]',
        inputWordPronunciation: '//android.widget.ScrollView/android.widget.EditText[2]',
        inputWordMeaning: '//android.widget.ScrollView/android.widget.EditText[3]',
        inputWordExample: '//android.widget.ScrollView/android.widget.EditText[4]',
        inputWordExampleTranslation: '//android.widget.ScrollView/android.widget.EditText[5]',
        dropdownType: '//android.widget.ScrollView/android.view.View[3]',
        Noun: '//android.widget.ScrollView/android.view.View[1]',
        Verb: '//android.widget.ScrollView/android.view.View[2]',
        Adjective: '//android.widget.ScrollView/android.view.View[3]',
        Adverb: '//android.widget.ScrollView/android.view.View[4]',
        Others: '//android.widget.ScrollView/android.view.View[5]',
        addDialog: {
            cancelBtn: '//android.widget.ScrollView/android.view.View[4]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[5]/android.widget.Button',
        },
        editDialog: {
            deleteBtn: '//android.widget.ScrollView/android.view.View[6]/android.widget.Button',
            cancelBtn: '//android.widget.ScrollView/android.view.View[7]/android.widget.Button',
            saveBtn: '//android.widget.ScrollView/android.view.View[8]/android.widget.Button',
        },
    },

    // ============================================
    // COMMON / SHARED ELEMENTS
    // ============================================
    common: {
        loadingSpinner: '',
        confirmDialog: '',
        confirmYesButton: '',
        confirmNoButton: '',
        toastMessage: '',
        backButton: '',
    },
};

module.exports = AdminObject;
