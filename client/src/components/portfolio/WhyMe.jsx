import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Shopify Specialist',
    description:
      'Deep expertise in the Shopify ecosystem — Liquid, Dawn, Online Store 2.0, metafields, and the latest platform features.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Conversion Focused',
    description:
      'Every design decision I make is backed by e-commerce best practices to maximize your store\'s revenue and customer experience.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    title: 'Pixel-Perfect Code',
    description:
      'Clean, semantic, well-structured code that is fast, maintainable, and follows industry best practices and standards.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-cyan-400 to-blue-400',
  },
  {
    title: 'Fast Turnaround',
    description:
      'Efficient workflow and deep platform knowledge means your project gets delivered on time without compromising quality.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'Clear Communication',
    description:
      'Regular updates, transparent timelines, and responsive communication throughout the entire project lifecycle.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    title: 'Post-Launch Support',
    description:
      'I don\'t disappear after delivery. Ongoing support, updates, and optimization to keep your store performing at its best.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652 9.027 9.027 0 01-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m0 0a3.765 3.765 0 010-2.528m2.268 4.796l-4.138 3.448M7.288 19.67a9.014 9.014 0 010-9.424m4.138 5.976l-3.448-4.138m0 0a9.027 9.027 0 01-1.306-1.652 9.027 9.027 0 01-1.652-1.306" />
      </svg>
    ),
    gradient: 'from-indigo-400 to-purple-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function WhyMe() {
  return (
    <section className="relative bg-dark-900/30 py-20 sm:py-28 lg:py-36">
      <div className="gradient-orb right-0 top-1/3 h-72 w-72 bg-purple-600 opacity-8" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
            Why Choose Me
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Why Work With Me
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            I bring more than just code — I bring a results-driven approach
            that helps your Shopify business succeed.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group relative rounded-2xl border border-white/5 bg-white/2 p-6 sm:p-7 transition-all duration-500 hover:border-white/10 hover:bg-white/4 hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Top accent */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${reason.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-50`} />

              <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${reason.gradient} p-3 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                {reason.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-white/95">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
