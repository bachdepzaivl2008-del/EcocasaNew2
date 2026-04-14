import { motion } from 'motion/react';

export function TransitionCopy() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4FD1C5]/10 to-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-[#8b6f47] via-[#4FD1C5] to-[#D4AF37] mx-auto mb-8 rounded-full" />
          
          <p className="text-2xl md:text-3xl text-[#1a2332] leading-relaxed font-light">
            Không gian sống an lành tạo nền tảng cho cuộc sống hạnh phúc. 
            Và sự chăm sóc bản thân chu đáo giúp bạn <span className="font-medium text-[#4FD1C5]">tự tin tỏa sáng</span> mỗi ngày. 
            ECOCASA kết nối hai thế giới này, mang đến trải nghiệm sống trọn vẹn.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] via-[#4FD1C5] to-[#8b6f47] mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
