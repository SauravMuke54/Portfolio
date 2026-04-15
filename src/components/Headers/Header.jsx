import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-bg/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-semibold text-textPrimary">
          Saurav<span className="text-primary">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-textSecondary">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="/resume.pdf"
          className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textPrimary"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface px-6 pb-4 flex flex-col gap-4 text-textSecondary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" className="text-primary">Resume</a>
        </div>
      )}
    </header>
  );
}