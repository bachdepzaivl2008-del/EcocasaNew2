import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Ruler, Hammer, Key } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Tư vấn & Lắng nghe',
      description: 'Tìm hiểu nhu cầu, phong cách sống và ngân sách của bạn',
    },
    {
      icon: Lightbulb,
      title: 'Ý tưởng & Thiết kế',
      description: 'Phát triển concept và bản vẽ chi tiết 3D/2D',
    },
    {
      icon: Ruler,
      title: 'Dự toán & Lập kế hoạch',
      description: 'Báo giá minh bạch và timeline cụ thể',
    },
    {
      icon: Hammer,
      title: 'Thi công & Giám sát',
      description: 'Triển khai với đội ngũ thợ lành nghề, giám sát chặt chẽ',
    },
    {
      icon: Key,
      title: 'Bàn giao & Bảo hành',
      description: 'Nghiệm thu, bàn giao và hỗ trợ sau bán hàng',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Quy trình làm việc
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            5 bước rõ ràng, minh bạch từ ý tưởng đến hoàn thiện
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b6f47] via-[#8b6f47] to-[#8b6f47]/20" 
            style={{ width: 'calc(100% - 120px)', left: '60px' }}
          />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#8b6f47] rounded-full flex items-center justify-center z-20 font-bold text-sm text-[#8b6f47]">
                    {index + 1}
                  </div>

                  <h3 className="font-bold text-[#1a2332] mb-3 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
