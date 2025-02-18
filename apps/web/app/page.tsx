import React from "react";
import HeroSection from "./_components/HomePage/HeroSection";
import StatsSection from "./_components/HomePage/StatsSection";
import PreviewSection from "./_components/HomePage/PreviewSection";
import FeaturesGrid from "./_components/HomePage/FeaturesGrid";
import Testimonials from "./_components/HomePage/Testimonials";
import Pricing from "./_components/HomePage/Pricing";
import WhyChooseUs from "./_components/HomePage/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <StatsSection />
      <PreviewSection />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <WhyChooseUs />
    </div>
  );
}

export default App;
