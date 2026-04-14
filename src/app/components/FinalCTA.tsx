import { motion } from 'motion/react';
import { Building2, Sparkles, Phone, Mail, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Bắt đầu hành trình của bạn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Liên hệ ngay để nhận tư vấn miễn phí từ chuyên gia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* EcoCasa Living CTA */}
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

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <span className="font-medium">Đặt lịch tư vấn</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#8b6f47]/10 rounded-full blur-3xl" />
          </motion.div>

          {/* PantioSalon CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] p-10"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Tư vấn sản phẩm & salon
              </h3>

              <p className="text-white/90 mb-8 leading-relaxed">
                Liên hệ để được tư vấn về sản phẩm phù hợp hoặc đặt lịch hẹn tại salon của chúng tôi.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <Phone className="w-5 h-5 text-white" />
                  <span>092 666 89 66</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Mail className="w-5 h-5 text-white" />
                  <span>pantiosalonvn@gmail.com</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4FD1C5] rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-medium"
              >
                <span>Liên hệ ngay</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Contact Form (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[#1a2332] mb-6 text-center">
            Hoặc gửi thông tin để được liên hệ lại
          </h3>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại *
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent"
                placeholder="0862583868"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dịch vụ quan tâm
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent">
                <option>Thiết kế & Thi công</option>
                <option>Sản phẩm Haircare</option>
                <option>Cả hai</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nội dung
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent"
                placeholder="Mô tả chi tiết nhu cầu của bạn..."
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#8b6f47] via-[#4FD1C5] to-[#38B2AC] text-white rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-medium"
              >
                Gửi thông tin
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
