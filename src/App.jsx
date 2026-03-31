import React from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Count from './Component/Count';

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

        
      </main>
    </div>
  );
};

export default App;