import Link from "next/link";
import classes from "./Navigation.module.css";
function Navigation() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.navul}>
          <li className="my-3">
            <Link href="/" className="text-white">
              Kasun Kavinda
            </Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/contact-me">Contact Me</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={classes.navlink}>
            <Link href="/endorse-me">Endorse Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
