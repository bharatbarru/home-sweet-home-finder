import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mansion.jpg";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center md:text-left">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Luxury Real Estate
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-cream font-bold leading-tight mb-6">
            Discover Your
            <span className="block text-gold-light">Dream Home</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-xl mb-8 font-light">
            Experience unparalleled elegance with our exclusive collection of
            luxury properties. Where sophistication meets comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero" size="xl">
              Explore Properties
            </Button>
            <Button variant="hero-outline" size="xl">
              Schedule a Tour
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-0 right-0 px-4 md:px-8">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
              {[
                { value: "500+", label: "Properties Sold" },
                { value: "$2B+", label: "Total Value" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center md:text-left animate-fade-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <p className="font-heading text-2xl md:text-4xl text-gold font-bold">
                    {stat.value}
                  </p>
                  <p className="text-cream/70 text-xs md:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
