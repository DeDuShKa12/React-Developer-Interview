import { unifiedFormVariants } from "./UnifiedForm.funcs.js";

export function getFormFields(variant) {
  switch (variant) {
    case unifiedFormVariants.login:
      return ["email", "password"];
    case unifiedFormVariants.signup:
      return ["email", "password", "confirmPassword"];
    case unifiedFormVariants.reset:
      return ["email"];
    default:
      return [];
  }
}

export const fieldConfigs = {
  email: {
    type: "email",
    label: "Email",
    placeholder: "Email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  },
  password: {
    type: "password",
    label: "Password",
    placeholder: "Password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Minimum 6 characters",
      },
    },
  },
  confirmPassword: {
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm Password",
    validation: (password) => ({
      required: "Please confirm your password",
      validate: (value) => value === password || "Passwords do not match",
    }),
  },
};
