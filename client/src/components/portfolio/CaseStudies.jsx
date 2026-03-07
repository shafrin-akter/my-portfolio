import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Premium Fashion Shopify Store',
    category: 'Custom Theme Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
    problem:
      'A luxury fashion brand was losing 60% of mobile visitors due to a slow, outdated Shopify theme with poor navigation and no quick-view functionality.',
    solution:
      'Built a fully custom Shopify theme with OS 2.0, featuring a mega menu, AJAX cart, quick-view modals, size guides, and lazy-loaded images for blazing-fast performance.',
    results: [
      { metric: '35%', label: 'Increase in Conversions' },
      { metric: '2.1s', label: 'Page Load Speed' },
      { metric: '50%', label: 'Lower Bounce Rate' },
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
  },
  {
    title: 'Health & Wellness Store',
    category: 'Page Builder Customization',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    problem:
      'An e-commerce brand needed high-converting landing pages for seasonal campaigns but their team lacked the technical skills to build custom layouts.',
    solution:
      'Designed and built 12+ custom GemPages templates with product bundles, countdown timers, trust badges, and A/B testing capability for ongoing optimization.',
    results: [
      { metric: '2x', label: 'Conversion Rate' },
      { metric: '45%', label: 'Higher AOV' },
      { metric: '12+', label: 'Landing Pages Built' },
    ],
    tech: ['Shopify', 'GemPages', 'Liquid', 'JavaScript'],
  },
  {
    title: 'Gourmet Food Marketplace',
    category: 'Full Store Build',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=400&fit=crop',
    problem:
      'A gourmet food company wanted to launch a Shopify store with subscription boxes, recipe integration, and advanced product filtering — features not available out-of-the-box.',
    solution:
      'Built a custom theme with subscription management, dynamic recipe pages linked to products, multi-filter collection pages, and automated email flows for re-orders.',
    results: [
      { metric: '500+', label: 'Subscribers in Month 1' },
      { metric: '28%', label: 'Repeat Purchase Rate' },
      { metric: '4.9', label: 'Customer Rating' },
    ],
    tech: ['Shopify', 'Liquid', 'React', 'Node.js'],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-dark-900/30 py-20 sm:py-28 lg:py-36">
      <div className="gradient-orb -right-32 bottom-1/4 h-72 w-72 bg-purple-600 opacity-8" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
            Case Studies
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Real Results, Real Impact
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Deep dives into how I helped Shopify brands solve real problems
            and achieve measurable business results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-all duration-500 hover:border-white/10 hover:shadow-xl hover:shadow-purple-500/5"
            >
              <div className="grid lg:grid-cols-5">
                {/* Image */}
                <div className="relative lg:col-span-2 aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-950/30 hidden lg:block" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md border border-white/10">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:col-span-3">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {study.title}
                  </h3>

                  {/* Problem / Solution */}
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-400/80">Problem</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{study.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-green-400/80">Solution</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-white/5 bg-white/3 p-3 text-center transition-all duration-300 hover:border-purple-500/15"
                      >
                        <div className="font-display text-lg font-bold gradient-text sm:text-xl">
                          {result.metric}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-purple-500/8 px-2.5 py-0.5 text-xs font-medium text-purple-300/80 border border-purple-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
