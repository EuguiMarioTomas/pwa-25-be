import User from "../models/user_models";
import { Request, Response } from "express";

//CREACION DE USUARIO
const createUser = async (req: Request, res: Response)=> {
    try{
        const { name, lastName, email } = req.body;
        const newUser = new User({ name, lastName, email });
        await newUser.save();
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data: newUser,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            message: "Error al crear el usuario",
            error: error.message,
        });
    }
};

//OBTENCION DE TODOS LOS USUARIOS
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

//OBTENCION POR ID
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

//ACTUALIZACION
const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, lastName, email } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { name, lastName, email },
            { new: true, runValidators: true }
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

//BAJA LOGICA
const deleteUser = async (req: Request, res: Response) => {
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
        if(!user.isActive) {
            res.status(200).json({
                message: "Usuario ya está inactivo",
                data: user,
                error: false,
            });
            return;
        }
        const updatedUser = await User.findByIdAndUpdate( id, { isActive: false }, { new: true, runValidators: true });
        if(!updatedUser) {
            res.status(500).json({
                message: "Error al desactivar usuario",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario desactivado exitosamente",
            data: updatedUser,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//REACTIVACION DE USUARIO
const activateUser = async (req: Request, res: Response) => {
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
        if(user.isActive) {
            res.status(200).json({
                message: "Usuario ya está activo",
                data: user,
                error: false,
            });
            return;
        }
        const updatedUser = await User.findByIdAndUpdate( id, { isActive: true }, { new: true, runValidators: true });
        if(!updatedUser) {
            res.status(500).json({
                message: "Error al activar usuario",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario activado exitosamente",
            data: updatedUser,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

//EXPORTACION DE FUNCIONES
export {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    activateUser
};