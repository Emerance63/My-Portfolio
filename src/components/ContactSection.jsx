export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/20 via-slate-900/80 to-slate-900 p-8 text-center shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
        Contact
      </p>
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Let’s build something meaningful together.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300">
        If you need a polished portfolio, landing page, or web interface, I’d
        love to hear about it.
      </p>
      <a
        className="mt-6 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 font-medium text-white transition duration-300 hover:-translate-y-1"
        href="mailto:you@example.com"
      >
        Send an Email
      </a>
    </section>
  );
}
