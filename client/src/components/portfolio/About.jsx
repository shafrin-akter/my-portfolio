import { motion } from "framer-motion";
import profilePhoto from "../../assets/WhatsApp Image 2026-02-28 at 12.55.32 AM.jpeg";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36">
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

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="group/photo relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 blur-sm transition-all duration-700 group-hover/photo:opacity-100" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5">
                <img
                  src={profilePhoto}
                  alt="Shafrin Akter"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-dark-900/90 px-5 py-3.5 backdrop-blur-xl sm:-right-6"
            >
              <div className="font-display text-2xl font-bold gradient-text">2+</div>
              <div className="text-xs font-medium text-slate-400">Years Exp.</div>
            </motion.div>

            {/* Shopify badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-3 -left-3 rounded-2xl border border-green-500/20 bg-dark-900/90 px-4 py-2.5 backdrop-blur-xl sm:-left-6"
            >
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-400" fill="currentColor">
                  <path d="M15.34 3.27c-.07-.04-.15-.03-.22.01-.06.04-1.02 1.6-1.1 1.72-.12-.45-.55-1.27-1.13-1.64-.18-.11-.45-.06-.54.14-.06.13-.47 1.4-.63 2.09-.24 1.04-.18 1.91.18 2.59l-.03.02-3.6 11.03c-.03.1.02.21.13.24l2.2.64c.11.03.22-.03.24-.14l1.78-6.47c.16.08.41.16.73.16.95 0 1.86-.61 2.57-1.72.76-1.19 1.18-2.82 1.18-4.59 0-1.61-.36-2.88-.97-3.68-.06-.07-.14-.12-.22-.15-.22-.07-.4.08-.57.24-.28.27-.59.87-.59.87s.19-.95.19-1.57c0-.27-.11-.48-.31-.58l-.07-.03-.02-.01-.05-.02-.16-.07s.02-.05.01-.07z"/>
                </svg>
                <span className="text-xs font-semibold text-green-400">Shopify Expert</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Meet <span className="gradient-text">Shafrin Akter</span> —{" "}
              Your Shopify Growth Partner
            </h3>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              With 2+ years of hands-on experience and 20+ completed projects, I
              specialize in Shopify store setup, custom theme development, and Liquid
              coding — building fast, user-friendly stores that are designed to convert
              visitors into paying customers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              From custom section creation and responsive design to app integration
              and performance optimization — I deliver scalable eCommerce solutions
              tailored to each brand&apos;s unique goals and vision.
            </p>

            {/* Problem Solving */}
            <div className="mt-6 rounded-xl border border-purple-500/10 bg-purple-500/5 p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <span className="text-sm font-semibold text-purple-300">How I Solve Problems</span>
              </div>
              <ul className="space-y-2">
                {[
                  'Slow store? I audit performance and optimize load times for better conversions.',
                  'Low sales? I redesign product pages and checkout flows based on UX best practices.',
                  'Need custom features? I build tailored Liquid sections and app integrations from scratch.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                    <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Shafrin Akter", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
                { label: "Focus", value: "Shopify Development", icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M2.25 21V9.349" },
                { label: "Experience", value: "2+ Years", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" },
                { label: "Availability", value: "Open to Projects", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/5 bg-white/2 p-4 transition-all duration-300 hover:border-purple-500/15 hover:bg-white/4"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <svg className="h-3.5 w-3.5 text-purple-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-medium text-white/90 text-sm">{item.value}</p>
                </div>
              ))}
            </div>

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
      </div>
    </section>
  );
}
