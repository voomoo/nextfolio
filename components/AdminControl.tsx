import { NextPage } from "next";
import { useState } from "react";
import style from "../styles/Admin.module.css";
import Router from "next/router";
import { ICommonProps } from "../types/Types";

const AdminControl: NextPage<ICommonProps> = ({
  heroTitle,
  heroSubtitle,
  aboutMe,
  contactMe,
  email,
  cvLink,
  projects
}) => {
  const [title,        setTitle]         = useState<string>(heroTitle);
  const [subtitle,     setSubtitle]      = useState<string>(heroSubtitle);
  const [about,        setAbout]         = useState<string>(aboutMe);
  const [contact,      setContact]       = useState<string>(contactMe);
  const [emailAddress, setEmailAddress]  = useState<string>(email);
  const [cv,           setCv]            = useState<string>(cvLink);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        title,
        subtitle,
        about,
        contact,
        email: emailAddress,
        cv,
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
  console.log(projects)
  return (
    <section>
      <h1>Admin Control</h1>
      <div className={style.adminForm}>
        <div>
          <label>Hero Title: </label>
          <input
            type="text"
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Subtitle: </label>
          <input
            type="text"
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div>
          <label>About: </label>
          <textarea
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={10}
          />
        </div>

        <div>
          <label>Contact: </label>
          <textarea
            placeholder="Hero Title (ex. Rakibul Hasan)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
            value={cv}
            onChange={(e) => setCv(e.target.value)}
          />
        </div>

        <button onClick={handleUpdate}>Update</button>
      </div>
    </section>
  );
};

export default AdminControl;
