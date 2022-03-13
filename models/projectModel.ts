import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const projectModel = new Schema({
  projectName: {
    type: String,
  },
  projectLink: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  type: {
    type: String,
    enum: [
        "project",
        "tool"
    ]
  }
});

export default mongoose.models.ProjectModel || mongoose.model("ProjectModel", projectModel);