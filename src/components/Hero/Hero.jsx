export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-bg text-textPrimary px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-primary"></div>
            <p className="text-sm tracking-widest text-textSecondary uppercase">
              Hi, my name is
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Saurav{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Muke
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-textSecondary mt-4">
            Software Engineer
          </h2>

          <p className="mt-6 text-textSecondary max-w-lg">
            I build scalable systems and modern web applications. Passionate
            about backend engineering, system design, and crafting efficient
            solutions.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-black font-medium rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/10 rounded-lg hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
