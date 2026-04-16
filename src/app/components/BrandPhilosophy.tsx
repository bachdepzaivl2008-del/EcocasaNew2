import { motion } from 'motion/react';
import { Home, Sparkles, Heart } from 'lucide-react';

export function BrandPhilosophy() {
  const values = [
    {
      icon: Home,
      title: 'Thiết kế bền vững',
      description: 'Mỗi không gian đều được kiến tạo với tầm nhìn dài hạn, kết hợp thẩm mỹ và công năng hoàn hảo.',
    },
    {
      icon: Sparkles,
      title: 'Chất lượng tinh túy',
      description: 'Từ vật liệu xây dựng đến sản phẩm chăm sóc, chúng tôi chỉ lựa chọn những gì tốt nhất.',
    },
    {
      icon: Heart,
      title: 'Trải nghiệm toàn diện',
      description: 'Không chỉ là không gian và sản phẩm, mà là lối sống an lành, tinh tế cho mọi gia đình.',
    },
  ];

  return (
    <section id="about" className="py-[8.75rem] bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6">
            Triết lý thương hiệu
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            ECOCASA tin rằng cuộc sống an lành bắt đầu từ không gian sống được thiết kế đúng đắn 
            và sự chăm sóc bản thân chu đáo. Chúng tôi kết nối hai thế giới này thành một hệ sinh thái 
            cao cấp, mang đến trải nghiệm sống trọn vẹn cho bạn và gia đình.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
