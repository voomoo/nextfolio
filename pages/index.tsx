import mongoose from "mongoose";
import { NextPage, GetStaticProps } from "next";
import AboutSection from "../components/AboutSection";
import ConatactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ToolsSection from "../components/ToolsSection";
import TextDataSchema from "../models/textData";
import ProjectModel from "../models/projectModel";
import {ICommonProps} from "../types/Types"


const NewPage: NextPage<ICommonProps> = ({
  heroTitle,
  heroSubtitle,
  aboutMe,
  contactMe,
  email,
  cvLink,
  projects,
}) => {
  return (
    <>
      <HeroSection  title={heroTitle} subtitle={heroSubtitle} id="hero" cvLink={cvLink} />
      <AboutSection about={aboutMe} id="about" />
      <ToolsSection title={"Tools I Use"} id="tool" projects={projects} />
      <ToolsSection title={"Projects"} id="project" projects={projects} />
      <ConatactSection   contact={contactMe} email={email} id="contact" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let data        = [];
  let projectData = [];
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    data = await TextDataSchema.findById("622c7a351e8ec9692f2cece2");
    projectData = await ProjectModel.find();
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

export default NewPage;
