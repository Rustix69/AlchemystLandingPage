import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { FeaturesSection } from "@/components/features";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorks from "@/components/HowItWorks";
import TechnologyIntegration from "@/components/TechnologyIntegration";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import CodeCompiler from "@/components/CodeCompiler";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Use Cases Section */}
      <UseCasesSection />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Code Compiler Section */}
      <CodeCompiler />
      
      {/* Technology Integration Section */}
      <TechnologyIntegration />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 