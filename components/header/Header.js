import classes from './Header.module.css'

function Header() {
  return (
    <div className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4">
      <div className = {classes.triangle}>

      </div>
      <div className = {classes.header1}>
        <h1>Hi There!</h1>
      </div>
      <div className = {classes.header2}>
        <h2>I am Kasun Kavinda</h2>
      </div>
      <div className="text-center">
        <p>
          UI/ UX Engineer, Front End Developer, based in SriLanka. <br/>I like
          building elegant websites and bringing <br/>creative designs to life.{" "}
        </p>
      </div>
    </div>
  );
}

export default Header;
