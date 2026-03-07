import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-glass shadow-2xl shadow-purple-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="group font-display text-xl font-bold tracking-tight sm:text-2xl"
            >
              <span className="gradient-text transition-all duration-300 group-hover:opacity-80">
                Shafrin
              </span>
              <span className="text-white/90">.dev</span>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="btn-shine ml-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
              >
                Hire Me
              </a>
            </div>

            {/* Hamburger toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 relative z-[9999] lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-dark-950/98 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06 }}
                className={`font-display text-2xl font-semibold transition-colors px-6 py-2.5 rounded-2xl ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-white/5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="mt-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-10 py-4 text-lg font-semibold text-white"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
