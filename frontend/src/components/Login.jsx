import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { LoginSchema } from "./LoginSchema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    // console.log("Data", values);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          username: values.username,
          password: values.password,
        }
      );
      console.log("login", response.data);
      const token = response.data.Token
      localStorage.setItem("authtoken",token)
      alert("Login success");
      navigate("/userData");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div className=" bg-gradient-to-b from-teal-400 to-teal-600 flex justify-center items-center min-h-screen">
                <div className="bg-slate-600 p-6 rounded-lg  shadow-lg w-96">
                  <h1 className="  mb-4 ml-32  text-center bg-teal-400 p-2 w-20">
                    SIGNIN
                  </h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt=" avatar.png"
                    className="w-36 ml-[90px]"
                  />
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    className="w-full p-2 mb-4 rounded bg-slate-500"
                    value={values.username}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error text-red-500"
                  />
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
                    className="error text-red-500"
                  />
                  <div className="justify-between flex text-sm text-teal-500">
                    <p className="gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="bg-slate-500"
                      />
                      Remember me
                    </p>
                    <a href="">forgot your password?</a>
                  </div>
                  <button
                    className="w-full p-2 bg-teal-400 mt-12  rounded-lg hover:bg-cyan-600"
                    type="submit"
                  >
                    LOGIN
                  </button>
                  <Link>
                    {" "}
                    <p className="text-center p-1 text-teal-400">
                      Don't have account Signup
                    </p>
                  </Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
