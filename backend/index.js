const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const userAuthRoutes = require("./routes/userAuthRoutes");
const connectDB = require("./config/db");
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("hello!");
});
app.use("/api", userRoutes);
app.use("/api/user", userAuthRoutes);
connectDB();

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
