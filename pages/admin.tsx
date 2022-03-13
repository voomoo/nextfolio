import mongoose from "mongoose";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import AdminControl from "../components/AdminControl";
import AdminLogin from "../components/AdminLogin";
import TextDataSchema from "../models/textData";
import {IAdminPage} from "../types/Types"


const AdminPage: NextPage<IAdminPage> = ({
  heroTitle,
  heroSubtitle,
  aboutMe,
  contactMe,
  email,
  cvLink,
}) => {
  const [auth, setAuth] = useState<boolean>(false);
  return auth ? (
    <AdminControl
      title     ={heroTitle}
      subtitle  ={heroSubtitle}
      about     ={aboutMe}
      contact   ={contactMe}
      email     ={email}
      cv        ={cvLink}
    />
  ) : (
    <AdminLogin setAuth={setAuth} />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data = [];
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    data = await TextDataSchema.findById("622c7a351e8ec9692f2cece2");
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
    },
  };
};

export default AdminPage;
