import Hero from "@/components/home/hero/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonial from "./testimonial/Testimonial";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
