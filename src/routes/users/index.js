import express from 'express';
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../../controllers/users/index.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

