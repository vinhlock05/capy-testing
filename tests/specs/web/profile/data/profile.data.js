module.exports = {
  validUser: {
    username: "testuser",
    email: "testuser@example.com",
    password: "User@123",
  },
  validPassword: "User@123",
  newPassword: "NewPass@123",
  confirmPassword: "NewPass@123",
  wrongConfirmPassword: "WrongPass@123",

  // Test data for TC-PROF-022, TC-PROF-023
  newUsername: "User02",
  newEmail: "User02@gmail.com",
  newPassword2: "User@145",

  // Test data for TC-PROF-020
  existingEmail: "User001@mail.com",

  // Error messages
  msg1: "required", // Empty field message
  msg16: "already exists", // Email already exists
  msg17: "success", // Profile update success

  // Password test data
  currentPassword: "User@123",
  passwordToTest: "User123",
  mismatchPassword: "Password",
};
