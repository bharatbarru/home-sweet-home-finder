import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "The Manhattan Penthouse",
    location: "New York, NY",
    price: "$12,500,000",
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
    price: "$18,750,000",
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
    price: "$9,200,000",
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
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-heading text-2xl text-cream font-bold">
                    {project.price}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 py-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{project.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{project.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Square className="w-4 h-4" />
                    <span className="text-sm">{project.sqft} sqft</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
