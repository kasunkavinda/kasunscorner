import Link from "next/link";
import classes from "./Navigation.module.css";
function Navigation() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.navul}>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
