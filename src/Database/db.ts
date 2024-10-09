// database.ts
import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
