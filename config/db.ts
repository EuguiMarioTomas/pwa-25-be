import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //Carga variables de entorno

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "");

    console.log('MongoDB Connected successfull 🟢');
  } catch (error) {
    console.error('MongoDB connection failed 🔴', error);
    process.exit(1);
  }
};

export default connectDB;