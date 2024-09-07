import { useRef } from 'react';

import AboutUs from './sections/AboutUs/AboutUs';
import Hero from './sections/Hero';

function App() {
  const container = useRef(null);

  return (
    <main ref={container} className="border-indigo-700 border">
      <div className="wrapper p-5">
        <Hero />
        <AboutUs />
      </div>
    </main>
  );
}

export default App;
