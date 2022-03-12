import mongoose from "mongoose";
import { NextPage, GetStaticProps } from "next";
import AboutSection from "../components/AboutSection";
import ConatactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";
import ToolsSection from "../components/ToolsSection";
import TextDataSchema from "../models/textData"

interface Props{
  pageData: string
}

const NewPage: NextPage<Props> = (props) => {
  return (
    <>
      <HeroSection title={props.pageData}/>
      <AboutSection/>
      <ToolsSection title={"Tools I Use"}/>
      <ToolsSection title={"Projects"}/>
      <ConatactMe/>
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
      pageData: data.heroTitle
    }
  }
}


export default NewPage;


