import { Target, Eye, Heart, Award } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Building Dreams,<br />
            <span className="text-gold">Creating Legacies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            For over 15 years, we've been committed to helping families find
            their perfect home and investors secure exceptional properties.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="group bg-card rounded-2xl p-8 md:p-12 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-gold/30">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <Target className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform the real estate experience by providing unparalleled
              service, expert guidance, and a curated selection of exceptional
              properties. We believe every client deserves personalized attention
              and access to the finest homes available.
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <ul className="space-y-3">
                {["Personalized Service", "Expert Market Knowledge", "Transparent Process"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="group bg-navy rounded-2xl p-8 md:p-12 shadow-soft hover:shadow-elevated transition-all duration-500">
            <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
              <Eye className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-4">
              Our Vision
            </h3>
            <p className="text-cream/80 leading-relaxed">
              To be the most trusted name in luxury real estate, setting the
              standard for excellence in property services. We envision a future
              where finding your dream home is seamless, enjoyable, and
              extraordinarily rewarding.
            </p>
            <div className="mt-6 pt-6 border-t border-cream/20">
              <ul className="space-y-3">
                {["Global Recognition", "Innovation Leadership", "Client-First Approach"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-cream/80">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Integrity", desc: "Honest dealings always" },
            { icon: Award, title: "Excellence", desc: "Quality in every detail" },
            { icon: Target, title: "Dedication", desc: "Committed to your success" },
            { icon: Eye, title: "Transparency", desc: "Clear communication" },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
