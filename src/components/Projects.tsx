import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Climate Change Visualization",
    category: "Data Visualization",
    description: "Interactive dashboard revealing 50 years of climate data through elegant visual storytelling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["D3.js", "Python", "Tableau"],
  },
  {
    title: "Healthcare Predictive Model",
    category: "Machine Learning",
    description: "AI-powered system predicting patient outcomes with 94% accuracy, saving countless lives.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["TensorFlow", "Python", "AWS"],
  },
  {
    title: "E-commerce Customer Insights",
    category: "Data Analysis",
    description: "Deep-dive analysis uncovering shopping patterns that increased conversions by 40%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["SQL", "Pandas", "Looker"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Featured <span className="italic">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-sm">
            A selection of work that showcases my passion for turning data into impact
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6 shadow-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">
                {project.category}
              </p>
              <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
