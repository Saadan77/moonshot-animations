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
import Ribbons from "@/components/Ribbons";
import CyberHologramLoader from "./components/CyberHologramLoader";

export default function Home() {
  return (
    <>
      <CyberHologramLoader />
      <div className="fixed inset-0 z-9999 pointer-events-none">
        <Ribbons
          baseThickness={6}
          colors={['#FA2889']}
          speedMultiplier={0.4}
          maxAge={500}
          enableFade={true}
        />
      </div>

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