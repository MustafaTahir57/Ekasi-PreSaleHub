import { useEffect, useState } from "react";

import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Price from "../components/Price";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ language }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
      delay: 300,
      duration: 800,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero language={language} />
      <Price language={language} />
      <Footer language={language} />
    </main>
  );
};

export default Home;
