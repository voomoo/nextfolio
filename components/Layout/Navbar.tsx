import { NextPage } from "next";
import Link from "next/link";
import style from "../../styles/Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <nav className={style.navbar}>
      <Link href="#hero">
        <a className={style.brand}>@rakibul-hasan</a>
      </Link>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tools">Tools</a>
        </li>
        <li>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
