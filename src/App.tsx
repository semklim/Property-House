import { useRef } from 'react';

import Hero from './sections/Hero';

function App() {
  const container = useRef(null);

  return (
    <main ref={container}>
      <Hero />
      <ul>
        <li className="st1">ajshdkahskdwjd</li>
        <li className="st2">ajshdkahskdwjd</li>
        <li className="st3">ajshdkahskdwjd</li>
        <li className="st4">ajshdkahskdwjd</li>
        <li className="st5">ajshdkahskdwjd</li>
        <li className="st6">ajshdkahskdwjd</li>
      </ul>
    </main>
  );
}

export default App;
