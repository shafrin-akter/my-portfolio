import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Large ambient glow that follows cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="h-[600px] w-[600px] rounded-full opacity-70 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Small dot cursor */}
      <motion.div
        className="pointer-events-none fixed z-[10000] hidden md:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="h-4 w-4 rounded-full"
          style={{
            background: 'rgba(168, 85, 247, 0.9)',
            boxShadow: '0 0 16px 4px rgba(168,85,247,0.5), 0 0 40px 8px rgba(168,85,247,0.2)',
          }}
        />
      </motion.div>
    </>
  );
}
