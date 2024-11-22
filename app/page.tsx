"use client"

import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (()=> {
    Aos.init ({
      duration: 1200,
      easing: "ease-out-back",
      delay:100,
      offset:160,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      });
      Aos.refresh()
  },[]);

  return (

    <main>
      
      <Hero />
      <About/>
      <Project />
      <Skills />
      <Contact/>

    </main>
  );
}
