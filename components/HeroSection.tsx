import { NextPage } from "next";
import { title } from "process";
import style from "../styles/HeroSection.module.css";

interface Props{
  title: string;
  subtitle: string
}

const HeroSection: NextPage<Props> = ({title, subtitle}) => {
  return (
    <section className={style.heroSection}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <h5 className={style.subtitle}>{subtitle}</h5>
        <button className={style.heroButton}>Download My CV</button>
      </div>
    </section>
  );
};

export default HeroSection;
