import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#skills",
  label: "Skills"
}, {
  href: "#projects",
  label: "Projects"
}, {
  href: "#contact",
  label: "Contact"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-card py-4" : "bg-transparent py-6"}`}>
      <div className="container px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-medium">
            Joti<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </a>
              </li>)}
          </ul>

          {/* CTA Button */}
          <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
            Let's Talk
          </a>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden animate-slide-in absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <ul className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map(link => <li key={link.href}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
              <li className="pt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>}
      </div>
    </header>;
};
export default Navbar;