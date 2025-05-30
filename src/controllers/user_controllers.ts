import User from "../models/user_models";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response)=> {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data:user,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            message: "Error al crear el usuario",
            error: error.message,
        });
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Usuarios obtenidos exitosamente",
            data: users,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getUserById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario encontrado",
            data: user,
            error: false,
        });
    }catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(
            id,{
                $set:req.body,
            },
            {new: true}
        );
        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario actualizado exitosamente",
            data: user,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario eliminado exitosamente",
            data: user,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};
export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};