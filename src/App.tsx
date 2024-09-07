import { useRef } from 'react';

import Hero from './sections/Hero';

function App() {
  const container = useRef(null);

  return (
    <main ref={container} className="border-indigo-700 border">
      <div className="p-5">
        <Hero />
      </div>
    </main>
  );
}

export default App;
