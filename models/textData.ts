// import mongoose from "mongoose";

// const textDataSchema = new mongoose.Schema({
//   heroTitle: {
//     type: String,
//   },
//   heroSubtitle: {
//     type: String,
//   },
//   aboutMe: {
//     type: String,
//   },
//   contactMe:{
//       type:String,
//   },
//   email:{
//     type: String,
//   },
// });

// const TextDataSchema = mongoose.model("TextDataSchema", textDataSchema);

// export default TextDataSchema;

import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const textDataSchema = new Schema({
  heroTitle: {
    type: String,
  },
  heroSubtitle: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  contactMe: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports =
  mongoose.models.TextDataSchema || mongoose.model("TextDataSchema", textDataSchema);
