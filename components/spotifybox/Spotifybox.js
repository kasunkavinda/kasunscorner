import classes from "./Spotifybox.module.css";
import TopTracks from "../toptrack/TopTrack";

function Spotifybox() {
  return (
    <div>
      <h1 className={`${classes.spotifyboxheader} text-center`}>
        Peek of what I hear
      </h1>
      <p className="text-center">- Update daily -</p>
      <div
        className={`border sm:flex justify-center ..." ${classes.spotifybox}`}
      >
        <TopTracks />
      </div>
    </div>
  );
}

export default Spotifybox;
