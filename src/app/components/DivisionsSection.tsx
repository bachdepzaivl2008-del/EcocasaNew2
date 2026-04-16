import { motion } from 'motion/react';
import { Building2, Sparkles, ArrowRight } from 'lucide-react';

interface DivisionsSectionProps {
  onOpenLiving: () => void;
  onOpenCosmetics: () => void;
}

export function DivisionsSection({ onOpenLiving, onOpenCosmetics }: DivisionsSectionProps) {
  return (
    <section id="ecosystem" className="py-[8.75rem] bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Hệ sinh thái ECOCASA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai lĩnh vực chuyên nghiệp, một tầm nhìn chung về cuộc sống tinh tế
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* EcoCasa Living */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#2d3f54] p-10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                EcoCasa Living
              </h3>
              
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Kiến trúc, nội thất và thi công trọn gói cho không gian sống hiện đại. 
                Từ ý tưởng đến hiện thực, chúng tôi đồng hành cùng bạn trong mọi dự án.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Thiết kế kiến trúc & nội thất',
                  'Thi công trọn gói',
                  'Quản lý dự án chuyên nghiệp',
                  'Bảo hành dài hạn'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 bg-[#8b6f47] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenLiving}
                className="inline-flex items-center gap-2 text-[#8b6f47] font-medium group-hover:gap-3 transition-all cursor-pointer"
              >
                Tìm hiểu thêm
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#8b6f47]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* PantioSalon */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] p-10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                PantioSalon / EcoCasa Haircare
              </h3>
              
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Dòng sản phẩm chăm sóc tóc chuyên nghiệp với công thức cao cấp, 
                giúp bạn tự tin tỏa sáng mỗi ngày.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Shampoo chuyên sâu',
                  'Dầu xả phục hồi',
                  'Tinh dầu dưỡng tóc',
                  'Mặt nạ tóc cao cấp'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenCosmetics}
                className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all cursor-pointer"
              >
                Khám phá sản phẩm
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
