import { motion } from 'framer-motion';

const services = [
  {
    title: 'HTML Development',
    description:
      'Semantic, accessible, and SEO-friendly HTML markup that forms the solid foundation of every web project I build.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'CSS Styling',
    description:
      'Pixel-perfect, responsive designs with modern CSS techniques including Flexbox, Grid, animations, and custom properties.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'JavaScript',
    description:
      'Interactive and dynamic web experiences powered by modern JavaScript, including ES6+, DOM manipulation, and APIs.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Shopify Theme Development',
    description:
      'Custom Shopify themes and theme modifications using Liquid, creating unique e-commerce experiences that drive sales.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Page Builder Customization',
    description:
      'Expert customization of page builders like Elementor, Divi, and Webflow to create unique layouts beyond default options.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative bg-dark-900/50 py-24 lg:py-32">
      <div className="gradient-orb -left-40 top-1/2 h-80 w-80 bg-cyan-600" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            What I Do
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
            My Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            I offer a wide range of web development services to bring your digital vision to life.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="glass-card group relative rounded-2xl p-8 transition-all duration-500 glow-purple-hover"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3.5 text-white shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Top gradient line */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
