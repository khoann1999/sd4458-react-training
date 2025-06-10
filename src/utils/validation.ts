interface ValidationError {
  field: string;
  message: string;
}

export const validateUsername = (username: string): ValidationError | null => {
  if (username.length < 8 || username.length > 10) {
    return {
      field: "username",
      message: "Username must be between 8 and 10 characters",
    };
  }

  return null;
};

export const validatePassword = (password: string): ValidationError | null => {
  if (password.length < 12 || password.length > 16) {
    return {
      field: "password",
      message: "Password must be between 12 and 16 characters",
    };
  }

  // Check for required character types
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@#&!]/.test(password);

  if (!hasLetter || !hasNumber || !hasSpecialChar) {
    return {
      field: "password",
      message:
        "Password must contain at least one letter, one number, and one special character (@, #, &, !)",
    };
  }

  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): ValidationError | null => {
  if (password !== confirmPassword) {
    return {
      field: "password",
      message: "Confirm password must match password",
    };
  }

  return null;
};
