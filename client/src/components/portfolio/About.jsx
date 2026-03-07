import { motion } from "framer-motion";
import profilePhoto from "../../assets/WhatsApp Image 2026-02-28 at 12.55.32 AM.jpeg";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="gradient-orb -right-40 top-20 h-80 w-80 bg-purple-600 opacity-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
            About Me
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Your Shopify Partner
          </h2>
        </motion.div>

        {/* Hero-style intro with photo */}
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Photo - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="group/photo relative mx-auto max-w-xs lg:max-w-none">
              {/* Gradient border effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-cyan-500/40" />
              <div className="relative overflow-hidden rounded-3xl bg-dark-950 p-1">
                <img
                  src={profilePhoto}
                  alt="Shafrin Akter"
                  className="aspect-[3/4] w-full rounded-[20px] object-cover transition-transform duration-700 group-hover/photo:scale-[1.03]"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-2 bottom-8 rounded-2xl border border-white/10 bg-dark-950/90 px-4 py-3 backdrop-blur-xl sm:-right-6"
              >
                <div className="font-display text-2xl font-bold gradient-text">2+</div>
                <div className="text-[11px] font-medium text-slate-400">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/8 px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-medium text-green-400">Open to Projects</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight">
              I&apos;m <span className="gradient-text">Shafrin Akter</span>
            </h3>
            <p className="mt-1 text-base font-medium text-slate-500 sm:text-lg">
              Shopify Front-End Developer &bull; Liquid Expert
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                With <span className="font-semibold text-white/80">2+ years</span> of hands-on experience and{" "}
                <span className="font-semibold text-white/80">20+ completed projects</span>, I
                specialize in Shopify store setup, custom theme development, and Liquid
                coding — building fast, user-friendly stores designed to convert
                visitors into paying customers.
              </p>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                From custom section creation and responsive design to app integration
                and performance optimization — I deliver scalable eCommerce solutions
                tailored to each brand&apos;s unique goals.
              </p>
            </div>

            {/* What I do - horizontal chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Store Setup', 'Custom Themes', 'Liquid Coding', 'Speed Optimization', 'App Integration', 'Responsive Design'].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-purple-500/15 bg-purple-500/5 px-3 py-1.5 text-xs font-medium text-purple-300/90"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://drive.google.com/uc?export=download&id=1B_bw6psFd3lDGWU7CFAhtjuu3UOZFlHJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
              >
                Download CV
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:bg-white/[0.07] hover:border-white/15 hover:scale-105 active:scale-95"
              >
                Discuss a Project
              </button>
            </div>
          </motion.div>
        </div>

        {/* Problem Solving Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center font-display text-xl font-bold text-white sm:text-2xl">
            How I <span className="gradient-text">Solve Problems</span>
          </h3>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                emoji: '⚡',
                title: 'Slow Store?',
                desc: 'I audit performance and optimize load times for better conversions.',
              },
              {
                emoji: '📈',
                title: 'Low Sales?',
                desc: 'I redesign product pages and checkout flows based on UX best practices.',
              },
              {
                emoji: '🛠️',
                title: 'Need Custom Features?',
                desc: 'I build tailored Liquid sections and app integrations from scratch.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/4"
              >
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="mt-3 text-sm font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
