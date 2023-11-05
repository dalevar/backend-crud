import express from "express";
import {
  createUser,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers); //get untuk mengambil data
router.get("/users/:id", getUsersById); //get untuk mengambil data
router.post("/users", createUser); //post untuk menambah data
router.patch("/users/:id", updateUser); //patch untuk update sebagian data
router.delete("/users/:id", deleteUser); //delete untuk menghapus data

export default router;
