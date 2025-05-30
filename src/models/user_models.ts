import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;