import mongoose from "mongoose";

var isConnect = false;

const dbConnect = async () => {
    mongoose.set("strictQuery", true)
    if(isConnect) return;
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        throw new Error("MONGO_URI must be defined");
    }

    try {
        await mongoose.connect(MONGO_URI, { bufferCommands: false });
        isConnect = true;
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
};


export default dbConnect;