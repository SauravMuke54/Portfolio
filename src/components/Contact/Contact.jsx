export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg text-textPrimary px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <p className="text-primary mb-3 text-sm tracking-widest uppercase">
          Contact
        </p>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let's build something useful.
            </h2>

            <p className="text-textSecondary max-w-lg leading-relaxed">
              I'm open to software engineering opportunities, backend
              engineering roles, and interesting problems involving
              distributed systems, APIs, automation, and system design.
            </p>
          </div>

          {/* Right - Email CTA */}
          <a
            href="mailto:saurav54muke@gmail.com"
            className="
              inline-block px-6 py-3 rounded-lg
              border border-white/10
              hover:border-primary hover:text-primary
              transition-all duration-300
              whitespace-nowrap
            "
          >
            Get in touch
          </a>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10"></div>

        {/* Bottom Row */}
        <div className="mt-8 flex items-center justify-between flex-col md:flex-row gap-6">

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
              href="https://www.linkedin.com/in/saurav-muke-0613b1182/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:saurav54muke@gmail.com"
              className="hover:text-primary transition"
            >
              Email
            </a>

          </div>

          {/* Copyright */}
          <div className="text-xs text-textSecondary">
            © {new Date().getFullYear()} Saurav Muke
          </div>

        </div>

      </div>
    </section>
  );
}