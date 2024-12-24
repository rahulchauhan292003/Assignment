const userModel = require("../model/user");

exports.createUser = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();

    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);

    return res.status(200).send("user deleted");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
exports.editUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);

    return res.status(200).send("Updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getallUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user || user.length === 0)
      return res.status(404).send("No user found");

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(404).send("No user found");

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
