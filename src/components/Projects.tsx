import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, type MouseEvent } from "react";
import project1 from "@/assets/flat1.jpg";
import project2 from "@/assets/flat2.jpg";
import project3 from "@/assets/flat3.jpg";
import floorplan from "@/assets/floorplan.jpg";
const projects = [
  {
    id: 1,
    image: project1,
    title: "Aditya Gold Residence",
    location: "Sagar Nagar, Visakhapatnam",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    type: "Aditya Gold",
  },
  {
    id: 2,
    image: project2,
    title: "Aditya Platinum Residence",
    location: "Sagar Nagar, Visakhapatnam",
    price: "$18,750,000",
    beds: 7,
    baths: 8,
    sqft: "12,000",
    type: "Aditya Platinum",
  },
  {
    id: 3,
    image: project3,
    title: "Blue Horizon Residence",
    location: "Sagar Nagar, Visakhapatnam",
    price: "$9,200,000",
    beds: 6,
    baths: 5,
    sqft: "7,200",
    type: "Blue Horizon",
  },
];

const Projects = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transform: "scale(1)",
    transformOrigin: "50% 50%",
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    // Scale value can be adjusted (e.g., 2 for 200%)
    setZoomStyle({ transform: "scale(2)", transformOrigin: `${xPercent}% ${yPercent}%` });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)", transformOrigin: "50% 50%" });
  };
  return (<>
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
               
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
      </div>
  

  <div className="mt-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-center">
            Floor Plan<br />
      </h2>
          <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-soft">
            <div
              className="relative w-full h-full cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imgRef}
                src={floorplan}
                alt="Property floor plan"
                className="w-full h-auto object-contain transition-transform duration-200 ease-out"
                style={zoomStyle}
              />
            </div>
          </div>
        </div>
          </section>
  </>);
};

export default Projects;
