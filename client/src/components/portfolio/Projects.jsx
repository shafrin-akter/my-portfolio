import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Shopify Store",
    category: "Shopify",
    description:
      "A fully custom Shopify theme with dynamic sections, product filtering, and optimized checkout flow.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    image:
      "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg",
  },
  {
    title: "Business Landing Page",
    category: "Web Design",
    description:
      "A modern, responsive landing page for a SaaS company with smooth animations and lead capture form.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:
      "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg",
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "A creative portfolio website with unique scroll-based animations and a minimal aesthetic.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: null,
  },
  {
    title: "Elementor Custom Sections",
    category: "Page Builder",
    description:
      "Custom Elementor widgets and sections for a real estate website with advanced filtering.",
    tech: ["WordPress", "Elementor", "CSS", "PHP"],
    image: null,
  },
  {
    title: "Shopify Product Configurator",
    category: "Shopify",
    description:
      "An interactive product customizer for a print-on-demand Shopify store with live previews.",
    tech: ["Shopify", "JavaScript", "Liquid"],
    image: null,
  },
  {
    title: "Restaurant Website",
    category: "Web Design",
    description:
      "A visually rich restaurant website with online menu, reservation system, and Google Maps integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32">
      <div className="gradient-orb -right-40 bottom-20 h-80 w-80 bg-purple-600" />

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
            Portfolio
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
            Here are some of the projects I have worked on. Each one was crafted
            with attention to detail and performance.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card card-premium group relative overflow-hidden rounded-2xl glow-purple-hover"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-dark-800 to-dark-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="h-12 w-12 text-slate-600 transition-colors group-hover:text-purple-500/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                  </div>
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur-sm border border-purple-500/20">
                  {project.category}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
                    View Project
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
