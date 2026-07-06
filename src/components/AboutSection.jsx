import { skills } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.25)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-8"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          About Me
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Crafting thoughtful digital experiences.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
          I enjoy turning ideas into interactive websites with strong structure,
          smooth motion, and a polished user experience. My focus is on simple
          interfaces that feel premium and easy to use.
        </p>
      </div>
      <div className="rounded-[1.5rem] border border-violet-500/20 bg-slate-900/60 p-5">
        <h3 className="text-lg font-semibold">Core Skills</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-violet-500/15 px-3 py-2 text-sm text-violet-100"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
