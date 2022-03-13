import { NextPage } from "next";
import { useState } from "react";
import style from "../styles/Admin.module.css";
import Router from "next/router"

interface Props {
  title: string;
  subtitle: string;
  about: string;
  contact: string;
  email: string;
}

interface Data {
  title: string;
  subtitle: string;
  about: string;
  contact: string;
  email: string;
}

const AdminControl: NextPage<Props> = ({
  title,
  subtitle,
  about,
  contact,
  email,
}) => {
  const [heroTitle, setHeroTitle] = useState<string>(title);
  const [heroSubtitle, setHeroSubtitle] = useState<string>(subtitle);
  const [aboutMe, setAboutMe] = useState<string>(about);
  const [contactMe, setContactMe] = useState<string>(contact);
  const [emailAddress, setEmailAddress] = useState<string>(email);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        heroTitle,
        heroSubtitle,
        aboutMe,
        contactMe,
        email: emailAddress
      }
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      };
      const response = await fetch(
        "/api/update-data",
        requestOptions
      );
      const responseFromServer = await response.json();
      if(responseFromServer.success){
        Router.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <section>
      <h1>Admin Control</h1>
      <div className={style.adminForm}>
        <input
          type="text"
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={heroSubtitle}
          onChange={(e) => setHeroSubtitle(e.target.value)}
        />
        <textarea
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          rows={10}
        />
        <textarea
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={contactMe}
          onChange={(e) => setContactMe(e.target.value)}
          rows={6}
        />
        <input
          type="text"
          placeholder="Hero Title (ex. Rakibul Hasan)"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <button onClick={handleUpdate}>Update</button>
      </div>
    </section>
  );
};

export default AdminControl;
