import * as Yup from "yup";

export const SignInValidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, "invalid email")
    .required("Please Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "must be 8 of a symbol,a capital letter and a number"
    ),
});

export const SignupValidation = Yup.object({
  name: Yup.string().required("please enter your full name"),
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, "invalid email")
    .required("Please Enter your email"),
  number: Yup.string()
    .required("Please Enter your phone number")
    .matches(
      /^(?=.*[0-9])(?=.{11,})/,
      "must be 8 of a symbol,a capital letter and a number"
    ),
  password: Yup.string()
    .required("Please Enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "must be 8 of a symbol,a capital letter and a number"
    ),
});
