import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function StatsTestimonials() {
  const stats = [
    { number: '200+', label: 'Dự án hoàn thành' },
    { number: '1000+', label: 'Khách hàng hài lòng' },
    { number: '15+', label: 'Năm kinh nghiệm' },
    { number: '4.9/5.0', label: 'Đánh giá trung bình' },
  ];

  const testimonials = [
    {
      name: 'Anh Minh Tuấn',
      role: 'Chủ nhà Villa Phú Mỹ Hưng',
      content: 'ECOCASA đã biến giấc mơ về ngôi nhà lý tưởng thành hiện thực. Đội ngũ thiết kế rất chuyên nghiệp, tỉ mỉ từng chi tiết. Chúng tôi vô cùng hài lòng với không gian sống mới.',
      rating: 5,
    },
    {
      name: 'Chị Hương Lan',
      role: 'Khách hàng PantioSalon',
      content: 'Dòng sản phẩm chăm sóc tóc của ECOCASA thật sự xuất sắc. Tóc tôi đã cải thiện rõ rệt sau 2 tuần sử dụng. Mùi hương thanh nhã, chất lượng cao cấp.',
      rating: 5,
    },
    {
      name: 'Anh Đức Thịnh',
      role: 'Chủ đầu tư Văn phòng Tech Hub',
      content: 'Thiết kế văn phòng của ECOCASA không chỉ đẹp mà còn tối ưu công năng. Nhân viên đều phản hồi tích cực về không gian làm việc mới. Đáng đồng tiền bát gạo!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8b6f47] to-[#4FD1C5] bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-gray-600">
            Niềm tin và sự hài lòng của khách hàng là động lực lớn nhất
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-[#4FD1C5] mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#1a2332]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
