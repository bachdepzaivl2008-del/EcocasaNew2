import { motion } from 'motion/react';
import { Droplet, Shield, Leaf, ArrowRight } from 'lucide-react';

export function HaircareFeature() {
  const features = [
    {
      icon: Droplet,
      title: 'Công thức cao cấp',
      description: 'Chiết xuất thiên nhiên kết hợp công nghệ Nhật Bản',
    },
    {
      icon: Shield,
      title: 'An toàn tuyệt đối',
      description: 'Không paraben, không sulfate, pH cân bằng',
    },
    {
      icon: Leaf,
      title: 'Thân thiện môi trường',
      description: 'Bao bì tái chế, quy trình sản xuất xanh',
    },
  ];

  return (
    <section id="haircare" className="py-24 bg-gradient-to-b from-white to-[#4FD1C5]/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyY2FyZSUyMHByb2R1Y3RzJTIwYm90dGxlc3xlbnwxfHx8fDE3NzQzMjYwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PantioSalon Products"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4FD1C5]/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-2xl shadow-xl p-6 max-w-xs text-white">
              <div className="text-3xl font-bold mb-1">100%</div>
              <p className="text-sm text-white/90">Chiết xuất thiên nhiên</p>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4FD1C5]/10 rounded-full text-[#4FD1C5] text-sm font-medium mb-6">
              PantioSalon / EcoCasa Haircare
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6">
              Chăm sóc tóc chuyên sâu, tỏa sáng mỗi ngày
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dòng sản phẩm PantioSalon được phát triển với công thức độc quyền, 
              kết hợp chiết xuất thiên nhiên và công nghệ tiên tiến từ Nhật Bản. 
              Mang đến mái tóc khỏe đẹp, óng mượt và đầy sức sống.
            </p>

            <div className="grid gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2332] mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-white rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <span className="font-medium">Khám phá sản phẩm</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
