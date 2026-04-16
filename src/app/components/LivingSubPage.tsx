import { motion } from 'motion/react';
import { InteriorFeature } from './InteriorFeature';
import { ProcessTimeline } from './ProcessTimeline';
import { ProjectsGallery } from './ProjectsGallery';
import { LivingContactCTA } from './LivingContactCTA';

interface LivingSubPageProps {
  onBack: () => void;
}

export function LivingSubPage({ onBack }: LivingSubPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen bg-white"
    >
      {/* Sub-page Hero Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-[#1a2332] via-[#2d3f54] to-[#1a2332] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#8b6f47]/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#8b6f47]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Kiến tạo không gian sống <span className="text-[#d4af37]">đẳng cấp</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Kiến trúc, nội thất và thi công trọn gói cho không gian sống hiện đại.
              Từ ý tưởng đến hiện thực, chúng tôi đồng hành cùng bạn trong mọi dự án.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <InteriorFeature />
      <ProcessTimeline />
      <ProjectsGallery />
      <LivingContactCTA />
    </motion.div>
  );
}
