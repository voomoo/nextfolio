import { NextPage } from "next";
import style from "../styles/ToolsSection.module.css";

interface Props {
  title:    string;
  id:       string;
  projects: any;
}

const ToolsSection: NextPage<Props> = ({ title, id, projects }) => {
  return (
    <section className={style.toolsSection} id={id}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.toolsGrid}>
        {(projects.filter(project => project.type === id)).map((p) => (
          <div className={style.tool}>
            <img
              src={p.image}
              alt=""
            />
            <h5 className={style.toolName}>{p.name}</h5>
            <a href={p.link} target="_blank">
              {p.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
