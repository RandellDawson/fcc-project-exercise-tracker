import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  userId: String,
  description: String,
  duration: Number,
  date: Date
});

export default mongoose.model("Exercise", exerciseSchema);