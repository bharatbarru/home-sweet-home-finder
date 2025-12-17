export class ScrollAnimations {
  private observer: IntersectionObserver;
  private animatedElements: Element[] = [];

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  public init() {
    this.setupAnimations();
  }

  private setupAnimations() {
    // Find all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale'
    );

    animatedElements.forEach((element) => {
      this.observer.observe(element);
      this.animatedElements.push(element);
    });
  }

  public refresh() {
    // Disconnect existing observer
    this.observer.disconnect();
    
    // Clear stored elements
    this.animatedElements = [];
    
    // Reinitialize
    this.setupAnimations();
  }

  public destroy() {
    this.observer.disconnect();
    this.animatedElements = [];
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const scrollAnimations = new ScrollAnimations();
  scrollAnimations.init();
  
  // Make it globally available for dynamic content
  (window as { scrollAnimations?: ScrollAnimations }).scrollAnimations = scrollAnimations;
});
