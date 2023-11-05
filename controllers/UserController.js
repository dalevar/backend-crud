import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (e) {
    console.log(error.message);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response); 
  } catch (e) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created Successfully" }); //jika response berhasil maka tampilkan pesan User Created Successfully
  } catch (e) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id }, //mengambil id yang dikirimkan melalui parameter
    });
    res.status(201).json({ msg: "User Updated Successfully" });
  } catch (e) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id }, //mengambil id yang dikirimkan melalui parameter
    });
    res.status(201).json({ msg: "User Deleted Successfully" });
  } catch (e) {
    console.log(error.message);
  }
};
