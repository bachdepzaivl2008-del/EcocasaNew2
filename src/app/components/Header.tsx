import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ShoppingCart, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/d7a716283c29c3993aea9f83ce8a77f06de84978.png';
import { useCart } from '../context/CartContext';
import type { ActivePage } from '../App';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  activePage: ActivePage;
  onNavigateHome: () => void;
}

const HOME_NAV: NavLink[] = [
  { label: 'Trang chủ',    href: '#' },
  { label: 'Về chúng tôi', href: '#about' },
  { label: 'Hệ sinh thái', href: '#ecosystem' },
  { label: 'Why Ecocasa',  href: '#why-ecocasa' },
  { label: 'Đánh Giá',    href: '#reviews' },
];

const LIVING_NAV: NavLink[] = [
  { label: 'Giới thiệu', href: '#living' },
  { label: 'Quy trình',  href: '#process' },
  { label: 'Dự án',      href: '#projects' },
  { label: 'Tư vấn',    href: '#living-contact' },
];

const COSMETICS_NAV: NavLink[] = [
  { label: 'Giới thiệu', href: '#haircare' },
  { label: 'Bộ sưu tập', href: '#products' },
  { label: 'Tư vấn',    href: '#cosmetics-contact' },
];

function getNavLinks(page: ActivePage): NavLink[] {
  if (page === 'living')    return LIVING_NAV;
  if (page === 'cosmetics') return COSMETICS_NAV;
  return HOME_NAV;
}

export function Header({ activePage, onNavigateHome }: HeaderProps) {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    activePage === 'living' ? '#living' : activePage === 'cosmetics' ? '#haircare' : '#'
  );

  const isSubPage = activePage !== 'home';
  const navLinks = getNavLinks(activePage);

  // Reset active section whenever the page changes
  useEffect(() => {
    if (activePage === 'living')    setActiveSection('#living');
    else if (activePage === 'cosmetics') setActiveSection('#haircare');
    else setActiveSection('#');
  }, [activePage]);

  const buildScrollSpy = useCallback(() => {
    const links = getNavLinks(activePage);
    const mapped = links
      .filter(l => l.href !== '#')
      .map(l => {
        const id = l.href.substring(1);
        const el = document.getElementById(id);
        if (!el) return null;
        return { id: l.href, top: el.getBoundingClientRect().top + window.scrollY };
      })
      .filter(Boolean) as { id: string; top: number }[];

    mapped.sort((a, b) => a.top - b.top);
    return mapped;
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      const sections = buildScrollSpy();
      const scrollPos = window.scrollY + window.innerHeight / 3;

      // Default: first nav item
      const firstHref = activePage === 'living' ? '#living'
                      : activePage === 'cosmetics' ? '#haircare'
                      : '#';

      if (window.scrollY < 100) {
        setActiveSection(firstHref);
        return;
      }

      let current = firstHref;
      for (const s of sections) {
        if (scrollPos >= s.top) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [buildScrollSpy, activePage]);

  const scrollTo = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(href.substring(1));
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'absolute top-[36px] bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

        {/* Logo + optional back arrow */}
        <div className="flex items-center gap-2">
          {isSubPage && (
            <button
              onClick={onNavigateHome}
              title="Quay lại trang chủ"
              className={`p-1.5 rounded-lg hover:bg-black/10 transition-colors ${
                scrolled ? 'text-[#1a2332]' : 'text-white'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={isSubPage ? onNavigateHome : () => scrollTo('#')}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="ECOCASA Logo" className="w-11 h-11 rounded-full object-cover shadow-sm" />
            <div className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#1a2332]' : 'text-white drop-shadow-md'}`}>
              ECOCASA
            </div>
          </button>
        </div>

        {/* Desktop nav – always shown with correct links */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          <AnimatePresence mode="wait">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={`${activePage}-${link.href}`}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? scrolled ? 'text-[#8b6f47]' : 'text-[#d4af37] drop-shadow-md'
                      : scrolled
                        ? 'text-[#1a2332] hover:text-[#8b6f47]'
                        : 'text-white drop-shadow-md hover:text-[#d4af37]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#d4af37] rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </AnimatePresence>
        </nav>

        {/* Right side: cart + CTA */}
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

          {isSubPage ? (
            <button
              onClick={() => {
                const targetId = activePage === 'living' ? 'living-contact' : 'cosmetics-contact';
                const el = document.getElementById(targetId);
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Tư vấn
            </button>
          ) : (
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Nhận tư vấn
            </button>
          )}
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={toggleCart} className="relative p-2">
            <ShoppingCart className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(v => !v)} className="p-2">
            {mobileMenuOpen
              ? <X className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
              : <Menu className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-1">
            {isSubPage && (
              <button
                onClick={() => { setMobileMenuOpen(false); onNavigateHome(); }}
                className="flex items-center gap-2 font-medium py-3 px-4 rounded-lg text-[#8b6f47] bg-gray-50 mb-2"
              >
                <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
              </button>
            )}
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-left font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive ? 'text-[#8b6f47] bg-gray-50' : 'text-[#1a2332] hover:bg-gray-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobilePill"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[#d4af37] rounded-r-full"
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
            {!isSubPage && (
              <button
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg text-center mt-4 font-medium"
              >
                Nhận tư vấn
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
