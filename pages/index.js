import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Skillbox from "../components/skillbox/Skillbox";
import Spotifybox from "../components/spotifybox/Spotifybox";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-start ...">
      <Skillbox/>
      </div>
      <div className="flex justify-end ...">
        <Spotifybox/>
      </div>
      
    </>
  );
}
