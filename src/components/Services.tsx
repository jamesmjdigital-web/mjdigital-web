import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Megaphone, Globe, Bot, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
}

const services: Service[] = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank #1 with AI Content & Link Strategies",
    benefits: [
      "AI-powered keyword research",
      "Automated content optimization",
      "Strategic link building",
      "Real-time performance tracking",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Targeted Campaigns Powered by Predictive AI",
    benefits: [
      "Multi-channel campaign automation",
      "Predictive audience targeting",
      "ROI-optimized ad spend",
      "Advanced analytics & insights",
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Custom Sites Built 10x Faster with AI",
    benefits: [
      "Lightning-fast development",
      "Mobile-first responsive design",
      "Conversion-optimized layouts",
      "Seamless user experiences",
    ],
  },
  {
    icon: Bot,
    title: "AI Sales/Support Agents",
    description: "24/7 Autonomous Agents Closing Deals & Handling Queries",
    benefits: [
      "Intelligent lead qualification",
      "Automated customer support",
      "Natural conversation AI",
      "Continuous learning & improvement",
    ],
  },
];

const ServiceCard = ({ service, index, scrollToContact }: { service: Service; index: number; scrollToContact: () => void }) => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <Card
      ref={cardRef}
      className={`p-4 sm:p-6 md:p-8 glass-card rounded-2xl group scroll-fade-in transition-all duration-300 ease-out border-0 transform hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] cursor-pointer ${cardVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-secondary/20 transition-smooth group-hover:scale-110">
          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground font-medium mb-3 sm:mb-4">
          {service.description}
        </p>
      </div>

      <ul className="space-y-2 mb-6">
        {service.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        onClick={scrollToContact}
        className="w-full min-h-[44px] h-11 text-secondary hover:text-secondary hover:bg-secondary/10 font-semibold group-hover:bg-secondary/20 transition-smooth"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-fade-in ${headerVisible ? "visible" : ""}`}>
          <h2 className="text-foreground mb-4">AI-Driven Services That Deliver Results</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered digital solutions
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ${gridVisible ? "visible" : ""}`}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} scrollToContact={scrollToContact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
