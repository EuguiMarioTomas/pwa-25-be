import express from 'express';

import{
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    activateUser,
}from '../controllers/user_controllers';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.patch('/:id/activate', activateUser);


export default router;
