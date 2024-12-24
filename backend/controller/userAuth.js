const userAuthModel = require("../model/userAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userSignup = async (req, res) => {
  const { username, password, email, dateofbirth } = req.body;
  if (!username || !password || !email || !dateofbirth)
    return res.send("all fields are required");
  const hashpassword = await bcrypt.hash(password, 8);
  try {
    const user = new userAuthModel({
      username,
      email,
      dateofbirth,
      password: hashpassword,
    });
    await user.save();
    return res.status(200).send("Signup success");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await userAuthModel.findOne({ username: username });
    if (!isUser) return res.status(404).send("User not found");
    const matchPassword = await bcrypt.compare(password, isUser.password);
    if (!matchPassword)
      return res.status(404).send("Invalid username or password");
    // if match assign token

    const token = jwt.sign({ userId: isUser._id }, "secret123", {
      expiresIn: "5h",
    });
    return res.status(200).send({ Token: token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
