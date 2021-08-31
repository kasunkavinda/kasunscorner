import classes from "./Spotifybox.module.css";
import TopTracks from "../toptrack/TopTrack";

function Spotifybox() {
  return (
    <div>
      <h1 className={classes.spotifyboxheader}>Love what I hear?</h1>
      <div className={`relative pt-1 border" ${classes.spotifybox}`}>
        {/* <TopTracks />  */}
      </div>
    </div>
  );
}

export default Spotifybox;
