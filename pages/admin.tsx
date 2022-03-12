import mongoose from "mongoose";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import AdminControl from "../components/AdminControl";
import AdminLogin from "../components/AdminLogin";
import TextDataSchema from "../models/textData"

interface Props{
  pageData: string
}

const AdminPage: NextPage<Props> = ({pageData}) => {
    const [auth, setAuth] = useState<boolean>(false)
  return (
      auth ? <AdminControl title={pageData}/> : <AdminLogin setAuth={setAuth}/>
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


export default AdminPage;
