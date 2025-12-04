import About2 from "./components/UI/About2";
import AboutUs from "./components/UI/AboutUs";
import Brand from "./components/UI/Brand";
import Hero from "./components/UI/Hero";
import Partners from "./components/UI/Partners";
import WhatWeDo from "./components/UI/WhatWeDo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Portfolio from "./components/UI/Portfolio";
import Proficients from "./components/UI/Proficients";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <About2 />
      <Proficients />
      <Portfolio />
      <Brand />
      <Partners />
      <CTA />
      <Footer />
    </>
  );
}
