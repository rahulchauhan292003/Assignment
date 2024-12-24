import { Formik, ErrorMessage, Form } from "formik";
import React from "react";
import { validateSchema } from "./Schema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    // console.log("form data", values);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/signup",
        {
          username: values.username,
          email: values.email,
          password: values.password,
          dateofbirth: values.dateofbirth,
        }
      );
      console.log("Added user", response);
      alert("SignUp Success");
      navigate('/login')

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", dateofbirth: "" }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div className=" bg-gradient-to-b from-teal-400 to-teal-600 flex justify-center items-center min-h-screen">
              <div className="bg-slate-600 p-6 rounded-lg  shadow-lg w-96 mt-10 mb-10">
                <h1 className="  mb-4 ml-32  text-center bg-teal-400 p-2 w-20">
                  SIGNUP
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                  alt=" avatar.png"
                  className="w-36 ml-[90px]"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="name"
                  className="w-full p-2 mb-4 rounded bg-slate-500"
                  value={values.username}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="w-full p-2 mb-4 rounded bg-slate-500"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" className="error" />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="w-full p-2 mb-4 rounded bg-slate-500"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                  placeholder="DOB"
                  className="bg-slate-500 p-1 rounded w-full"
                  value={values.dateofbirth}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="dateofbirth"
                  component="div"
                  className="error"
                />

                <button
                  className="w-full p-2 bg-teal-400 mt-12  rounded-lg hover:bg-cyan-600"
                  type="submit"
                >
                  REGISTER
                </button>
                <Link to={"/login"}>
                  {" "}
                  <p className="text-center p-1 text-teal-400">
                    Already have a account Login
                  </p>
                </Link>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
