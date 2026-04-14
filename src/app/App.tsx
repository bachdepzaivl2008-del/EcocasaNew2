import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { DivisionsSection } from './components/DivisionsSection';
import { InteriorFeature } from './components/InteriorFeature';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ProjectsGallery } from './components/ProjectsGallery';
import { TransitionCopy } from './components/TransitionCopy';
import { HaircareFeature } from './components/HaircareFeature';
import { ProductGrid } from './components/ProductGrid';
import { TrustSection } from './components/TrustSection';
import { StatsTestimonials } from './components/StatsTestimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <TopBar />
      <Header />
      <Hero />
      <BrandPhilosophy />
      <DivisionsSection />
      <InteriorFeature />
      <ProcessTimeline />
      <ProjectsGallery />
      <TransitionCopy />
      <HaircareFeature />
      <ProductGrid />
      <TrustSection />
      <StatsTestimonials />
      <FinalCTA />
      <Footer />
      <Cart />
      <Toaster position="top-center" richColors />
    </div>
    </CartProvider>
  );
}
