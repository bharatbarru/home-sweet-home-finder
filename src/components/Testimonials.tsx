import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Working with Vision Developers was an absolute dream. They found us our perfect family home within weeks. Their attention to detail and understanding of our needs was remarkable.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content:
      "As an investor, I've worked with many agencies. Vision Developers stands out for their market expertise and professional approach. They've helped me build an impressive portfolio.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Being a first-time buyer was daunting, but the team made it so easy. They guided me through every step with patience and expertise. I couldn't be happier with my new home!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Client Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            What Our Clients<br />
            <span className="text-secondary">Say About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our satisfied clients who
            found their dream homes with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-secondary/30 animate-fade-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              {/* <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-secondary/30"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "Trusted by 5000+ Clients",
              "Award-Winning Service",
              "15+ Years Excellence",
              "98% Satisfaction Rate",
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
