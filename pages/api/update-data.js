import mongoose from "mongoose";
import TextDataSchema from "../../models/textData";

export default async function handler(req, res) {
  await mongoose.connect(process.env.MONGO_URI);
  if (req.method === "PUT") {
    // Check if product name, description and price is provided
    
      try {
        var data = await TextDataSchema.findByIdAndUpdate(
          "622c7a351e8ec9692f2cece2",
          req.body
        );
        // Create new product
        return res.status(200).json({success:true, data});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
  
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ message: `Method ${req.method} not supported` });
  }
}
