export default function Contact() {
    return (
      <section id="contact" className="bg-bg text-textPrimary px-6 py-28 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
  
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  
            {/* Left */}
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                Get in touch
              </h2>
  
              <p className="text-textSecondary max-w-md">
                Open to backend engineering roles and interesting system design problems.
              </p>
            </div>
  
            {/* Right (Email CTA) */}
            <a
              href="mailto:saurav54muke@gmail.com"
              className="
                inline-block px-6 py-3 rounded-lg
                border border-white/10
                hover:border-primary hover:text-primary
                transition-all duration-300
              "
            >
              saurav54muke@gmail.com
            </a>
          </div>
  
          {/* Bottom Row */}
          <div className="mt-12 flex items-center justify-between flex-col md:flex-row gap-6">
  
            {/* Socials */}
            <div className="flex gap-6 text-sm text-textSecondary">
              <a
                href="https://github.com/sauravmuke54"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>
  
              <a
                href="https://linkedin.com/in/saurav-muke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
            </div>
  
            {/* Subtle line */}
            <div className="text-xs text-textSecondary">
              © {new Date().getFullYear()} Saurav Muke
            </div>
          </div>
  
        </div>
      </section>
    );
  }