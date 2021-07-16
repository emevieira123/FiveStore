import Contact from "../Contact/contact"
import Home from "../Home/home"
import Products from "../Product/product";

const Sections = () => {
  return (
    <>
      <section>
        <section id="home">
          <Home />
        </section>
        <section id="product">
          <Products />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
    </>
  );
}

export default Sections;
