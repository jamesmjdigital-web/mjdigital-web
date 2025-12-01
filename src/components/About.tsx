import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: "50+",
    label: "Sites Launched",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Avg SEO Lift",
  },
  {
    icon: Award,
    value: "$5-10K",
    label: "Client Monthly Wins",
  },
];

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const { ref: statRef, isVisible: statVisible } = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <Card
      ref={statRef}
      className={`p-4 sm:p-6 md:p-8 text-center bg-card border-border hover:border-secondary/30 transition-smooth hover:shadow-lg scroll-scale-in ${statVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
        {stat.value}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
    </Card>
  );
};

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-8 sm:mb-12 md:mb-16 scroll-fade-in ${headerVisible ? "visible" : ""}`}>
          <h2 className="text-foreground mb-4">Why MJ Digital?</h2>
        </div>

        {/* Two Column Layout */}
        <div ref={contentRef} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 md:mb-16 ${contentVisible ? "visible" : ""}`}>
          {/* Left Content */}
          <div className={`scroll-slide-in-left ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: contentVisible ? "0.1s" : "0s" }}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Fully AI-Powered Agency Delivering Enterprise Results for SMBs
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              We're not just another digital agency. MJ Digital harnesses cutting-edge AI
              technology to deliver enterprise-level results at a fraction of the cost and time.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              No fluff, just growth. Our intelligent systems work 24/7 to optimize your digital
              presence, automate your marketing, and scale your business to new heights.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse"></div>
                <span className="text-sm font-medium text-foreground">AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-indigo rounded-full animate-glow-pulse" style={{ animationDelay: "0.5s" }}></div>
                <span className="text-sm font-medium text-foreground">Proven Results</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
                <span className="text-sm font-medium text-foreground">Rapid Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder Image */}
          <div className={`relative scroll-slide-in-right ${contentVisible ? "visible" : ""}`} style={{ transitionDelay: contentVisible ? "0.2s" : "0s" }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 via-indigo/20 to-accent/20 backdrop-blur-sm border border-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="w-16 h-16 text-secondary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">Excellence in AI</p>
                <p className="text-muted-foreground">Pioneering Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 ${statsVisible ? "visible" : ""}`}>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
