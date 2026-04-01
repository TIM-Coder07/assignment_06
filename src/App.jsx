import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Count from "./Component/Count";
import MainSection from "./Component/MainSection/MainSection";
import { ToastContainer } from "react-toastify";
import Started3Step from "./Component/Started3Step";
import TransparentPricing from "./Component/TransparentPricing";
import Footer from "./Component/Footer";
import WorkFlow from "./Component/WorkFlow";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-white shadow">
        <Navbar cartItems={cartItems} />
      </nav>
      <main>
        <section>
          <Banner></Banner>
        </section>

        {/* Count section  */}
        <section>
          <Count></Count>
        </section>

        {/* Toggling Part  */}
        <section className="mt-10">
          <MainSection
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></MainSection>
          <ToastContainer />
        </section>

        {/* Started in 3 step  */}
        <section>
          <Started3Step></Started3Step>
        </section>
        <section>
          <TransparentPricing></TransparentPricing>
        </section>

        <section>
          <WorkFlow></WorkFlow>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
