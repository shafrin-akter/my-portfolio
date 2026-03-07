import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Shopify Theme Development',
    description:
      'Custom Shopify themes built with Liquid, creating unique e-commerce experiences that drive conversions and sales.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-400',
    bgGlow: 'group-hover:shadow-green-500/20',
    highlights: ['Custom Themes', 'Liquid', 'Sections', 'Metafields'],
  },
  {
    title: 'Shopify Page Builders',
    description:
      'Expert in leading page builders — crafting high-converting landing pages and custom store layouts without limitations.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-400',
    bgGlow: 'group-hover:shadow-purple-500/20',
    highlights: ['Replo', 'GemPages', 'Shogun', 'PageFly'],
  },
  {
    title: 'React',
    description:
      'Building modern, component-driven user interfaces — fast, interactive, and scalable web applications.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
    color: 'from-cyan-400 to-blue-400',
    bgGlow: 'group-hover:shadow-cyan-500/20',
    highlights: ['Components', 'Hooks', 'SPA', 'Next.js'],
  },
  {
    title: 'JavaScript',
    description:
      'Interactive and dynamic web experiences powered by modern ES6+ JavaScript, DOM manipulation, and APIs.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.086.567.303.743.626.787-.517.787-.517 1.335-.863-.204-.313-.31-.451-.448-.586-.484-.543-1.131-.818-2.177-.783l-.543.068c-.52.124-.993.397-1.272.766-.833.981-.594 2.694.415 3.402.993.69 2.444.845 2.632 1.497.18.805-.594 1.065-1.348.967-.554-.098-.862-.398-1.195-.866l-1.315.757c.154.327.33.476.596.764.928.954 3.25 1.052 3.667-.585 0 0 .11-.398.058-1.331zm-6.488-1.145c-.222.487-.361.804-.73 1.373-.319-.469-.397-.666-.59-1.155-.504.05-1.095.13-1.6.168.553 1.03 1.114 2.025 1.688 3.039.529-1.047 1.115-2.075 1.69-3.118-.506-.011-.97-.043-1.458-.307z" />
      </svg>
    ),
    color: 'from-yellow-400 to-orange-400',
    bgGlow: 'group-hover:shadow-yellow-500/20',
    highlights: ['ES6+', 'DOM', 'APIs', 'Async'],
  },
  {
    title: 'Tailwind CSS',
    description:
      'Rapid UI development with Tailwind CSS — crafting responsive, pixel-perfect designs with utility-first efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    color: 'from-sky-400 to-cyan-300',
    bgGlow: 'group-hover:shadow-sky-500/20',
    highlights: ['Utility-First', 'Responsive', 'Custom'],
  },
  {
    title: 'Figma',
    description:
      'Translating Figma designs into pixel-perfect code — bridging the gap between design and development seamlessly.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2zm0 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0zm-7 0A3.5 3.5 0 018.5 11H12v3.5a3.5 3.5 0 11-7 0zM5 5.5A3.5 3.5 0 018.5 9H12V2H8.5A3.5 3.5 0 005 5.5zm0 13A3.5 3.5 0 008.5 22H12v-3.5H8.5A3.5 3.5 0 005 18.5z" />
      </svg>
    ),
    color: 'from-pink-400 to-rose-400',
    bgGlow: 'group-hover:shadow-pink-500/20',
    highlights: ['Design-to-Code', 'Prototyping', 'UI/UX'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-dark-900/30 py-20 sm:py-28 lg:py-36">
      <div className="gradient-orb -left-40 top-1/2 h-80 w-80 bg-cyan-600 opacity-8" />
      <div className="gradient-orb right-0 top-0 h-60 w-60 bg-purple-500 opacity-5" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
            What I Work With
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Technologies and tools I use to build high-converting Shopify stores
            and exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative rounded-2xl border border-white/5 bg-white/2 p-6 sm:p-7 transition-all duration-500 hover:border-white/10 hover:bg-white/4 hover:shadow-xl ${skill.bgGlow}`}
            >
              {/* Top accent line */}
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-500 group-hover:opacity-60 rounded-t-2xl`}
              />

              {/* Icon */}
              <div
                className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${skill.color} p-3 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
              >
                {skill.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-white/95 sm:text-xl">
                {skill.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {skill.description}
              </p>

              {/* Highlight tags */}
              {skill.highlights && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-white/12 group-hover:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
