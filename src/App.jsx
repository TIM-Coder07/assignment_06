import React from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Count from './Component/Count';
import MainSection from './Component/MainSection/MainSection';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
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
        <section className='mt-10'>
          <MainSection></MainSection>
        </section>
      </main>
    </div>
  );
};

export default App;