import { NextPage } from "next";
import style from "../styles/AboutSection.module.css";

interface IConatactMe{
  contact:string;
  email:  string;
  id:     string;
}

const ContactSection: NextPage<IConatactMe> = ({contact, email, id}) => {
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

export default ContactSection;
