import * as Yup from "yup";

export const validateSchema = Yup.object({
  username: Yup.string().min(4).max(25).required("Please enter your user name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).max(25).required("Please enter password"),
  dateofbirth: Yup.string().required("Please enter DOB"),
});
