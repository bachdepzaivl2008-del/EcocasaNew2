import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export function InteriorFeature() {
  const services = [
    'Thiết kế kiến trúc độc quyền',
    'Nội thất cao cấp theo phong cách riêng',
    'Thi công trọn gói chìa khóa trao tay',
    'Giám sát kỹ thuật chuyên nghiệp',
    'Vật liệu chính hãng, bảo hành dài hạn',
  ];

  return (
    <section id="living" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b6f47]/10 rounded-full text-[#8b6f47] text-sm font-medium mb-6">
              EcoCasa Living
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Kiến tạo không gian sống đẳng cấp
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Với đội ngũ kiến trúc sư và nhà thiết kế nội thất giàu kinh nghiệm, 
              chúng tôi biến ước mơ về ngôi nhà lý tưởng thành hiện thực. Mỗi dự án 
              là một tác phẩm nghệ thuật được chăm chút tỉ mỉ.
            </p>

            <div className="space-y-4 mb-10">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#8b6f47] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <span className="font-medium">Tư vấn dự án miễn phí</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1771270731051-9cfbb7222946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwYXJjaGl0ZWN0dXJlJTIwd29vZHxlbnwxfHx8fDE3NzQzMjYwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Kitchen Design"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/40 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-[#8b6f47] mb-1">200+</div>
              <p className="text-gray-600">Dự án hoàn thành</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
