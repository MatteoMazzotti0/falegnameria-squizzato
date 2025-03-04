import ChiSiamo from "./components/home/ChiSiamo";
import Swiper from "./components/photos/Swiper";
import Contatti from "./components/home/Contatti";
import Image from "next/image";
import Titolo from "./components/home/Titolo";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <Swiper />
        <hr className="featurette-divider" />
        <ChiSiamo />
        <hr className="featurette-divider" />
        <Contatti />
      </div>
    </>
  );
}
