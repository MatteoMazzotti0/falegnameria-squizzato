import ChiSiamo from "./components/home/ChiSiamo";
import Swiper from "./components/photos/Swiper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Swiper/>
    
      <hr className="featurette-divider"/>
      <ChiSiamo/>
    </div>
  );
}
