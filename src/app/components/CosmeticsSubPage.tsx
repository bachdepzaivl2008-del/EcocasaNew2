import { motion } from 'motion/react';
import { HaircareFeature } from './HaircareFeature';
import { ProductGrid } from './ProductGrid';
import { CosmeticsContactCTA } from './CosmeticsContactCTA';

interface CosmeticsSubPageProps {
  onBack: () => void;
}

export function CosmeticsSubPage({ onBack }: CosmeticsSubPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen bg-white"
    >
      {/* Sub-page Hero Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-[#4FD1C5] via-[#38B2AC] to-[#2C9A8F] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Chăm sóc tóc chuyên sâu, <span className="text-[#F0FFF4]">tỏa sáng mỗi ngày</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Dòng sản phẩm chăm sóc tóc chuyên nghiệp với công thức cao cấp,
              giúp bạn tự tin tỏa sáng mỗi ngày.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <HaircareFeature />
      <ProductGrid />
      <CosmeticsContactCTA />
    </motion.div>
  );
}
