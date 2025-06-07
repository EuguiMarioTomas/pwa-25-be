import User from '../models/user_models';
import Post from '../models/post_models';
import { Request, Response } from 'express';

//CREACION DE UN POST
const createPost = async (req: Request, res: Response) => {
    try{
        const { title, content, authorId} = req.body;
        const author = await User.findById(authorId);
        if(!authorId) {
            res.status(404).json({
                message: 'Autor no encontrado',
                error: true,
            });
            return;
        }
        const newPost = new Post({ title, content, author: authorId, likes: [], edited: false, });
        await newPost.save();
        res.status(201).json({
            message: 'Post creado exitosamente',
            data: newPost,
            error: false,
        });
    }catch (error: any) {
        res.status(400).json({
            message: 'Error al crear el post',
            error: error.message,
        });
    }
};

//OBTENCION DE TODOS LOS POSTS
const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().populate('author', 'name email').populate('likes', 'name lastName').exec();
        //const posts = await Post.find().populate('author', 'name lastName email').populate('likes', 'name lastName email').exec(); //si se requiere mostrar todos los datos de los likes
        res.status(200).json({
            message: 'Posts obtenidos exitosamente',
            data: posts,
            error: false,
        });
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//OBTENCION DE UN POST POR ID
const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const posts = await Post.findById(id).populate('author', 'name lastName email');
        if (!posts) {
            res.status(404).json({
                message: 'Post no encontrado',
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: 'Post encontrado',
            data: posts,
            error: false,
        });
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//ACTUALIZACION DE UN POST
const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(id, { title, content, edited: true }, { new: true, runValidators: true });
        if (!post) {
            res.status(404).json({
                message: 'Post no encontrado',
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: 'Post actualizado exitosamente',
            data: post,
            error: false,
        });
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//ELIMINACION DE UN POST
const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            res.status(404).json({
                message: 'Post no encontrado',
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: 'Post eliminado exitosamente',
            data: post,
            error: false,
        });
    } catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//LIKES DE UN POST
const likePost = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const { userId }= req.body; 
        const user = await User.findById(userId);
        if(!user){
            res.status(404).json({
                message: 'Usuario no encontrado',
                error: true,
            });
            return;
        }
        const post = await Post.findByIdAndUpdate(
            postId,
            { $addToSet: { likes: userId } }, 
            { new: true }
        );
        
        if (!post) {   
            res.status(404).json({
                message: 'Post no encontrado',
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: 'Post liked successfully',
            data: post,
            error: false,
        });
    }catch (error: any) {   
        res.status(400).json({
            error: error.message,
        });
    }
};

//UNLIKES DE UN POST
const unLikePost = async (req: Request, res: Response) => {
    try{
        const { postId } = req.params;
        const { userId } = req.body;

        const user = await User.findById(userId);
        if(!user) {
            res.status(404).json({
                message: 'Usuario no encontrado',
                error: true,
            });
            return;
        }
        const post = await Post.findByIdAndUpdate(
            postId,
            { $pull: { likes: userId } },
            { new: true }
        );
        if(!post){
            res.status(404).json({
                message: 'Post no encontrado',
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: 'Post unLiked successfully',
            data: post,
            error: false,
        });
    }catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//EXPORTACION DE FUNCIONES
export {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
    likePost,
    unLikePost
};