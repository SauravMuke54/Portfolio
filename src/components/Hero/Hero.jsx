export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-bg text-textPrimary px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

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

          <p className="mt-6 text-textSecondary max-w-xl leading-relaxed">
            I design and build scalable backend systems, distributed workflows,
            and reliable APIs using Python, Java, Kafka, and cloud technologies.
            Passionate about system design, automation, and solving complex
            engineering problems.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-textSecondary">
            <span className="flex items-center gap-2">
              <span className="text-primary">⚡</span>
              Distributed Systems
            </span>

            <span className="flex items-center gap-2">
              <span className="text-primary">⚙</span>
              Backend Engineering
            </span>

            <span className="flex items-center gap-2">
              <span className="text-primary">☁</span>
              Cloud & Automation
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-black font-medium rounded-lg
                         shadow-[0_0_20px_rgba(16,185,129,0.25)]
                         hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/10 rounded-lg
                         hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT - DISTRIBUTED SYSTEM VISUAL */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-80 h-80">

            {/* Glow */}
            <div
              className="absolute inset-8 rounded-full
                         bg-gradient-to-br from-primary/20 to-accent/20
                         blur-3xl"
            ></div>

            {/* Outer Ring */}
            <div
              className="absolute inset-4 rounded-full
                         border border-primary/10"
            ></div>

            {/* Inner Ring */}
            <div
              className="absolute inset-16 rounded-full
                         border border-primary/20"
            ></div>

            {/* Connection Lines */}
            <div className="absolute inset-0">

              {/* Top → Center */}
              <div
                className="absolute w-[1px] h-24 bg-gradient-to-b
                           from-primary/0 via-primary/40 to-primary/70
                           left-1/2 top-[15%]"
              />

              {/* Left → Center */}
              <div
                className="absolute h-[1px] w-24 bg-gradient-to-r
                           from-primary/0 via-primary/40 to-primary/70
                           left-[15%] top-1/2"
              />

              {/* Right → Center */}
              <div
                className="absolute h-[1px] w-24 bg-gradient-to-r
                           from-primary/70 via-primary/40 to-primary/0
                           right-[15%] top-1/2"
              />

              {/* Bottom → Center */}
              <div
                className="absolute w-[1px] h-24 bg-gradient-to-b
                           from-primary/70 via-primary/40 to-primary/0
                           left-1/2 bottom-[15%]"
              />

              {/* Diagonal connections */}
              <div
                className="absolute w-[1px] h-28 bg-primary/20
                           rotate-45 left-[30%] top-[25%]"
              />

              <div
                className="absolute w-[1px] h-28 bg-primary/20
                           -rotate-45 right-[30%] top-[25%]"
              />
            </div>

            {/* Center Node */}
            <div
              className="absolute left-1/2 top-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-20 h-20 rounded-full
                         bg-surface border border-primary/40
                         shadow-[0_0_30px_rgba(16,185,129,0.2)]
                         flex items-center justify-center"
            >
              <div
                className="w-8 h-8 rounded-full
                           bg-primary/20 border border-primary/60
                           shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              ></div>
            </div>

            {/* Nodes */}
            <div
              className="absolute left-1/2 top-[10%]
                         -translate-x-1/2
                         w-4 h-4 rounded-full
                         bg-primary border-4 border-bg
                         shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            />

            <div
              className="absolute left-[10%] top-1/2
                         -translate-y-1/2
                         w-4 h-4 rounded-full
                         bg-primary border-4 border-bg
                         shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            />

            <div
              className="absolute right-[10%] top-1/2
                         -translate-y-1/2
                         w-4 h-4 rounded-full
                         bg-primary border-4 border-bg
                         shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            />

            <div
              className="absolute left-1/2 bottom-[10%]
                         -translate-x-1/2
                         w-4 h-4 rounded-full
                         bg-primary border-4 border-bg
                         shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            />

            {/* Small Nodes */}
            <div
              className="absolute left-[25%] top-[22%]
                         w-3 h-3 rounded-full
                         bg-accent/70
                         shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            />

            <div
              className="absolute right-[25%] top-[22%]
                         w-3 h-3 rounded-full
                         bg-accent/70
                         shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            />

            <div
              className="absolute left-[25%] bottom-[22%]
                         w-3 h-3 rounded-full
                         bg-accent/70
                         shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            />

            <div
              className="absolute right-[25%] bottom-[22%]
                         w-3 h-3 rounded-full
                         bg-accent/70
                         shadow-[0_0_12px_rgba(99,102,241,0.5)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}