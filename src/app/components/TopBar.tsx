import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[36px] z-50 bg-[#1a2332] text-white/80 text-[13px] border-b border-white/10 flex items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 flex items-center justify-between">
        <p className="hidden sm:block font-medium tracking-wide">ECOCASA &bull; Kiến trúc | Nội thất | Chăm sóc tóc chuyên nghiệp</p>
        <p className="sm:hidden font-medium tracking-wide">ECOCASA</p>
        <div className="flex items-center gap-6 font-medium">
          <a href="tel:+84123456789" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+84 123 456 789</span>
          </a>
          <a href="mailto:hello@ecocasa.vn" className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>hello@ecocasa.vn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
