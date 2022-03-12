import { NextPage } from "next";
import style from "../styles/AboutSection.module.css"

const AboutSection: NextPage = () => {
  return (
    <section>
      <h2 className={style.title}>About Me</h2>
      <p className={style.paragraph}>
        Hi there! My name is Rakibul Hasan. You can call me a designer,
        developer, or creator. My interest in web development started back in
        2018, when I started learning HTML, CSS and Javascript. In late 2020, I
        discovered React JS, and was amazed! React JS completely changed the way
        I looked at app development. No longer did I have to worry about editing
        large, messy, and unorganized javascript. With React JS, parts were
        broken into small components. Now, I am learnign Next JS and as a tryout
        I am building this portfolio site with Next JS and Typescript.
      </p>
    </section>
  );
};

export default AboutSection;
