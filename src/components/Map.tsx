const Map = () => {
  return (
    <section id="location" className="bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Find Our
            <span className="block text-secondary">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit our office to discuss your luxury real estate needs with our expert team
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50">
            <div className="relative rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19128.41932770002!2d83.35713674504576!3d17.770906966779755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bc105d50e45%3A0x5ab61138e037d03f!2sVision%20Developers%20%7C%20Vizag!5e1!3m2!1sen!2sin!4v1765974668118!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Vision Developers Location Map"
              />
            </div>
            
            {/* Contact Info Below Map */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Vision Developers | Vizag</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Visit us to explore exclusive luxury properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
