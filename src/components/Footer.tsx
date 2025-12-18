import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);
  

  return (
    <footer className="bg-navy text-cream">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="container-custom">
          {/* Mobile Layout - Accordion View */}
          <div className="lg:hidden">
            {/* Brand Section - Centered */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <a href="#home" className="flex items-center">
                  <img 
                    src={logo} 
                    alt="Vision Developers" 
                    className="w-24 h-auto invert brightness-0"
                  />
                </a>
              </div>
              <p className="text-cream/70 mb-6 leading-relaxed">
                Your trusted partner in luxury real estate. We transform dreams
                into addresses with unparalleled service and expertise.
              </p>
              <div className="flex justify-center gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Accordion Sections */}
            <Accordion type="single" collapsible className="space-y-4">
              {/* Quick Links Accordion */}
              <AccordionItem value="quick-links" className="bg-navy/50 border border-cream/10 rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <h4 className="font-heading font-semibold text-lg text-cream">
                    Quick Links
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-3">
                    {[
                      "About Us",
                      "Our Properties",
                      "Services",
                      "Testimonials",
                      "Contact",
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-cream/70 hover:text-secondary transition-colors block py-1"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Services Accordion */}
              <AccordionItem value="services" className="bg-navy/50 border border-cream/10 rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <h4 className="font-heading font-semibold text-lg text-cream">
                    Services
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-3">
                    {[
                      "Property Sales",
                      "Property Management",
                      "Investment Advisory",
                      "Market Analysis",
                      "Virtual Tours",
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href="#"
                          className="text-cream/70 hover:text-secondary transition-colors block py-1"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Contact Info Accordion */}
              <AccordionItem value="contact-info" className="bg-navy/50 border border-cream/10 rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <h4 className="font-heading font-semibold text-lg text-cream">
                    Contact Info
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-cream/70">
                        123 Luxury Lane, Suite 500<br />
                        New York, NY 10001
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                      <a
                        href="tel:+12125551234"
                        className="text-cream/70 hover:text-secondary transition-colors"
                      >
                        +1 (212) 555-1234
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                      <a
                        href="mailto:hello@visiondevelopers.com"
                        className="text-cream/70 hover:text-secondary transition-colors"
                      >
                        hello@visiondevelopers.com
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Desktop Layout - Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex justify-center mb-6">
                 <a href="#home" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Vision Developers" 
                  className="w-24 h-auto invert brightness-0"
                />
              </a>
              </div>
              <p className="text-center mb-6 leading-relaxed">
                Your trusted partner in luxury real estate. We transform dreams
                into addresses with unparalleled service and expertise.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Properties",
                  "Services",
                  "Testimonials",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/70 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Property Sales",
                  "Property Management",
                  "Investment Advisory",
                  "Market Analysis",
                  "Virtual Tours",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-cream/70 hover:text-secondary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-cream/70">
                    #5-154/14,Survey No107/1,2,3<br />
                    Near Iskcon Temple, Sagar Nagar Yendada,<br />
                    Visakhapatnam 530045
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a
                    href="tel:+918341144913"
                    className="text-cream/70 hover:text-secondary transition-colors"
                  >
                    +91 8341144913
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a
                    href="mailto:hello@visiondevelopers.com"
                    className="text-cream/70 hover:text-secondary transition-colors"
                  >
                    info@visiondevelopers.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {currentYear} Vision Developers. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-cream/50 text-sm hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
