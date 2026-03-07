import { motion } from "framer-motion";

const projects = [
  {
    title: "Premium Fashion Shopify Store",
    category: "Shopify Theme",
    description:
      "A fully custom Shopify theme for a luxury fashion brand with dynamic filtering, mega menu, quick-view modals, and optimized checkout flow that increased conversions by 35%.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: true,
  },
  {
    title: "Health & Wellness Store",
    category: "Page Builder",
    description:
      "High-converting Shopify store built with GemPages featuring custom product bundles, subscription options, and a loyalty rewards landing page.",
    tech: ["Shopify", "GemPages", "Liquid", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: true,
  },
  {
    title: "Artisan Jewelry E-Commerce",
    category: "Shopify Theme",
    description:
      "Custom Shopify theme for a handcrafted jewelry brand with 360° product views, size guides, and a gift registry feature.",
    tech: ["Shopify", "Liquid", "Tailwind CSS", "Alpine.js"],
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: false,
  },
  {
    title: "Fitness Equipment Store",
    category: "Page Builder",
    description:
      "Replo-powered landing pages and product showcase for a fitness equipment brand, featuring comparison tables and video testimonials.",
    tech: ["Shopify", "Replo", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: false,
  },
  {
    title: "Gourmet Food Marketplace",
    category: "Shopify Theme",
    description:
      "Multi-vendor Shopify store for artisan food products with advanced filtering, recipe integration, and subscription box functionality.",
    tech: ["Shopify", "Liquid", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: true,
  },
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    description:
      "A modern, responsive landing page for a SaaS product featuring smooth scroll animations, pricing tables, and lead capture form.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    liveUrl: "#",
    caseStudy: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-36">
      <div className="gradient-orb -right-40 bottom-20 h-80 w-80 bg-purple-600 opacity-8" />

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
            Portfolio
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Real Shopify stores and web projects I&apos;ve built — each crafted for
            performance, conversions, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-all duration-500 hover:border-white/10 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md border border-white/10">
                  {project.category}
                </div>
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-dark-950/70 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-dark-950 transition-transform hover:scale-105"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Demo
                  </a>
                  {project.caseStudy && (
                    <button
                      onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      Case Study
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-base font-bold text-white/95 sm:text-lg transition-colors duration-300 group-hover:text-purple-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400/90 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-purple-500/8 px-2.5 py-0.5 text-xs font-medium text-purple-300/80 border border-purple-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
