import { NextPage } from "next";
import { useState } from "react";
import style from "../styles/Admin.module.css"

interface Props{
    title: string;
}


const AdminControl: NextPage<Props> = ({title}) => {

    const [heroTitle, setHeroTitle] = useState<string>(title)
  return (
    <section>
      <h1>Admin Control</h1>
      <div className={style.adminForm}>
        <input
          type="text"
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={heroTitle}
        />
        <input
          type="password"
          placeholder="Hero Subtitle (ex. Web Developer)"
        />
        <button>Update</button>
      </div>
    </section>
  );
};

export default AdminControl;
