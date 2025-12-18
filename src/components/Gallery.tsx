import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/banner2.png";
import gallery3 from "@/assets/banner3.jpg";
import gallery4 from "@/assets/banner4.png";
import gallery5 from "@/assets/banner5.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Gallery Image 1" },
    { id: 2, src: gallery5, alt: "Gallery Image 2" },
    { id: 3, src: gallery3, alt: "Gallery Image 3" },
    { id: 4, src: gallery4, alt: "Gallery Image 4" },
    { id: 5, src: gallery2, alt: "Gallery Image 5" },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Visual Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Explore Our
            <span className="block text-secondary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the beauty and elegance of our properties through these stunning visual representations
          </p>
        </div>

        {/* Mobile Carousel - Hidden on Desktop */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="">
                  <div className="overflow-hidden rounded-xl border-2 border-border/20 shadow-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Image 1 - Large, skewed left */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="gallery-item gallery-item-1">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 2 - Small, rotated */}
          <div className="lg:col-span-1">
            <div className="gallery-item gallery-item-2">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 3 - Medium, skewed right */}
          <div className="lg:col-span-1">
            <div className="gallery-item gallery-item-3">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 4 - Small, perspective */}
          <div className="lg:col-span-1">
            <div className="gallery-item gallery-item-4">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 5 - Wide, skewed */}
          <div className="lg:col-span-2">
            <div className="gallery-item gallery-item-5">
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
