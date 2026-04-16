import { motion } from 'motion/react';
import { Building2, Phone, Mail, ArrowRight } from 'lucide-react';

export function LivingContactCTA() {
  return (
    <section id="living-contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Liên hệ ngay để nhận tư vấn thiết kế & thi công miễn phí
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#2d3f54] p-10"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Tư vấn thiết kế & thi công
              </h3>

              <p className="text-white/70 mb-8 leading-relaxed">
                Đặt lịch hẹn tư vấn miễn phí với kiến trúc sư và nhận báo giá chi tiết cho dự án của bạn.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-[#8b6f47]" />
                  <span>0862583868</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-[#8b6f47]" />
                  <span>ecocasa.vn@gmail.com</span>
                </div>
              </div>


            </div>

            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#8b6f47]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#1a2332] mb-6">
              Gửi thông tin tư vấn
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:border-transparent"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:border-transparent"
                  placeholder="0862583868"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f47] focus:border-transparent"
                  placeholder="Mô tả chi tiết nhu cầu thiết kế & thi công của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-medium"
              >
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
