import { NextPage } from "next";
import { title } from "process";
import style from "../styles/HeroSection.module.css";

interface Props{
  title: string;
}

const HeroSection: NextPage<Props> = (props) => {
  return (
    <section className={style.heroSection}>
      <div>
        <h2 className={style.title}>{props.title}</h2>
        <h5 className={style.subtitle}>Designer, Developer, Creator</h5>
        <button className={style.heroButton}>Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
