const skills = [
  {
    category: "Data Analysis",
    items: ["Python", "R", "SQL", "Pandas", "NumPy"],
    color: "gradient-rose",
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    color: "gradient-sage",
  },
  {
    category: "Visualization",
    items: ["Tableau", "D3.js", "Matplotlib", "Seaborn", "Figma"],
    color: "gradient-rose",
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "GCP", "Docker", "Git", "Jupyter"],
    color: "gradient-sage",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Skills & <span className="italic">Specialties</span>
          </h2>
          <p className="text-muted-foreground">
            A curated blend of technical prowess and creative thinking
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group relative bg-card p-8 rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative blob */}
              <div 
                className={`absolute -top-4 -right-4 w-20 h-20 ${skill.color} opacity-30 blob-2 group-hover:scale-110 transition-transform duration-500`} 
              />
              
              <h3 className="font-serif text-2xl mb-6 relative z-10">
                {skill.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
