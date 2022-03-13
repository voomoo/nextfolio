import mongoose from "mongoose";
import { NextPage, GetStaticProps } from "next";
import AboutSection from "../components/AboutSection";
import ConatactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";
import ToolsSection from "../components/ToolsSection";
import TextDataSchema from "../models/textData";
import ProjectModel from "../models/projectModel";

interface Props {
  title:    string;
  subtitle: string;
  about:    string;
  contact:  string;
  email:    string;
  cv:       string;
  projects: any;
}

const NewPage: NextPage<Props> = ({
  title,
  subtitle,
  about,
  contact,
  email,
  cv,
  projects,
}) => {
  return (
    <>
      <HeroSection  title={title} subtitle={subtitle} id="hero" cvLink={cv} />
      <AboutSection about={about} id="about" />
      <ToolsSection title={"Tools I Use"} id="tool" projects={projects} />
      <ToolsSection title={"Projects"} id="project" projects={projects} />
      <ConatactMe   contact={contact} email={email} id="contact" />
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
      title:    data.heroTitle,
      subtitle: data.heroSubtitle,
      about:    data.aboutMe,
      contact:  data.contactMe,
      email:    data.email,
      cv:       data.cvLink,
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
