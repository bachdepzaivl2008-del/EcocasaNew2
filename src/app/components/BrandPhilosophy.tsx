import { motion } from 'motion/react';
import { Home, Sparkles, Heart } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const icons = [Home, Sparkles, Heart];

export function BrandPhilosophy() {
  const { t } = useLang();

  const values = [
    { icon: icons[0], title: t.brand.value1Title, description: t.brand.value1Desc },
    { icon: icons[1], title: t.brand.value2Title, description: t.brand.value2Desc },
    { icon: icons[2], title: t.brand.value3Title, description: t.brand.value3Desc },
  ];

  return (
    <section id="about" className="py-16 md:py-[8.75rem] bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332] mb-4 md:mb-6">
            {t.brand.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.brand.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#8b6f47] to-[#6b5637] rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
