import Contact from "../Contact/contact"
import Home from "../Home/home"



const Sections = () => {
  return (
    <>
      <section>
        <section id="home">
          <Home />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
    </>
  );
}

export default Sections;
