import { NextPage } from "next";
import style from "../styles/AboutSection.module.css"

interface Props{
  about: string
}

const AboutSection: NextPage<Props> = ({about}) => {
  return (
    <section>
      <h2 className={style.title}>About Me</h2>
      <p className={style.paragraph}>
        {about}
      </p>
    </section>
  );
};

export default AboutSection;
