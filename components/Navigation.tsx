export default function Navigation() {
    return (
      <nav className="max-w-4xl mx-auto px-6 pt-6 w-full relative z-50">
        <div className="bg-terminal-dark/95 backdrop-blur-md rounded-2xl px-6 h-16 flex items-center justify-between w-full border border-white/10 shadow-lg">
            <a href="/" className="text-sm font-bold tracking-tight text-neon-blue hover:text-neon-pink transition">./home</a>
            <div className="flex space-x-6 text-xs font-bold uppercase tracking-wider text-white/80">
                <a href="/education" className="hover:text-neon-pink transition">Education</a>
                <a href="/experience" className="hover:text-neon-pink transition">Experience</a>
                <a href="/coursework" className="hover:text-neon-pink transition">Coursework</a>
                <a href="/projects" className="hover:text-neon-pink transition">Projects</a>
                <a href="/resume.pdf" target="_blank" className="text-neon-pink hover:underline transition">Resume</a>
            </div>
        </div>
      </nav>
    );
  }