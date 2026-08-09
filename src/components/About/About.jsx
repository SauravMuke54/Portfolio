export default function About() {
  const skills = [
    "Python",
    "Java",
    "Spring Boot",
    "FastAPI",
    "Kafka",
    "PostgreSQL",
    "Apache Airflow",
    "Azure Data Factory",
    "PySpark",
    "Kubernetes",
    "Docker",
    "Redis",
    "React",
    "Node.js",
    "MongoDB",
    "Git / GitLab CI/CD",
    "JWT / RBAC",
    "LangChain",
    "RAG",
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
              where I build backend systems, workflow orchestration platforms,
              and automation solutions at scale.
            </p>

            <p>
              I work primarily with Python and Java, building distributed
              systems and APIs using FastAPI, Spring Boot, Kafka, and PostgreSQL,
              with a strong focus on reliability, scalability, and clean system design.
            </p>

            <p>
              At UBS, I've worked on orchestration platforms managing 200+
              Databricks jobs and Airflow pipelines processing 100,000+ files
              and 10,000+ workflow tasks daily across parallel AKS workloads.
            </p>

            <p>
              I enjoy solving complex backend problems, designing reliable
              distributed systems, and building automation that makes engineering
              workflows faster and more efficient.
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