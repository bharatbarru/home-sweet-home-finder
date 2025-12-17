import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Common Questions
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
              Frequently Asked<br />
              <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Have questions? We have answers. If you can't find what you're
              looking for, our team is always ready to help.
            </p>

            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Still have questions?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We're here to help
                  </p>
                </div>
              </div>
              <Button variant="accent" className="w-full">
                Contact Our Team
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
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
