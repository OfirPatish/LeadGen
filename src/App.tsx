import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import LeadForm from "./components/sections/LeadForm";
import Footer from "./components/layout/Footer";
import Statistics from "./components/sections/Statistics";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <HeroSection /> {/* Awareness */}
        <Features /> {/* Interest */}
        <Statistics />
        <Testimonials /> {/* Consideration */}
        <FAQ /> {/* Intent */}
        <LeadForm /> {/* Evaluation */}
        <Footer /> {/* Purchase CTA */}
      </div>
    </ThemeProvider>
  );
};

export default App;
