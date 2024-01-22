import mongoose from "mongoose";
import { env } from "./env.js";

const connectDatabase = async () => {
  try {
    const isDBConnect = await mongoose.connect(env.database_url);
    console.log(`Database         :😱 Database is connected`);
  } catch (error) {
    console.log(error);
    console.log(`Database         :😫 Database can't connect`);
    
  }
};

export default connectDatabase;
