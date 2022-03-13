import { NextPage } from "next";
import style from "../styles/AboutSection.module.css";

interface Props{
  contact:string;
  email:  string;
  id:     string;
}

const ConatactMe: NextPage<Props> = ({contact, email, id}) => {
  return (
    <section id={id}>
      <h2 className={style.title}>Contact Me</h2>
      <p className={style.paragraph}>
        {contact}
      </p>
      <a className={style.contactButton} href={`mailto:${email}`}>Contact Me</a>
    </section>
  );
};

export default ConatactMe;
