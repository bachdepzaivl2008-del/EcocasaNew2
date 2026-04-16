import { motion } from 'motion/react';
import { Award, Users, Clock, Shield, Lightbulb, HeartHandshake } from 'lucide-react';

export function TrustSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Chuyên nghiệp đẳng cấp',
      description: 'Đội ngũ kiến trúc sư và chuyên gia hàng đầu với hơn 10 năm kinh nghiệm',
    },
    {
      icon: Users,
      title: 'Đồng hành tận tâm',
      description: 'Tư vấn miễn phí, hỗ trợ 24/7 trong suốt quá trình triển khai',
    },
    {
      icon: Clock,
      title: 'Cam kết tiến độ',
      description: 'Hoàn thành đúng hạn, minh bạch từng giai đoạn công việc',
    },
    {
      icon: Shield,
      title: 'Bảo hành dài hạn',
      description: 'Chế độ bảo hành toàn diện, hỗ trợ sau bán hàng chuyên nghiệp',
    },
    {
      icon: Lightbulb,
      title: 'Sáng tạo không giới hạn',
      description: 'Thiết kế độc quyền, phù hợp với phong cách sống của từng gia đình',
    },
    {
      icon: HeartHandshake,
      title: 'Giá trị bền vững',
      description: 'Sản phẩm và dịch vụ thân thiện môi trường, an toàn cho sức khỏe',
    },
  ];

  return (
    <section id="why-ecocasa" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Tại sao chọn ECOCASA?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi tự hào mang đến trải nghiệm tốt nhất cho khách hàng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
