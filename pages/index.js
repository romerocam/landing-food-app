import Head from "next/head";
import Image from "next/image";
import Instagram from "../components/Instagram";
import Main from "../components/Main";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simplato Catering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main heading="Con las  Manos" message="y con gusto!" />
      <Slider slides={SliderData} />
      <Instagram/>
    </div>
  );
}
