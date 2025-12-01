import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      {/* Navy-to-Cyan Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,15%)] to-[hsl(190,100%,50%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center animate-fade-in-up">
            <h1 className="mb-4 sm:mb-6 leading-tight text-primary-foreground px-2">
              AI-Powered Digital Growth for Your Business
            </h1>

            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">
                AI-Powered Digital Agency
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto text-primary-foreground px-2">
              Transform SEO, Marketing, Websites & Sales with MJ Digital's
              Intelligent Agents – Scale to $10K/Month Effortlessly
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center w-full max-w-md mx-auto px-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="min-h-[44px] bg-secondary text-primary hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 h-auto w-full md:w-auto md:min-w-[200px] glow-cyan font-bold transition-smooth hover:scale-105"
              >
                Get Free AI Audit
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="min-h-[44px] border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 h-auto w-full md:w-auto md:min-w-[200px] font-semibold transition-smooth hover:scale-105"
              >
                View Services
              </Button>
              
              {/* Scroll Down Arrow */}
              <button
                onClick={() => scrollToSection("services")}
                className="flex flex-col items-center gap-1 sm:gap-2 text-white hover:text-secondary transition-colors duration-300 group min-h-[44px] min-w-[44px] justify-center mt-4 sm:mt-6 mb-8 sm:mb-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:border-secondary/50"
                aria-label="Scroll to services"
              >
                <span className="text-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity hidden sm:block">
                  Scroll
                </span>
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-scale-in lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan/20 shadow-2xl glow-cyan">
              <img src={heroDashboard} alt="AI Dashboard Interface showing advanced analytics and automation" className="w-full h-auto" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-glow-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo/20 rounded-full blur-2xl animate-glow-pulse" style={{
            animationDelay: "1s"
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;