import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-20 mb-12 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6">
      <a className="text-lg font-semibold text-violet-400" href="#home">
        <span className="text-white">My</span>Portfolio
      </a>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 md:gap-5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition hover:text-violet-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
