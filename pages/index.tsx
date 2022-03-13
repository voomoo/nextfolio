import mongoose from "mongoose";
import { NextPage, GetStaticProps } from "next";
import AboutSection from "../components/AboutSection";
import ConatactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";
import ToolsSection from "../components/ToolsSection";
import TextDataSchema from "../models/textData"

interface Props{
  title: string,
  subtitle: string,
  about: string,
  contact: string,
  email: string
}

const NewPage: NextPage<Props> = ({title, subtitle, about, contact, email}) => {
  return (
    <>
      <HeroSection title={title} subtitle={subtitle}/>
      <AboutSection about={about}/>
      <ToolsSection title={"Tools I Use"}/>
      <ToolsSection title={"Projects"}/>
      <ConatactMe contact={contact} email={email}/>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data = []
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    data = await TextDataSchema.findById('622c7a351e8ec9692f2cece2')
  } catch (error) {
    console.log(error)
  }
  

  return{
    props:{
      title: data.heroTitle,
      subtitle: data.heroSubtitle,
      about: data.aboutMe,
      contact: data.contactMe,
      email: data.email
    }
  }
}


export default NewPage;


