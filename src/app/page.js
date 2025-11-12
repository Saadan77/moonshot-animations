import About2 from "./components/UI/About2";
import AboutUs from "./components/UI/AboutUs";
import Brand from "./components/UI/Brand";
import Hero from "./components/UI/Hero";
import Partners from "./components/UI/Partners";
import WhatWeDo from "./components/UI/WhatWeDo";
import Testimonials from "./components/UI/Testimonials";
import CTA from "./components/UI/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <About2 />
      <Brand />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
