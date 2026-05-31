import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import OrderFlowSection from "../components/OrderFlowSection";
import WhyChooseSection from "../components/WhyChooseSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-white font-ubuntu text-text-slate">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />R
      <ServicesSection />
      <PricingSection />
      <OrderFlowSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Home;