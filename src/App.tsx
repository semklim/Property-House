import { useRef } from 'react';

import AboutUs from './sections/AboutUs/AboutUs';
import Cases from './sections/Cases/Cases';
import Hero from './sections/Hero';

function App() {
  const container = useRef(null);

  return (
    <main ref={container} className="border-indigo-700 border">
      <div className="wrapper p-5">
        <Hero />
        <AboutUs />
        <Cases />
      </div>
    </main>
  );
}

export default App;
