import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-navy/95 backdrop-blur-lg border-b border-cyan/10 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="text-2xl md:text-3xl font-bold tracking-tight transition-smooth hover:scale-105 group">
            <span className="text-secondary glow-text-cyan group-hover:glow-text-cyan-hover">MJ</span>
            <span className="text-secondary/90 glow-text-cyan group-hover:glow-text-cyan-hover"> Digital</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="transition-smooth font-medium text-primary-foreground">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="transition-smooth font-medium text-primary-foreground">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="transition-smooth font-medium text-primary-foreground">
              About
            </button>
            <Button onClick={() => scrollToSection("contact")} className="min-h-[44px] bg-secondary text-primary hover:bg-secondary/90 glow-cyan font-semibold">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-secondary transition-smooth" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-navy/98 backdrop-blur-lg border-t border-cyan/10 py-4 animate-fade-in">
            <div className="flex flex-col gap-4 px-4">
              <button onClick={() => scrollToSection("hero")} className="text-foreground/80 hover:text-secondary transition-smooth font-medium text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-secondary transition-smooth font-medium text-left py-2">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-secondary transition-smooth font-medium text-left py-2">
                About
              </button>
              <Button onClick={() => scrollToSection("contact")} className="min-h-[44px] bg-secondary text-primary hover:bg-secondary/90 w-full font-semibold">
                Contact
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;