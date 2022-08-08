import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username:  String,
  dateCreated: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);