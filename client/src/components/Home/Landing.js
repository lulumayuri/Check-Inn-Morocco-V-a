import React, { useEffect } from "react";

import Hero from "../hero/Hero";

import ScrollToTop from "../ScrollToTop";

import scrollreveal from "scrollreveal";

import Services from "../Services";
import Recommend from "../Recommend";
import Testimonials from "../Testimonials";
import Footer from "../Footer";
const  Landing =()=> {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
    
      <Hero />
      <Services />
      <Recommend />
      
      <Footer />
      
      
    </div>
  );
}
export default Landing;
