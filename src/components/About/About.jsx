export default function About() {
    const skills = [
      "Python",
      "Java",
      "Spring Boot",
      "FastAPI",
      "Kafka",
      "PostgreSQL",
      "PySpark",
      "Docker",
      "React",
      "Apache Airflow",
      "Github / Gitlab",
      "Kubernetes",
      "Azure Data Factory",
      "Streamlit",
      "Node.js"
    ];
  
    return (
      <section id="about" className="bg-bg text-textPrimary px-6 py-24">
        <div className="max-w-5xl mx-auto">
  
          {/* Section Heading */}
          <p className="text-primary mb-3 text-sm tracking-widest uppercase">
            About
          </p>
  
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            About Me
          </h2>
  
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
  
            {/* Left Side */}
            <div className="space-y-4 text-textSecondary leading-relaxed">
              <p>
                I'm a Software Engineer based in Pune, currently working at UBS,
                where I build scalable data-driven systems and workflow automation tools.
              </p>
  
              <p>
                I have experience designing distributed systems using technologies like
                Python, Spring Boot, Kafka, and PostgreSQL, with a strong focus on
                reliability, performance, and system design.
              </p>
  
              <p>
                At UBS, I’ve worked on large-scale pipeline orchestration handling
                100,000+ files per run, built automation tools, and improved engineering
                workflows significantly.
              </p>
  
              <p>
                I enjoy solving complex backend problems, building efficient systems,
                and continuously improving developer productivity through automation.
              </p>
            </div>
  
            {/* Right Side - Skills */}
            <div className="bg-surface border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Tech Stack
              </h3>
  
              <div className="flex flex-wrap gap-3 text-sm">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }