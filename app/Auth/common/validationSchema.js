import * as Yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const phoneNumberRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignInValidation = Yup.object({
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, "invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      passwordRegex,
      "must be 8 of a symbol,a capital letter and a number"
    ),
});

export const SignupValidation = Yup.object({
  name: Yup.string().required("please enter your full name"),
  email: Yup.string()
    .email()
    .matches(/@[^.]*\./, "invalid email")
    .required("Please enter your email"),
  number: Yup.string()
    .required("Please enter your phone number")
    .matches(phoneNumberRegex, "must be a valid phone number"),
  password: Yup.string()
    .required("Please enter a password")
    .matches(
      passwordRegex,
      "must be 8 of a symbol,a capital letter and a number"
    ),
});
