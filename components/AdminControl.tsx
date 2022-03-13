import { NextPage } from "next";
import { useState } from "react";
import style from "../styles/Admin.module.css";
import Router from "next/router";
import { IAdminControl } from "../types/Types";

const AdminControl: NextPage<IAdminControl> = ({
  title,
  subtitle,
  about,
  contact,
  email,
  cv,
}) => {
  const [heroTitle, setHeroTitle]       = useState<string>(title);
  const [heroSubtitle, setHeroSubtitle] = useState<string>(subtitle);
  const [aboutMe, setAboutMe]           = useState<string>(about);
  const [contactMe, setContactMe]       = useState<string>(contact);
  const [emailAddress, setEmailAddress] = useState<string>(email);
  const [cvLink, setCvLink]             = useState<string>(cv);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        heroTitle,
        heroSubtitle,
        aboutMe,
        contactMe,
        email: emailAddress,
        cvLink,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      };
      const response = await fetch("/api/update-data", requestOptions);
      const responseFromServer = await response.json();
      if (responseFromServer.success) {
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <h1>Admin Control</h1>
      <div className={style.adminForm}>
        <div>
          <label>Hero Title: </label>
          <input
            type="text"
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Subtitle: </label>
          <input
            type="text"
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={heroSubtitle}
            onChange={(e) => setHeroSubtitle(e.target.value)}
          />
        </div>

        <div>
          <label>About: </label>
          <textarea
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            rows={10}
          />
        </div>

        <div>
          <label>Contact: </label>
          <textarea
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={contactMe}
            onChange={(e) => setContactMe(e.target.value)}
            rows={6}
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input
            type="text"
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div>
          <label>CV Link:</label>
          <input
            type="text"
            placeholder="CV Link"
            value={cvLink}
            onChange={(e) => setCvLink(e.target.value)}
          />
        </div>

        <button onClick={handleUpdate}>Update</button>
      </div>
    </section>
  );
};

export default AdminControl;
