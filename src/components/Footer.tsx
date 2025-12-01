import { Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <footer className="bg-navy border-t border-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-primary-foreground">MJ</span>
              <span className="text-primary-foreground"> Digital</span>
            </h3>
            <p className="mb-4 max-w-md text-sm sm:text-base text-primary-foreground">
              AI-powered digital agency delivering enterprise results for small businesses and
              startups. Transform your growth with intelligent automation.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-secondary border border-white/20 hover:border-secondary flex items-center justify-center transition-smooth hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-secondary border border-white/20 hover:border-secondary flex items-center justify-center transition-smooth hover:scale-110" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-sm sm:text-base text-white hover:text-secondary transition-smooth min-h-[44px] text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm sm:text-base text-white hover:text-secondary transition-smooth min-h-[44px] text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-sm sm:text-base text-white hover:text-secondary transition-smooth min-h-[44px] text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-sm sm:text-base text-white hover:text-secondary transition-smooth min-h-[44px] text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-sm sm:text-base transition-smooth text-white hover:text-secondary min-h-[44px] inline-flex items-center">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm sm:text-base transition-smooth text-white hover:text-secondary min-h-[44px] inline-flex items-center">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-cyan/10 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-primary-foreground">
            © 2025 MJ Digital. All rights reserved. Powered by AI.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;