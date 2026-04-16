import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ShoppingCart, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/d7a716283c29c3993aea9f83ce8a77f06de84978.png';
import { useCart } from '../context/CartContext';
import { useLang, type Lang } from '../context/LanguageContext';
import type { ActivePage } from '../App';

interface NavLink { label: string; href: string }
interface HeaderProps { activePage: ActivePage; onNavigateHome: () => void }

function getNavLinks(page: ActivePage, t: ReturnType<typeof useLang>['t']): NavLink[] {
  if (page === 'living') return [
    { label: t.nav.livingIntro,    href: '#living' },
    { label: t.nav.livingProcess,  href: '#process' },
    { label: t.nav.livingProjects, href: '#projects' },
    { label: t.nav.livingConsult,  href: '#living-contact' },
  ];
  if (page === 'cosmetics') return [
    { label: t.nav.cosmeticsIntro,       href: '#haircare' },
    { label: t.nav.cosmeticsCollection,  href: '#products' },
    { label: t.nav.cosmeticsConsult,     href: '#cosmetics-contact' },
  ];
  return [
    { label: t.nav.home,        href: '#' },
    { label: t.nav.about,       href: '#about' },
    { label: t.nav.ecosystem,   href: '#ecosystem' },
    { label: t.nav.whyEcocasa, href: '#why-ecocasa' },
    { label: t.nav.reviews,     href: '#reviews' },
  ];
}

/* ── Language toggle pill ────────────────────────────────────────── */
function LangToggle({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
      title="Switch language"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all duration-200 ${
        scrolled
          ? 'border-[#8b6f47]/40 text-[#8b6f47] hover:bg-[#8b6f47]/10'
          : 'border-white/30 text-white hover:bg-white/10'
      }`}
    >
      <span className={lang === 'vi' ? 'opacity-100' : 'opacity-40'}>VI</span>
      <span className={scrolled ? 'text-[#8b6f47]/30' : 'text-white/30'}>/</span>
      <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
    </button>
  );
}

export function Header({ activePage, onNavigateHome }: HeaderProps) {
  const { totalItems, toggleCart } = useCart();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    activePage === 'living' ? '#living' : activePage === 'cosmetics' ? '#haircare' : '#'
  );

  const isSubPage = activePage !== 'home';
  const navLinks = getNavLinks(activePage, t);

  useEffect(() => {
    if (activePage === 'living')         setActiveSection('#living');
    else if (activePage === 'cosmetics') setActiveSection('#haircare');
    else                                 setActiveSection('#');
  }, [activePage]);

  const buildScrollSpy = useCallback(() => {
    const links = getNavLinks(activePage, t);
    return links
      .filter(l => l.href !== '#')
      .map(l => {
        const id = l.href.substring(1);
        const el = document.getElementById(id);
        if (!el) return null;
        return { id: l.href, top: el.getBoundingClientRect().top + window.scrollY };
      })
      .filter(Boolean)
      .sort((a, b) => a!.top - b!.top) as { id: string; top: number }[];
  }, [activePage, t]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
      const sections = buildScrollSpy();
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const firstHref = activePage === 'living' ? '#living'
                      : activePage === 'cosmetics' ? '#haircare' : '#';
      if (window.scrollY < 100) { setActiveSection(firstHref); return; }
      let current = firstHref;
      for (const s of sections) { if (scrollPos >= s.top) current = s.id; }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [buildScrollSpy, activePage]);

  const scrollTo = (href: string) => {
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else { const el = document.getElementById(href.substring(1)); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-sm py-3' : 'absolute top-[36px] bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {isSubPage && (
            <button onClick={onNavigateHome} title={t.header.backHome}
              className={`p-1.5 rounded-lg hover:bg-black/10 transition-colors ${scrolled ? 'text-[#1a2332]' : 'text-white'}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <button onClick={isSubPage ? onNavigateHome : () => scrollTo('#')} className="flex items-center gap-3">
            <img src={logo} alt="ECOCASA Logo" className="w-11 h-11 rounded-full object-cover shadow-sm" />
            <div className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#1a2332]' : 'text-white drop-shadow-md'}`}>
              ECOCASA
            </div>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          <AnimatePresence mode="wait">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={`${activePage}-${link.href}-${lang}`}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? scrolled ? 'text-[#8b6f47]' : 'text-[#d4af37] drop-shadow-md'
                      : scrolled ? 'text-[#1a2332] hover:text-[#8b6f47]' : 'text-white drop-shadow-md hover:text-[#d4af37]'
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

        {/* Right side: lang toggle + cart + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LangToggle scrolled={scrolled} />

          <button onClick={toggleCart} className="relative p-2 rounded-full hover:bg-gray-100/10 transition-colors">
            <ShoppingCart className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
                {totalItems}
              </span>
            )}
          </button>

          {isSubPage ? (
            <button
              onClick={() => { const id = activePage === 'living' ? 'living-contact' : 'cosmetics-contact'; const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.header.consult}
            </button>
          ) : (
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.header.cta}
            </button>
          )}
        </div>

        {/* Mobile: lang + cart + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <LangToggle scrolled={scrolled} />
          <button onClick={toggleCart} className="relative p-2">
            <ShoppingCart className={scrolled ? 'text-[#1a2332]' : 'text-white'} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(v => !v)} className="p-2">
            {mobileMenuOpen ? <X className={scrolled ? 'text-[#1a2332]' : 'text-white'} /> : <Menu className={scrolled ? 'text-[#1a2332]' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-1">
            {isSubPage && (
              <button onClick={() => { setMobileMenuOpen(false); onNavigateHome(); }}
                className="flex items-center gap-2 font-medium py-3 px-4 rounded-lg text-[#8b6f47] bg-gray-50 mb-2"
              >
                <ArrowLeft className="w-4 h-4" /> {t.header.backHome}
              </button>
            )}
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  className={`relative text-left font-medium py-3 px-4 rounded-lg transition-colors ${isActive ? 'text-[#8b6f47] bg-gray-50' : 'text-[#1a2332] hover:bg-gray-50'}`}
                >
                  {isActive && (
                    <motion.div layoutId="activeMobilePill" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[#d4af37] rounded-r-full" />
                  )}
                  {link.label}
                </button>
              );
            })}
            {!isSubPage && (
              <button onClick={() => scrollTo('#contact')}
                className="px-6 py-3 bg-gradient-to-r from-[#8b6f47] to-[#6b5637] text-white rounded-lg text-center mt-4 font-medium"
              >
                {t.header.cta}
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
