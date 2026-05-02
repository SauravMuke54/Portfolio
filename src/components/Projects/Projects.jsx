export default function Projects() {
    const projects = [
      {
        title: "Multi-Source Data Comparator",
        description:
          "A powerful data comparison tool supporting CSV, PostgreSQL, MySQL, and Oracle for cross-source validation.",
        points: [
          "Supports custom keys, column exclusions, and transformations",
          "Highlights record-level differences for easy debugging",
          "Reusable configurations for repeated comparisons",
        ],
        tech: ["Python", "Streamlit", "SQLAlchemy"],
        github: "https://github.com/SauravMuke54/Multi-Source-Data-Comparator", // update if needed
        live: "https://data-comparator.streamlit.app", // optional
      },
      {
        title: "Log Ingestor & Analytics Dashboard",
        description:
          "Distributed log pipeline with real-time ingestion, storage, and analytics visualization.",
        points: [
          "Kafka-based ingestion handling high-volume logs",
          "MongoDB storage with efficient indexing",
          "Real-time dashboard using Streamlit and Plotly",
        ],
        tech: ["Spring Boot", "Kafka", "MongoDB", "Python"],
        github: "https://github.com/sauravmuke54/log-ingestor", // update if needed
        live: "#",
      },
      {
        title: "RAG Portfolio",
        description:
          "My personal chatbot portfolio containing detailed information about my projects, experience, and skills. Built using Retrieval-Augmented Generation (RAG) techniques to provide dynamic and context-aware responses.",
        points: [
          "RAG-based chatbot providing personalized responses",
          "ChromaDB for efficient vector storage and retrieval",
          "GroqAPI for fast and scalable language model inference",
        ],
        tech: ["Python", "ChromaDB", "GroqAPI", "Streamlit"],
        github: "https://github.com/SauravMuke54/rag_portfolio", // update if needed
        live: "https://sauravmuke.streamlit.app",
      },
      {
        title: "Rate Limiter",
        description:
          "A rate limiter built using python and redis to control the rate of request to an API. It uses TTL and Redis' atomic operations to ensure accurate rate limiting across distributed systems.",
        points: [
          "TTL-based rate limiting using Redis for distributed environments",
          "Limits user request based on IP address and api endpoint",
          "Highly configurable with support for different rate limits, api endpoints and time windows",
        ],
        tech: ["Python", "FastAPI", "Redis"],
        github: "https://github.com/SauravMuke54/rate-limiter", // update if needed
        live: "#",
      }
    ];
  
    return (
      <section id="projects" className="bg-bg text-textPrimary px-6 py-24">
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
          <p className="text-primary mb-3 text-sm tracking-widest uppercase">
            Work
          </p>
  
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Projects
          </h2>
  
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  bg-surface border border-white/10 rounded-xl p-6
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-primary
                  hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                  group
                "
              >
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>
  
                {/* Description */}
                <p className="text-textSecondary mb-4">
                  {project.description}
                </p>
  
                {/* Points */}
                <ul className="text-sm text-textSecondary space-y-2 mb-4">
                  {project.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
  
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                {/* Links */}
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub →
                  </a>
  
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-primary transition"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }