import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Skillbox from "../components/skillbox/Skillbox";
import Spotifybox from "../components/spotifybox/Spotifybox";

export default function Home() {
  return (
    <div className="px-4">
      <Header />
      <div className="mt-12 sm:w-1/2 md:w-1/4 m-auto">
        <Skillbox />
      </div>
      <div className="my-12 md:w-1/2 m-auto">
        <Spotifybox />
      </div>
    </div>
  );
}
