import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

type Category = 'all' | 'living' | 'cosmetics';

interface Article {
  id: string;
  category: 'living' | 'cosmetics';
  image: string;
  date: string;
  titleVi: string;
  titleEn: string;
  excerptVi: string;
  excerptEn: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    date: '15.04.2026',
    titleVi: 'Xu Hướng Thiết Kế Nội Thất Bền Vững 2026',
    titleEn: 'Sustainable Interior Design Trends 2026',
    excerptVi: 'Khám phá cách vật liệu tự nhiên và ánh sáng định hình không gian sống hiện đại, mang lại sự bình yên...',
    excerptEn: 'Discover how natural materials and lighting shape modern living spaces, bringing peace...',
  },
  {
    id: '2',
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    date: '12.04.2026',
    titleVi: 'Bí Quyết Chăm Sóc Tóc Phục Hồi Chuyên Sâu',
    titleEn: 'Secrets of Intensive Hair Repair Care',
    excerptVi: 'Giải pháp từ chuyên gia PantioSalon giúp phục hồi hư tổn tự nhiên, trả lại mái tóc chắc khỏe bóng mượt...',
    excerptEn: 'Solutions from PantioSalon experts to restore natural damage, bringing back strong, shiny hair...',
  },
  {
    id: '3',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    date: '08.04.2026',
    titleVi: 'Nghệ Thuật Bố Trí Ánh Sáng Trong Không Gian Sống',
    titleEn: 'The Art of Lighting Arrangement in Living Spaces',
    excerptVi: 'Ánh sáng không chỉ để thắp sáng mà còn là nghệ thuật tạo nên cảm xúc cho ngôi nhà của bạn...',
    excerptEn: 'Lighting is not just for illumination, but an art that creates emotions for your home...',
  },
];

export function NewsSection() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState<Category>('all');

  const filteredArticles = articles.filter(
    (a) => filter === 'all' || a.category === filter
  );

  return (
    <section id="news" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8b6f47]/10 text-[#8b6f47] text-sm font-semibold tracking-wide uppercase mb-6"
          >
            {t.nav.news}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-6 tracking-tight leading-tight"
          >
            {t.news.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[#1a2332]/70 text-lg md:text-xl leading-relaxed"
          >
            {t.news.subtitle}
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(['all', 'living', 'cosmetics'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#8b6f47] text-white shadow-lg'
                  : 'bg-white text-[#1a2332]/70 hover:bg-[#8b6f47]/10 hover:text-[#8b6f47] shadow-sm border border-black/5'
              }`}
            >
              {cat === 'all' && t.news.filterAll}
              {cat === 'living' && t.news.filterLiving}
              {cat === 'cosmetics' && t.news.filterCosmetics}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.article
                layout
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-black/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={lang === 'vi' ? article.titleVi : article.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#8b6f47] shadow-sm">
                      <Tag className="w-3.5 h-3.5" />
                      {article.category === 'living' ? 'Ecocasa Living' : 'Ecocasa Cosmetics'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#1a2332]/50 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a2332] mb-3 leading-snug group-hover:text-[#8b6f47] transition-colors line-clamp-2">
                    {lang === 'vi' ? article.titleVi : article.titleEn}
                  </h3>

                  <p className="text-[#1a2332]/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {lang === 'vi' ? article.excerptVi : article.excerptEn}
                  </p>

                  <div className="flex items-center gap-2 text-[#8b6f47] font-medium text-sm mt-auto group-hover:gap-3 transition-all">
                    {t.news.readMore} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
