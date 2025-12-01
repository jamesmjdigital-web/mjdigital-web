import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "MJ Digital's AI agents doubled our leads overnight. The automation is incredible and has transformed how we handle customer inquiries. Best investment we've made!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "GrowthCo E-commerce",
    role: "Marketing Director",
    content:
      "Within 3 months, our organic traffic increased by 250%. Their AI-powered SEO strategies are light years ahead of traditional agencies. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Startup Solutions",
    role: "Founder",
    content:
      "The custom website they built exceeded all expectations. Fast, beautiful, and converts like crazy. Plus, their AI support agent handles 90% of customer questions automatically.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-fade-in ${headerVisible ? "visible" : ""}`}>
          <h2 className="text-foreground mb-4">Trusted by Growing Businesses</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about their transformation with MJ Digital
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Card ref={cardRef} className={`p-4 sm:p-6 md:p-8 lg:p-12 bg-card border-border scroll-scale-in ${cardVisible ? "visible" : ""}`}>
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary" />
            </div>

            {/* Content */}
            <div className="pt-8 sm:pt-10 md:pt-12">
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6 justify-center">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium text-center mb-6 sm:mb-8 leading-relaxed px-2">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="min-h-[44px] min-w-[44px] rounded-full border-border hover:border-secondary hover:bg-secondary/10 transition-smooth"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="min-h-[44px] min-w-[44px] rounded-full border-border hover:border-secondary hover:bg-secondary/10 transition-smooth"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`min-h-[12px] min-w-[12px] rounded-full transition-smooth ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
