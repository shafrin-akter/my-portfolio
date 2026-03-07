import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Bloom Botanicals',
    text: 'Shafrin completely transformed our Shopify store. Sales increased by 40% within the first month after launch. Her attention to detail and understanding of e-commerce best practices is exceptional.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'CEO, FitGear Pro',
    text: 'Working with Shafrin was a fantastic experience. She delivered our custom Shopify theme ahead of schedule and the quality exceeded our expectations. Highly recommend for any Shopify project!',
    rating: 5,
    avatar: 'JR',
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Director, Luxe Skincare',
    text: 'The landing pages Shafrin built with GemPages are converting at 2x our previous rate. She understood our brand perfectly and created pages that truly represent our premium positioning.',
    rating: 5,
    avatar: 'EC',
  },
  {
    name: 'Michael Thompson',
    role: 'Owner, Urban Threads',
    text: 'Shafrin is our go-to Shopify developer. She has built and maintained our store for over a year now. Professional, reliable, and always delivers clean, fast code. A true expert.',
    rating: 5,
    avatar: 'MT',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 lg:py-36">
      <div className="gradient-orb -left-32 top-1/2 h-72 w-72 bg-cyan-600 opacity-8" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80">
            Testimonials
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Don&apos;t just take my word for it — here&apos;s what my clients have to say
            about working together.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group rounded-2xl border border-white/5 bg-white/2 p-6 sm:p-8 transition-all duration-500 hover:border-white/10 hover:bg-white/4 hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-sm font-bold text-white shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
