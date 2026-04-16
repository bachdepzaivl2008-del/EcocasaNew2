import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroBg from 'figma:asset/c993cc25fda3c9ab4cfc5d636153c75cabc07763.png';
import picture1 from '../../assets/Picture 1.jpg';
import picture2 from '../../assets/Picture 2.jpg';
import picture3 from '../../assets/Picture 3.jpg';
import picture4 from '../../assets/Picture 4.jpg';
import picture5 from '../../assets/Picture 5.jpg';

const images = [heroBg, picture1, picture2, picture3, picture4, picture5];

interface HeroProps {
  onOpenLiving: () => void;
  onOpenCosmetics: () => void;
}

export function Hero({ onOpenLiving, onOpenCosmetics }: HeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback((delay: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
      // Sau khi tự động chuyển bằng thời gian chờ phụ, đặt lại vòng lặp chính về 12 giây
      if (delay !== 12000) {
        startAutoplay(12000);
      }
    }, delay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    startAutoplay(12000); // Mặc định 12 giây chuyển ảnh
    
    const onPointerDown = () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };

    const onPointerUp = () => {
      // Khi người dùng dừng lướt (kéo thả xong), chờ 5s rồi tự lướt tiếp (sau đó về lại chu kỳ 12s)
      startAutoplay(5000);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi, startAutoplay]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#11161d]">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full">
            {images.map((img, index) => (
              <div key={index} className="relative flex-[0_0_100%] min-w-0 w-full h-full">
                <img
                  src={img}
                  alt={`Premium Luxury Interior ${index + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Warmer overlay for interior feel and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#11161d]/90 via-[#1a2332]/70 to-[#1a2332]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs uppercase tracking-widest font-medium mb-8">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
              Premium Lifestyle Ecosystem
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white mb-6"
          >
            <span className="block text-4xl md:text-6xl font-semibold mb-2 tracking-tight">
              Thiết kế đậm chất
            </span>
            <span className="block text-4xl md:text-6xl font-light text-white/90 tracking-tight">
              Cuộc sống an lành
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base md:text-lg mb-10 leading-relaxed max-w-xl font-light"
          >
            Từ không gian sống tinh tế đến chăm sóc cá nhân chỉn chu, ECOCASA kiến tạo trải nghiệm sống hài hòa cho cuộc sống hiện đại.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={onOpenLiving}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span className="font-medium text-sm tracking-wide">Khám phá EcoCasa Living</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenCosmetics}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm text-white border border-white/30 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <span className="font-medium text-sm tracking-wide">Dịch vụ PantioSalon</span>
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-8 text-white/70 text-xs tracking-wider uppercase font-medium"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8b6f47]" />
              <span>Hơn 200+ dự án</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#8b6f47]" />
              <span>1000+ khách hàng</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#8b6f47]" />
              <span>Đánh giá 4.9/5.0</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
