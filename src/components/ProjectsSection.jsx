import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-10">
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          Projects
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Selected work that blends style and function.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/60 shadow-[0_20px_45px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-slate-900/80"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
