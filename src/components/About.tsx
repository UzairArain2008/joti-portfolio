const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src="/images/profile.jpg"
                alt="Joti Sukeja - Data Scientist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-card">
              <p className="text-4xl font-serif font-light text-primary">5+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Experience</p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 gradient-sage opacity-60 blob-2 -z-10" />
          </div>
          
          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              About Me
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              Where Data Meets <span className="italic">Design</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I believe that data is more than just numbers—it's the foundation for compelling narratives that drive meaningful change. My approach combines rigorous analytical methods with a designer's eye for aesthetics.
              </p>
              
              <p className="leading-relaxed">
                With a background in Statistics from Stanford and years of experience at leading tech companies, I've helped organizations uncover hidden patterns and communicate complex findings in ways that resonate with any audience.
              </p>
              
              <p className="leading-relaxed">
                When I'm not diving into datasets, you'll find me sketching data visualizations, exploring art galleries, or perfecting my pour-over coffee technique.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-serif text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">12</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">3</p>
                <p className="text-sm text-muted-foreground mt-1">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
