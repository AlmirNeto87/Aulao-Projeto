import express from 'express';
import { getAllUsers,getOneUser, createUser, updateUser, deleteUser } from './handlers.js';



const router = express.Router();



router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getOneUser).delete(deleteUser).put(updateUser);

export default router;