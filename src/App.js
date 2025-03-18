import Textdeco from "./component/Textdeco";
import Header from "./component/Header";
import Main from "./component/Main";
import About from "./component/About";
import Career from "./component/Career";
import Project from "./component/Project";
import Contact from "./component/Contact";

import "./App.css";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    const elements = [aboutRef, careerRef, projectRef];

    elements.forEach((el) => {
      gsap.fromTo(
        el.current,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el.current,
            start: "top center",
            end: "top center",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="wrap">
      <Textdeco />
      <Header />
      <Main />
      <About aboutRef={aboutRef} />
      <Career careerRef={careerRef} />
      <Project projectRef={projectRef} />
      <Contact />
    </div>
  );
}

export default App;
