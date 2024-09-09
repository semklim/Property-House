import { useRef } from 'react';

import Footer from './components/Footer/Footer';
import AboutUs from './sections/AboutUs/AboutUs';
import Cases from './sections/Cases/Cases';
import Hero from './sections/Hero';

function App() {
  const container = useRef(null);

  return (
    <div ref={container}>
      <main className="wrapper p-2.5 md:p-5 overflow-hidden">
        <Hero />
        <AboutUs className="px-10" />
        <Cases />
      </main>
      <Footer className="overflow-hidden" />
    </div>
  );
}

export default App;
