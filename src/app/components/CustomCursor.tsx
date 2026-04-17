import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1024 && !window.matchMedia('(hover: none)').matches);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = (e: Event) => {
      setIsHovered(true);
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursorText) {
        setHoverText(target.dataset.cursorText);
      }
    };
    const handleHoverEnd = () => {
      setIsHovered(false);
      setHoverText(null);
    };

    const attachHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, input, [role="button"], [data-magnetic], [data-cursor-text]');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    attachHoverEvents();

    const observer = new MutationObserver(() => attachHoverEvents());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isDesktop, isHidden]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: '0.75rem',
          height: '0.75rem',
          backgroundColor: '#d4af37',
          scale: 1,
          opacity: isHidden ? 0 : 1,
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      >
        {isHovered && hoverText && (
          <div className="absolute top-full mt-4 whitespace-nowrap px-3 py-1 bg-[#d4af37] rounded-full">
            <span className="text-[10px] font-medium text-[#11161d] tracking-widest uppercase">
              {hoverText}
            </span>
          </div>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#d4af37] rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : 1,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </>
  );
}
