import { useState, useEffect, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Home, Sparkles } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface BtnRect { top: number; left: number; width: number; height: number }

interface OnboardingGuideProps {
  show: boolean;
  onDismiss: () => void;
}

/* ── Pulsing gold border around a button ──────────────────────────── */
function PulseRing({ r }: { r: BtnRect }) {
  const pad = 5;
  return (
    <div
      className="pointer-events-none fixed"
      style={{ top: r.top - pad, left: r.left - pad, width: r.width + pad * 2, height: r.height + pad * 2, zIndex: 60 }}
    >
      <div className="absolute inset-0 rounded-lg border-2 border-[#d4af37] shadow-[0_0_14px_4px_rgba(212,175,55,0.45)]" />
      <motion.div
        className="absolute inset-0 rounded-lg border border-[#d4af37]/70"
        animate={{ scale: [1, 1.18], opacity: [0.8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-0 rounded-lg border border-[#d4af37]/50"
        animate={{ scale: [1, 1.36], opacity: [0.5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.35 }}
      />
    </div>
  );
}

/* ── Tooltip ─────────────────────────────────────────────────────── */
const TOOLTIP_W = 210;
const TOOLTIP_GAP = 10;

interface TooltipProps {
  r: BtnRect;
  icon: React.ReactNode;
  title: string;
  desc: string;
  accentColor: string;
  arrowColor: string;
  delay?: number;
}

function Tooltip({ r, icon, title, desc, accentColor, arrowColor, delay = 0 }: TooltipProps) {
  const btnCenterX = r.left + r.width / 2;
  const clampedLeft = Math.min(
    Math.max(btnCenterX - TOOLTIP_W / 2, 8),
    window.innerWidth - TOOLTIP_W - 8,
  );
  const arrowLeft = btnCenterX - clampedLeft - 8;
  const tooltipBottom = window.innerHeight - r.top + TOOLTIP_GAP;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed pointer-events-none"
      style={{ bottom: tooltipBottom, left: clampedLeft, width: TOOLTIP_W, zIndex: 61 }}
    >
      <div className="rounded-2xl px-4 py-3 shadow-2xl text-white" style={{ background: accentColor }}>
        <div className="flex items-center gap-1.5 mb-1.5">
          {icon}
          <span className="font-semibold text-sm tracking-wide">{title}</span>
        </div>
        <p className="text-xs text-white/85 leading-relaxed">{desc}</p>
      </div>
      <div
        className="absolute"
        style={{
          bottom: -9,
          left: Math.max(8, Math.min(arrowLeft, TOOLTIP_W - 24)),
          width: 0, height: 0,
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderTop: `10px solid ${arrowColor}`,
        }}
      />
    </motion.div>
  );
}

/* ── Main component ───────────────────────────────────────────────── */
export function OnboardingGuide({ show, onDismiss }: OnboardingGuideProps) {
  const { t } = useLang();
  const [rects, setRects] = useState<{ living: BtnRect | null; cosmetics: BtnRect | null }>({
    living: null,
    cosmetics: null,
  });

  // showRings is separate from show:
  // - set to true when guide appears
  // - set to false SYNCHRONOUSLY via flushSync the moment user clicks dismiss
  //   so rings vanish before the browser paints anything (no frame gap)
  const [showRings, setShowRings] = useState(false);

  const prevOverflow = useRef('');
  const prevTouchAction = useRef('');

  const measure = useCallback(() => {
    const toRect = (el: HTMLElement | null): BtnRect | null => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    };
    setRects({
      living:    toRect(document.querySelector<HTMLElement>('[data-guide="living"]')),
      cosmetics: toRect(document.querySelector<HTMLElement>('[data-guide="cosmetics"]')),
    });
    setShowRings(true);
  }, []);

  useEffect(() => {
    if (!show) {
      setShowRings(false);
      setRects({ living: null, cosmetics: null });
      return;
    }

    // Lock scroll
    prevOverflow.current = document.body.style.overflow;
    prevTouchAction.current = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Force to top synchronously
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Measure after Hero animations (950 ms)
    const t = setTimeout(measure, 950);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', measure);
    };
  }, [show, measure]);

  const handleDismiss = () => {
    // flushSync forces React to synchronously flush this state update and
    // re-render BEFORE returning control to the browser — rings disappear
    // in the SAME frame as the click, with zero delay.
    flushSync(() => setShowRings(false));

    // Unlock scroll immediately
    document.body.style.overflow = prevOverflow.current;
    document.body.style.touchAction = prevTouchAction.current;

    // Tell parent → triggers overlay/hint exit animation
    onDismiss();
  };

  return (
    <>
      {/* ── Rings & tooltips: controlled separately so they vanish instantly ── */}
      {showRings && rects.living    && <PulseRing r={rects.living} />}
      {showRings && rects.cosmetics && <PulseRing r={rects.cosmetics} />}
      {showRings && rects.living && (
        <Tooltip
          r={rects.living}
          icon={<Home className="w-3.5 h-3.5 shrink-0" />}
          title={t.onboarding.living.title}
          desc={t.onboarding.living.desc}
          accentColor="#7a5c35"
          arrowColor="#7a5c35"
          delay={0.1}
        />
      )}
      {showRings && rects.cosmetics && (
        <Tooltip
          r={rects.cosmetics}
          icon={<Sparkles className="w-3.5 h-3.5 shrink-0" />}
          title={t.onboarding.cosmetics.title}
          desc={t.onboarding.cosmetics.desc}
          accentColor="#2C9A8F"
          arrowColor="#2C9A8F"
          delay={0.25}
        />
      )}

      {/* ── Overlay + hint: fade in/out independently via AnimatePresence ── */}
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={handleDismiss}
            />
            <motion.div
              key="hint"
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[65] flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm shadow-2xl pointer-events-auto cursor-pointer select-none"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              onClick={handleDismiss}
            >
              <X className="w-4 h-4 text-white/70" />
              <span>{t.onboarding.hint}</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
