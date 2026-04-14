import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/d7a716283c29c3993aea9f83ce8a77f06de84978.png';
import { useCart } from '../context/CartContext';

export function Header() {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  const navLinks = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Về chúng tôi', href: '#about' },
    { label: 'EcoCasa Living', href: '#living' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Ecocasa Cosmetics', href: '#haircare' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      // Scroll Spy Logic
      const sections = navLinks
        .map(link => {
          if (link.href === '#') return null; // Handle top section separately
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: link.href,
              top: rect.top + window.scrollY,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Sort by top position just in case
      sections.sort((a, b) => (a?.top || 0) - (b?.top || 0));

      let current = '#';
      // Sử dụng 1/3 chiều cao màn hình làm điểm kích hoạt chuyển mục
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section && scrollPosition >= section.top) {
          current = section.id;
        }
      }

      // If we are near the very top, highlight home
      if (window.scrollY < 100) {
        current = '#';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'absolute top-[36px] bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ECOCASA Logo" className="w-11 h-11 rounded-full object-cover shadow-sm" />
          <div>
            <div className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#1a2332]' : 'text-white drop-shadow-md'}`}>
              ECOCASA
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors z-10 ${
                  isActive
                    ? scrolled ? 'text-[#8b6f47]' : 'text-[#d4af37] drop-shadow-md'
                    : scrolled ? 'text-[#1a2332] hover:text-[#8b6f47]' : 'text-white drop-shadow-md hover:text-[#d4af37]'
                }`}
                onClick={(e) => {
                  if (link.href !== '#') {
                    const el = document.getElementById(link.href.substring(1));
                    if (el) {
                      e.preventDefault();
                      window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  } else {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }
                  setActiveSection(link.href);
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#d4af37] rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Cart */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleCart}
            className="relative p-2 rounded-full hover:bg-gray-100/10 transition-colors"
          >
            <ShoppingCart className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
                {totalItems}
              </span>
            )}
          </button>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Nhận tư vấn
          </a>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={toggleCart}
            className="relative p-2"
          >
            <ShoppingCart className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#8b6f47] bg-gray-50'
                      : 'text-[#1a2332] hover:bg-gray-50'
                  }`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.href !== '#') {
                      const el = document.getElementById(link.href.substring(1));
                      if (el) {
                        e.preventDefault();
                        window.scrollTo({
                          top: el.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    } else {
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }
                    setActiveSection(link.href);
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobilePill"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[#d4af37] rounded-r-full"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg text-center mt-4 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nhận tư vấn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
