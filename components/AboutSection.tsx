import { NextPage } from "next";
import style from "../styles/AboutSection.module.css"
import { IAboutSection } from "../types/Types";


const AboutSection: NextPage<IAboutSection> = ({about, id}) => {
  return (
    <section id={id}>
      <h2 className={style.title}>About Me</h2>
      <p className={style.paragraph}>
        {about}
      </p>
    </section>
  );
};

export default AboutSection;
