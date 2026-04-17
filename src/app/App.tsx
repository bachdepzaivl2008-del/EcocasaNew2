import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { DivisionsSection } from './components/DivisionsSection';
import { TrustSection } from './components/TrustSection';
import { StatsTestimonials } from './components/StatsTestimonials';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import { LivingSubPage } from './components/LivingSubPage';
import { CosmeticsSubPage } from './components/CosmeticsSubPage';
import { OnboardingGuide } from './components/OnboardingGuide';
import { LanguageProvider } from './context/LanguageContext';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';

export type ActivePage = 'home' | 'living' | 'cosmetics';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  // Show guide once per page load (not persisted – reloading resets it)
  const [showGuide, setShowGuide] = useState(true);

  // On first load: disable browser scroll restoration so the page always
  // starts at top. This ensures OnboardingGuide measures hero buttons correctly.
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleBack = () => setActivePage('home');

  return (
    <LanguageProvider>
    <CartProvider>
      <SmoothScroll>
        <div className="min-h-screen bg-white noise-bg">
          <TopBar />
          <Header activePage={activePage} onNavigateHome={handleBack} />

          <AnimatePresence mode="wait">
            {activePage === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Hero
                  onOpenLiving={() => setActivePage('living')}
                  onOpenCosmetics={() => setActivePage('cosmetics')}
                />
                <BrandPhilosophy />
                <DivisionsSection
                  onOpenLiving={() => setActivePage('living')}
                  onOpenCosmetics={() => setActivePage('cosmetics')}
                />
                <TrustSection />
                <StatsTestimonials />
                <NewsSection />
              </motion.div>
            )}

            {activePage === 'living' && (
              <LivingSubPage key="living" onBack={handleBack} />
            )}

            {activePage === 'cosmetics' && (
              <CosmeticsSubPage key="cosmetics" onBack={handleBack} />
            )}
          </AnimatePresence>

          <Footer />
          <Cart />
          <Toaster position="top-center" richColors />
          {activePage === 'home' && (
            <OnboardingGuide show={showGuide} onDismiss={() => setShowGuide(false)} />
          )}
          <CustomCursor />
        </div>
      </SmoothScroll>
    </CartProvider>
    </LanguageProvider>
  );
}
