import classes from "./Header.module.css";

function Header() {
  return (
    // <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4">
    <div className="">
      <div className={classes.triangle}></div>
      <div className={classes.header1}>
        <h1 className="leading-none">Hi There!</h1>
      </div>
      <div className={classes.header2}>
        <h2 className="leading-none">I am Kasun Kavinda</h2>
      </div>
      <div className={`text-center sm:mt-32 ${classes.tagline}`}>
        <p>
          I’m living the dream. <br />
          <br />I started learning to code when I was a teenager, though it was
          always more of a hobby than a career focus.
          <br />
          I’m familiar with a variety of programming languages and frameworks
          based on <br />
          JavaScript. <br />
          But I’m always adding new skills to my repertoire. <br />
        </p>
      </div>
    </div>
  );
}

export default Header;
