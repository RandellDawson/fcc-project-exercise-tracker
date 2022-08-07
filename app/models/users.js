
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const userSchema = new Schema({
  username:  String,
  dateCreated: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);