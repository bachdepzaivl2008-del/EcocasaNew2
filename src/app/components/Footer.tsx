import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EC</span>
              </div>
              <div className="text-2xl font-bold">ECOCASA</div>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Thiết kế đậm chất – Cuộc sống an lành
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4FD1C5] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4FD1C5] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4FD1C5] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">EcoCasa Living</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-[#8b6f47] transition-colors">
                  Thiết kế kiến trúc
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#8b6f47] transition-colors">
                  Thiết kế nội thất
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#8b6f47] transition-colors">
                  Thi công trọn gói
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#8b6f47] transition-colors">
                  Quản lý dự án
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">PantioSalon</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-[#4FD1C5] transition-colors">
                  Shampoo cao cấp
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#4FD1C5] transition-colors">
                  Dầu xả phục hồi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#4FD1C5] transition-colors">
                  Tinh dầu dưỡng tóc
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#4FD1C5] transition-colors">
                  Mặt nạ tóc
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>SB-117, Phân khu Sao Biển, Vinhome Ocean Park 2, Xã Nghĩa Trụ, Huyện Văn Giang, Tỉnh Hưng Yên, Hanoi, Vietnam</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:0862583868" className="hover:text-white transition-colors">
                  0862583868
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:ecocasa.vn@gmail.com" className="hover:text-white transition-colors">
                  ecocasa.vn@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 ECOCASA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
