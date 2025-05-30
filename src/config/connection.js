import mongoose from "mongoose";
import { config } from "./config.js"; // Assuming config.js exports a `db` string

const connectDB = async () => {
  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
