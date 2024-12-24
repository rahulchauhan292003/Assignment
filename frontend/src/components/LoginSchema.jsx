import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .max(25, "Username must be less than 25 characters")
    .required("Please enter your username"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(25, "Password must be less than 25 characters")
    .required("Please enter your password"),
});
