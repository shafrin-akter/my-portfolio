import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Gradient orbs */}
      <div className="gradient-orb -top-32 -left-32 h-[500px] w-[500px] bg-purple-600 opacity-10" />
      <div className="gradient-orb -bottom-32 -right-32 h-[400px] w-[400px] bg-cyan-600 opacity-8" />
      <div className="gradient-orb top-1/3 right-1/4 h-48 w-48 bg-purple-400 opacity-5" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-950/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-green-500/20 bg-green-500/8 px-5 py-2.5 text-sm text-green-300/90"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for Shopify Projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-white/95">I Build </span>
          <span className="gradient-text">Shopify Stores</span>
          <br />
          <span className="text-white/95">That </span>
          <span className="gradient-text">Convert</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-8 sm:text-lg lg:text-xl"
        >
          Hi, I&apos;m <span className="text-white font-medium">Shafrin Akter</span> — a Shopify Developer
          specializing in custom theme development, page builder customization, and
          high-performance e-commerce solutions that drive real business results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:mt-12"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-shine group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-7 py-3.5 text-base font-semibold text-white transition-all sm:px-8 sm:py-4 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 active:scale-95"
          >
            View My Projects
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-base font-semibold text-white/90 transition-all sm:px-8 sm:py-4 hover:bg-white/[0.07] hover:border-white/15 hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:mt-24 sm:grid-cols-4 sm:gap-6"
        >
          {[
            { number: '50+', label: 'Shopify Projects' },
            { number: '30+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-hover rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center sm:p-5"
            >
              <div className="stat-number font-display text-2xl font-bold text-white sm:text-3xl">
                {stat.number}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
