import { motion } from "framer-motion";
import profilePhoto from "../../assets/WhatsApp Image 2026-02-28 at 12.55.32 AM.jpeg";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      {/* Background accent */}
      <div className="gradient-orb -right-40 top-20 h-80 w-80 bg-purple-600" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            About Me
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="group/photo relative overflow-hidden rounded-2xl">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-purple-500 opacity-20 transition-all duration-700 group-hover/photo:opacity-50 group-hover/photo:blur-sm animated-border" />
              <div className="img-hover-zoom relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Shafrin Akter"
                  className="h-full w-full object-cover"
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-white/0 to-cyan-500/0 transition-all duration-700 group-hover/photo:from-purple-500/10 group-hover/photo:via-white/5 group-hover/photo:to-cyan-500/10" />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100" />
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 -z-10 grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-purple-500/20"
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
              A passionate <span className="gradient-text">Web Developer</span>{" "}
              based in Bangladesh
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
              I am Shafrin Akter, a dedicated web developer with a passion for
              creating visually stunning and highly functional websites. I
              specialize in front-end development, Shopify theme development,
              and page builder customization.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-400 sm:mt-4 sm:text-lg">
              My goal is to help businesses establish a strong online presence
              by delivering clean code, responsive designs, and pixel-perfect
              user experiences that convert visitors into customers.
            </p>

            {/* Info grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Shafrin Akter" },
                { label: "Location", value: "Bangladesh" },
                { label: "Experience", value: "3+ Years" },
                { label: "Availability", value: "Freelance" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-sm text-slate-500">{item.label}</span>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1B_bw6psFd3lDGWU7CFAhtjuu3UOZFlHJ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white sm:mt-10 sm:px-8 sm:py-3.5 sm:text-base transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
            >
              Download CV
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
