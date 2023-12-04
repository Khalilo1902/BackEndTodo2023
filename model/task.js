import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  _id: {
    type:String
  },
  name: {
    type:String
  },
  done: {
    type:Boolean,
    default:false
  },
});

export default mongoose.model("Task",taskSchema)