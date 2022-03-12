import { NextPage } from "next";
import style from "../styles/AboutSection.module.css";

const ConatactMe: NextPage = () => {
  return (
    <section>
      <h2 className={style.title}>Contact Me</h2>
      <p className={style.paragraph}>
        I’m not currently looking for any new opportunities, however my inbox is
        always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a className={style.contactButton} href="mailto:rhasan.diu.cse@gmail.com">Contact Me</a>
    </section>
  );
};

export default ConatactMe;
