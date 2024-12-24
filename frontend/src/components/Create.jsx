import * as React from "react";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/create",
        data
      );
      console.log(res.data);
      setData({
        name: "",

        email: "",
      });

      setTimeout(() => {
        navigate("/fetch");
      }, 1000);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel> Name</FormLabel>
            <TextField
              name="name"
         
              onChange={handleChange}
            />

            <FormLabel>Email </FormLabel>
            <TextField
              name="email"
             
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Create;
