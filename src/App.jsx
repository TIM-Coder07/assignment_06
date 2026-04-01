import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Count from "./Component/Count";
import MainSection from "./Component/MainSection/MainSection";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <nav>
        <Navbar cartItems={cartItems}></Navbar>
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
          
        </section>
      </main>
    </div>
  );
};

export default App;
