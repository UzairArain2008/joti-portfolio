import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-warm">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 gradient-rose opacity-20 blob animate-float" />
      <div className="absolute bottom-32 right-16 w-48 h-48 gradient-sage opacity-30 blob-2 animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 gradient-rose opacity-15 blob animate-float" style={{
      animationDelay: '1s'
    }} />
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase text-primary mb-6 animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            Data Scientist & Visual Storyteller
          </p>
          
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 animate-fade-up" style={{
          animationDelay: '0.4s'
        }}>
            Hello, I'm{" "}
            <span className="italic font-medium text-primary">Joti Sukeja </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            I transform complex data into beautiful, meaningful stories. 
            Blending analytical precision with creative intuition to reveal insights that inspire.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up" style={{
          animationDelay: '0.8s'
        }}>
            <a href="#about" className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-soft">
              Discover My Work
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-slow" style={{
      animationDelay: '1.5s'
    }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </section>;
};
export default Hero;