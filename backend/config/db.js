import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);

        console.log("DB connected successfully");
    } catch (error) {

        console.error("Error Connecting to mongodb ", error);
        
    }
}

