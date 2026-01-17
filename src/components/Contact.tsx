import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@Joti.com", label: "Email" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 gradient-sage opacity-20 blob animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 gradient-rose opacity-15 blob-2 animate-float-delayed" />
      
      <div className="container px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6">
            Let's Create <span className="italic">Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm always excited to collaborate on projects that push the boundaries of data and design. Let's turn your data into something beautiful.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:hello@sarahchen.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-soft mb-12"
          >
            <Mail className="w-5 h-5" />
            hello@sarahchen.com
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
