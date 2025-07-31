export function getFormVariantConfig(variant) {
  switch (variant) {
    case unifiedFormVariants.login:
      return {
        headerText: "Login",
        buttonText: "Login",
        buttonColor: "bg-primary",
      };
    case unifiedFormVariants.signup:
      return {
        headerText: "Sing Up",
        buttonText: "Sing Up",
        buttonColor: "bg-success",
      };
    case unifiedFormVariants.reset:
      return {
        headerText: "Reset Password",
        buttonText: "Reset",
        buttonColor: "bg-danger",
      };
  }
}

export const unifiedFormVariants = {
  login: "login",
  signup: "signup",
  reset: "reset",
};
