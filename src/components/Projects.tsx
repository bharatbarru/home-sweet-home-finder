import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/flat1.jpg";
import project2 from "@/assets/flat2.jpg";
import project3 from "@/assets/flat3.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "The Manhattan Penthouse",
    location: "New York, NY",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    type: "Penthouse",
  },
  {
    id: 2,
    image: project2,
    title: "Oceanfront Paradise",
    location: "Miami Beach, FL",
    beds: 7,
    baths: 8,
    sqft: "12,000",
    type: "Villa",
  },
  {
    id: 3,
    image: project3,
    title: "Mountain Retreat",
    location: "Aspen, CO",
    beds: 6,
    baths: 5,
    sqft: "7,200",
    type: "Estate",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Featured Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Our Exclusive<br />
            <span className="text-secondary">Properties</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our handpicked selection of extraordinary homes, each
            offering unique character and uncompromising luxury.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                </div>
              </div>

              {/* Content */}
            </div>
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default Projects;
