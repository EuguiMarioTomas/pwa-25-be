import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, '');
        console.log('Database MongoDB connect🟢');
    }
    catch(error){
        console.error('MongoDB connection failed🔴', error);
        process.exit(1);
    }
}


export default connectDB;