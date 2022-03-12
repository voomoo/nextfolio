import { NextPage } from "next";
import style from "../styles/ToolsSection.module.css";

interface Props{
    title: string;
}

const ToolsSection: NextPage<Props> = (props) => {
  return (
    <section className={style.toolsSection}>
      <h2 className={style.title}>{props.title}</h2>
      <div className={style.toolsGrid}>
        <div className={style.tool}>
          <img
            src="https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png"
            alt=""
          />
          <h5 className={style.toolName}>Figma</h5>
          <a href="https://google.com" target="_blank">
            https://figma.com
          </a>
        </div>
        <div className={style.tool}>
          <img
            src="https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png"
            alt=""
          />
          <h5 className={style.toolName}>Figma</h5>
          <a href="https://google.com" target="_blank">
            https://figma.com
          </a>
        </div>
        <div className={style.tool}>
          <img
            src="https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png"
            alt=""
          />
          <h5 className={style.toolName}>Figma</h5>
          <a href="https://google.com" target="_blank">
            https://figma.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
