import { Router } from 'express';

import {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    likePost,
    unLikePost,
}from '../controllers/post_controllers';

const router = Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:postId/like', likePost);
router.patch('/:postId/unlike', unLikePost);


export default router;