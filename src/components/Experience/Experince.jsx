export default function Experience() {
    const experiences = [
      {
        role: "Software Engineer",
        company: "UBS",
        duration: "Aug 2024 – Present",
        points: [
          "Standardized workflow orchestration using Apache Airflow handling 100k+ files per run.",
          "Built Kafka-driven orchestration service (Spring Boot) for Databricks workflows.",
          "Build asynchronous API using FastAPI and PostgreSQL to handle 10k+ requests/day.",
          "Reduced onboarding time by ~80% using Azure Data Factory, SQL, and Python.",
          "Developed internal tools to improve engineering productivity and automation.",
        ],
      },
      {
        role: "Full-Stack Intern",
        company: "Grull Technologies",
        duration: "Mar 2024 – May 2024",
        points: [
          "Built backend services using FastAPI for a freelancer platform.",
          "Implemented real-time chat using WebSockets.",
          "Designed and developed frontend components with React and Tailwind CSS.",
        ],
      },
      {
        role: "Summer Intern",
        company: "UBS",
        duration: "Jun 2023 – Aug 2023",
        points: [
          "Integrated Liquibase with Spring Boot for database versioning.",
          "Built CI/CD pipelines using GitLab and Kubernetes.",
        ],
      },
      {
        role: "Web Developer Intern",
        company: "Kutumb India",
        duration: "Oct 2022 – Dec 2022",
        points: [
          "Migrated the backedend from PHP to Node.js, improving performance by 30%.",
          "Designed and implemented a new frontend using React and Bootstrap, enhancing user experience and increasing engagement by 25%.",
          "Lead the team of 3 interns to successfully complete the migration project within the 3-month internship period, demonstrating strong leadership and project management skills.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="bg-bg text-textPrimary px-6 py-24">
        <div className="max-w-5xl mx-auto">
  
          {/* Heading */}
          <p className="text-primary mb-3 text-sm tracking-widest uppercase">
            Experience
          </p>
  
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Work Experience
          </h2>
  
          {/* Timeline */}
          <div className="relative border-l border-white/10 pl-6 space-y-10">
  
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
  
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"></div>
  
                {/* Content */}
                <div className="bg-surface border border-white/10 rounded-xl p-5 
                                hover:border-primary 
                                hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
                                transition-all duration-300">
  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {exp.role} · {exp.company}
                      </h3>
                    </div>
                    <span className="text-sm text-textSecondary">
                      {exp.duration}
                    </span>
                  </div>
  
                  {/* Points */}
                  <ul className="text-sm text-textSecondary space-y-2 mt-3">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
  
                </div>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }