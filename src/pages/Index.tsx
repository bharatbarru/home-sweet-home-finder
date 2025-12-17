import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import MissionVision from "@/components/MissionVision";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <MissionVision />
        <Projects />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
