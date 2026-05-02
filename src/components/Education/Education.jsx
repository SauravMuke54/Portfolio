export default function Education() {
  return (
    <section id="education" className="bg-bg text-textPrimary px-6 py-20 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-primary mb-3 text-sm tracking-widest uppercase">
          Education
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Academic Background
        </h2>

        {/* Card */}
        <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary transition mb-6">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-lg font-medium">
              B.E. in Computer Engineering
            </h3>

            <span className="text-sm text-textSecondary">2021 – 2024</span>
          </div>

          {/* College */}
          <p className="text-textSecondary mt-2">
            Pune Institute of Computer Technology
          </p>

          {/* Extra Info */}
          <div className="mt-4 flex items-center gap-4 text-sm text-textSecondary">
            <span>CGPA: 9.57</span>
          </div>
        </div>

        <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary transition mb-6 ">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-lg font-medium">
              Diploma In Computer Engineering
            </h3>

            <span className="text-sm text-textSecondary">2018 – 2021</span>
          </div>

          {/* College */}
          <p className="text-textSecondary mt-2">
            Government Polytechnic Yavatmal
          </p>

          {/* Extra Info */}
          <div className="mt-4 flex items-center gap-4 text-sm text-textSecondary">
            <span>CGPA: 9.80</span>
          </div>
        </div>

        <div className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary transition">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-lg font-medium">
              SSC
            </h3>

            <span className="text-sm text-textSecondary">2018</span>
          </div>

          {/* College */}
          <p className="text-textSecondary mt-2">
            Agarkar Vidya Bhawan
          </p>

          {/* Extra Info */}
          <div className="mt-4 flex items-center gap-4 text-sm text-textSecondary">
            <span>Percentage: 91.60</span>
          </div>
        </div>
      </div>
    </section>
  );
}
