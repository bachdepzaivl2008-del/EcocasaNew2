import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { Award, Users, Clock, Shield, Lightbulb, HeartHandshake } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const COLORS = [
  { color: 'from-[#8b6f47] to-[#5a3e28]', bg: '#f9f4ef' },
  { color: 'from-[#4FD1C5] to-[#2C9A8F]', bg: '#f0fdfb' },
  { color: 'from-[#667eea] to-[#764ba2]', bg: '#f5f3ff' },
  { color: 'from-[#f093fb] to-[#f5576c]', bg: '#fff0f6' },
  { color: 'from-[#4facfe] to-[#00c6fb]', bg: '#f0f8ff' },
  { color: 'from-[#43e97b] to-[#1cb476]', bg: '#f0fff6' },
];
const ICONS = [Award, Users, Clock, Shield, Lightbulb, HeartHandshake];

const N = ICONS.length;

/* ── Dot indicator per card ─────────────────────────────────────── */
function Dot({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) {
  const start = index / N;
  const end   = (index + 1) / N;
  const scale = useTransform(scrollYProgress, [start, end - 0.001, end], [1.8, 1.8, 1]);
  const bg    = useTransform(scrollYProgress, [start, end - 0.001, end], ['#8b6f47', '#8b6f47', '#d1d5db']);
  return (
    <motion.div
      style={{ scale, backgroundColor: bg }}
      className="w-2 h-2 rounded-full transition-colors"
    />
  );
}

/* ── One full-width card ─────────────────────────────────────────── */
interface BigCardProps {
  reason: { icon: typeof Award; title: string; description: string; color: string; bg: string };
  index: number;
  scrollYProgress: MotionValue<number>;
}

function BigCard({ reason, index, scrollYProgress }: BigCardProps) {
  const Icon  = reason.icon;
  const start = index / N;
  const end   = (index + 1) / N;

  // Build input / output for x (horizontal slide)
  type InputRange  = number[];
  type OutputRange = string[];
  let inputRange : InputRange;
  let outputRange: OutputRange;

  // SLIDE_SPAN = 0.09 → each slide travels over ~63vh of scroll (smoother)
  const SPAN = 0.09;

  if (index === 0) {
    // First card: already on-screen, exits left
    inputRange  = [end - SPAN, end];
    outputRange = ['0vw', '-105vw'];
  } else if (index === N - 1) {
    // Last card: enters from right, stays
    inputRange  = [start - SPAN, start];
    outputRange = ['105vw', '0vw'];
  } else {
    // Middle cards: enter from right → rest → exit left
    inputRange  = [start - SPAN, start, end - SPAN, end];
    outputRange = ['105vw', '0vw', '0vw', '-105vw'];
  }

  // Raw scroll-driven value
  const rawX = useTransform(scrollYProgress, inputRange, outputRange);
  // Spring wrapping for smooth, organic motion
  const x = useSpring(rawX, { stiffness: 65, damping: 22, mass: 0.8 });

  return (
    <motion.div
      style={{ x }}
      className="absolute inset-0 flex items-center justify-center px-6 py-4"
    >
      {/* Card */}
      <div
        className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2"
        style={{ minHeight: '62vh', background: reason.bg }}
      >
        {/* Left – coloured icon panel */}
        <div className={`bg-gradient-to-br ${reason.color} flex flex-col items-center justify-center gap-6 p-12 md:p-16`}>
          <div className="w-28 h-28 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-inner">
            <Icon className="w-16 h-16 text-white drop-shadow-md" />
          </div>
          <span className="text-white/55 text-xs font-semibold tracking-[0.2em] uppercase select-none">
            {String(index + 1).padStart(2, '0')} &nbsp;/&nbsp; {String(N).padStart(2, '0')}
          </span>
        </div>

        {/* Right – text content */}
        <div className="flex flex-col justify-center gap-5 p-10 md:p-14">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a2332] leading-snug">
            {reason.title}
          </h3>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8b6f47] to-[#d4af37]" />
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {reason.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Scroll hint ─────────────────────────────────────────────────── */
function ScrollHint({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { t } = useLang();
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 0.95], [0, 1, 1, 0]);
  return (
    <motion.p
      style={{ opacity }}
      className="text-center text-sm text-gray-400 tracking-wide"
    >
      {t.trust.scrollHint}
    </motion.p>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export function TrustSection() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);

  const reasons = t.trust.items.map((item, i) => ({
    icon: ICONS[i],
    title: item.title,
    description: item.description,
    ...COLORS[i],
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Container height: (N * 0.9 + 1) viewports
  const totalHeight = `${Math.round((N * 0.9 + 1) * 100)}vh`;

  return (
    <div
      id="why-ecocasa"
      ref={containerRef}
      style={{ height: totalHeight }}
      className="relative"
    >
      {/* Sticky panel */}
      <div className="sticky top-0 h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-16 pb-2 shrink-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-3">
            {t.trust.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 py-2 shrink-0">
          {reasons.map((_, i) => (
            <Dot key={i} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Cards (absolutely stacked, each slideable) */}
        <div className="relative flex-1 min-h-0">
          {reasons.map((reason, i) => (
            <BigCard key={reason.title} reason={reason} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="shrink-0 pb-6">
          <ScrollHint scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
