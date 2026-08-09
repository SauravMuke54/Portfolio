export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "UBS",
      duration: "Aug 2024 – Present",
      points: [
        "Built a fault-tolerant Spring Boot and Kafka orchestration platform managing 200+ Databricks jobs across 10+ engineering teams, enabling automated execution, dependency management, and workflow recovery.",
        "Refactored a proof-of-concept Python service for production readiness using Factory, Singleton, Builder, and Provider design patterns, improving testability and enabling reusable components.",
        "Designed JWT-secured Role-Based Access Control (RBAC) middleware in FastAPI, securing 10+ API endpoints serving upstream systems.",
        "Built asynchronous, event-driven workflow APIs using FastAPI and PostgreSQL LISTEN/NOTIFY, enabling concurrent task processing and real-time workflow tracking.",
        "Engineered Apache Airflow pipelines across 16 parallel AKS workloads, processing 100,000+ files and 10,000+ workflow tasks daily with automated retries and failure recovery.",
        "Automated control onboarding using Azure Data Factory, Python, and SQL, reducing onboarding turnaround time from 2 days to under 4 hours.",
      ],
    },
    {
      role: "Full-Stack Intern",
      company: "Grull Technologies",
      duration: "Mar 2024 – May 2024",
      points: [
        "Built backend services for a freelancer marketplace using Python and FastAPI, supporting job postings, deliverable management, and negotiation workflows.",
        "Implemented real-time negotiation chat using WebSockets, improving freelancer–client communication efficiency by 20%.",
        "Designed and developed frontend components using React and Tailwind CSS.",
      ],
    },
    {
      role: "Summer Intern",
      company: "UBS",
      duration: "Jun 2023 – Aug 2023",
      points: [
        "Automated database schema versioning by integrating Liquibase with Spring Boot, improving deployment consistency and reducing manual migration effort.",
        "Built CI/CD pipelines using GitLab and Kubernetes to automate database change deployments and streamline release processes.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Kutumb India",
      duration: "Oct 2022 – Dec 2022",
      points: [
        "Migrated the backend from PHP to Node.js, improving application performance by 30%.",
        "Designed and implemented a new frontend using React and Bootstrap, enhancing user experience and increasing engagement by 25%.",
        "Led a team of 3 interns to successfully complete the migration project within the 3-month internship period, demonstrating strong leadership and project management skills.",
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