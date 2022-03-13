import mongoose from "mongoose";
import ProjectModel from "../../models/projectModel"

export default async function handler (req, res) {
  await mongoose.connect(process.env.MONGO_URI);
  if (req.method === 'POST') {
    // Check if product name, description and price is provided
    const { projectName, projectLink, imageLink, type } = req.body;
    if (projectName && projectLink && imageLink && type) {
        try {
          var project = new ProjectModel({
            projectName,
            projectLink,
            imageLink,
            type
          });
          // Create new product
          var projectCreated = await project.save();
          return res.status(200).send(projectCreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        return res.status(422).send('data_incomplete');
      }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({message: `Method ${req.method} not supported`})
  }
  
};