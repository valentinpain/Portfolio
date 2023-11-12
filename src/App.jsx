import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Navbar,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
