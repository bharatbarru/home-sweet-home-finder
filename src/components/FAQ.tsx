import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const faqs = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "Scheduling a viewing is easy! Simply click the 'Schedule a Tour' button on any property listing, or contact our team directly. We offer flexible viewing times including weekends and evenings to accommodate your schedule.",
  },
  {
    question: "What areas do you specialize in?",
    answer:
      "We specialize in luxury properties across major metropolitan areas including New York, Miami, Los Angeles, San Francisco, and Aspen. Our expertise spans urban penthouses, beachfront villas, mountain estates, and exclusive gated communities.",
  },
  {
    question: "Do you offer assistance with financing?",
    answer:
      "Yes, we partner with leading financial institutions to help our clients secure the best possible financing options. Our team can connect you with trusted mortgage brokers who specialize in luxury property financing.",
  },
  {
    question: "What is the buying process like?",
    answer:
      "Our buying process is streamlined and transparent. After identifying your ideal property, we guide you through negotiations, due diligence, inspections, and closing. Your dedicated agent will be with you every step of the way.",
  },
  {
    question: "Can you help sell my current property?",
    answer:
      "Absolutely! We offer comprehensive selling services including professional photography, virtual tours, strategic marketing, and access to our network of qualified buyers. Many clients use us for both buying and selling.",
  },
  {
    question: "What sets Vision Developers apart?",
    answer:
      "Our commitment to personalized service, deep market expertise, and exclusive property access sets us apart. We limit our client roster to ensure each receives dedicated attention, and our off-market listings give you access to properties others can't find.",
  },
];

const FAQ = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="faq" className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Still have questions?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Send us a message and we'll get back to you
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-secondary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-secondary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-border/50 focus:border-secondary/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-border/50 focus:border-secondary/50 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="accent" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-soft data-[state=open]:border-secondary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-secondary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
