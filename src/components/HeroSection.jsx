import { socials } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section id="home" className="flex min-h-screen flex-col">
      <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Open for freelance & collaboration
          </div>
          <p className="mb-3 mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Hello, I’m a
          </p>
          <h1 className="text-4xl font-semibold leading-none sm:text-5xl lg:text-6xl">
            Frontend <span className="text-violet-500">Developer</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            I build modern, clean, and responsive web experiences that look
            great on any device.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-1"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-200 transition duration-300 hover:-translate-y-1"
              href="#contact"
            >
              Let’s Connect
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { title: "3+ Launches", desc: "Modern UI projects" },
              { title: "Fast Delivery", desc: "Clean and reliable" },
              { title: "Responsive", desc: "Built for every screen" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 transition duration-300 hover:-translate-y-1"
              >
                <img src={social.icon} alt={social.label} className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-violet-500/20 to-transparent" />
          <img
            src="/image/profile picture.png"
            alt="Profile portrait"
            className="relative w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
