import classes from "./Footer.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
        <div className={classes.tech}>
          <p>© 2021, Built with Next.js, Tailwind CSS, & Vercel</p>
        </div>
        <div className="text-right">
          <span className={classes.iconWrapper}>
            <Link href="https://github.com/kasunkavinda">
              <FaGithub />
            </Link>
          </span>
          <span className={classes.iconWrapper}>
            <Link href="https://www.linkedin.com/in/kasun-kavinda/">
              <FaLinkedinIn />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
