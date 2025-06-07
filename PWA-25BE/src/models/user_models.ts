import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    lastName: string;
    email: string;
    createdAt: Date;
    isActive?: boolean; 
};
const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }, 
});

const User = model<IUser>('User', userSchema);

export default User;