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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const faqs = [
   {
    question: "Why should I choose Vision Developers?",
    answer:
      "Vision Developers is known for transparent dealings, quality construction, timely delivery, and a customer-first approach.",
  },
  {
    question: "What is the starting price of the homes?",
    answer:
      "Pricing is competitive and varies based on the unit configuration and specifications. For exact pricing details, please contact our sales team.",
  },
  {
    question: "What amenities are included in the project?",
    answer:
      "The project includes essential amenities such as parking, security, Multi community hall, Gym, lifts, Solar and well-planned common areas.",
  },
  {
    question: "What is the expected possession date?",
    answer:
      "The possession timeline is clearly communicated at the time of booking, and we are committed to delivering as per schedule.",
  },
  {
    question: "How can I book a site visit?",
    answer:
      "You can book a site visit by filling out the enquiry form on the website or by directly contacting our sales team.",
  },
  {
    question: "Why should I choose Vision Developers?",
    answer:
      "Vision Developers is known for transparent dealings, quality construction, timely delivery, and a customer-first approach.",
  },
  {
    question: "What is the construction quality like?",
    answer:
      "We use high-quality materials and follow strict construction standards to ensure durability, safety, and long-term value.",
  },
];

const FAQ = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState<{ open: boolean; mode: 'success' | 'error' | null; message?: string }>({ open: false, mode: null });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // simple required check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setShowModal({ open: true, mode: 'error', message: 'Please fill Name, Email and Message – they are required.' });
      return;
    }

    setIsSubmitting(true);

    // fake loading (looks professional)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // show success modal with option to open mail client
    setShowModal({ open: true, mode: 'success', message: 'Your message is ready. Open your mail client to send.' });
    setIsSubmitting(false);
  };

  return (
    <section id="faq" className="section-padding bg-light">
      <Dialog open={showModal.open} onOpenChange={(open) => setShowModal((s) => ({ ...s, open }))}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{showModal.mode === 'success' ? 'Message Ready' : 'Notice'}</DialogTitle>
            <DialogDescription>{showModal.message}</DialogDescription>
          </DialogHeader>

          <div className="pt-2">
            {showModal.mode === 'success' && (
              <p className="text-sm text-muted-foreground">Click the button below to open your mail client and send the message to visiondevelopersvizag@gmail.com.</p>
            )}
          </div>

          <DialogFooter>
            {showModal.mode === 'success' ? (
              <>
                <button
                  className="btn mr-2 inline-flex items-center rounded-md bg-accent px-4 py-2 text-white"
                  onClick={() => {
                    const to = 'visiondevelopersvizag@gmail.com';
                    const subject = `Contact from ${formData.name || 'Website Visitor'}`;
                    const body = `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}`;
                    // Open Gmail compose in a new tab (reliable for users who use Gmail in browser)
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                      to
                    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    try {
                      window.open(gmailUrl, '_blank');
                    } catch (err) {
                      // fallback to mailto
                      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailto;
                    }
                    setShowModal({ open: false, mode: null });
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                >
                  Open Mail Client
                </button>
                <DialogClose asChild>
                  <button className="btn inline-flex items-center rounded-md border px-4 py-2">Close</button>
                </DialogClose>
              </>
            ) : (
              <DialogClose asChild>
                <button className="btn inline-flex items-center rounded-md border px-4 py-2">OK</button>
              </DialogClose>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left – Contact Form */}
          <div className="lg:sticky lg:top-32">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
              Contact Us
            </h3>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
            >
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

          {/* Right – FAQ */}
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