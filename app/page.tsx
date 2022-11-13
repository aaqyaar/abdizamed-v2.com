import { About, Contact, Hero, Projects, Work } from "containers";
import "styles/globals.scss";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
