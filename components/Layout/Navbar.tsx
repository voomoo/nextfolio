import { NextPage } from "next";
import Link from "next/link";
import style from "../../styles/Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <a className={style.brand}>@rakibul-hasan</a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Tools</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
        <li><Link href="/">
        <a>Contact Me</a>
      </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
