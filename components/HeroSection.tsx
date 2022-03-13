import { NextPage } from "next";
import { title } from "process";
import style from "../styles/HeroSection.module.css";

interface IHeroSection {
  title:    string;
  subtitle: string;
  id:       string;
  cvLink:   string;
}

const HeroSection: NextPage<IHeroSection> = ({ title, subtitle, id, cvLink }) => {
  return (
    <section className={style.heroSection} id={id}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <h5 className={style.subtitle}>{subtitle}</h5>
        <div className={style.buttonWrapper}>
          <a href={cvLink} target="_blank" className={style.heroButton}>
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
