import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },{
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

export default User;