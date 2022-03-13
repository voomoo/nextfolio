import mongoose from "mongoose";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import AdminControl from "../components/AdminControl";
import AdminLogin from "../components/AdminLogin";
import projectModel from "../models/projectModel";
import TextDataSchema from "../models/textData";
import {ICommonProps} from "../types/Types"


const AdminPage: NextPage<ICommonProps> = ({
  heroTitle,
  heroSubtitle,
  aboutMe,
  contactMe,
  email,
  cvLink,
  projects,
}) => {
  const [auth, setAuth] = useState<boolean>(false);
  return auth ? (
    <AdminControl
      heroTitle     ={heroTitle}
      heroSubtitle  ={heroSubtitle}
      aboutMe       ={aboutMe}
      contactMe     ={contactMe}
      email         ={email}
      cvLink        ={cvLink}
      projects      ={projects}
    />
  ) : (
    <AdminLogin setAuth={setAuth} />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data = [];
  let projectData = []
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    data = await TextDataSchema.findById("622c7a351e8ec9692f2cece2");
    projectData = await projectModel.find();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      heroTitle:    data.heroTitle,
      heroSubtitle: data.heroSubtitle,
      aboutMe:      data.aboutMe,
      contactMe:    data.contactMe,
      email:        data.email,
      cvLink:       data.cvLink,
      projects: projectData.map((project) => ({
        name:   project.projectName,
        link:   project.projectLink,
        type:   project.type,
        image:  project.imageLink,
      })),    
    },
  };
};

export default AdminPage;
