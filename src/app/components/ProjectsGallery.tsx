import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ProjectsGallery() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWluaW1hbGlzdCUyMGJlZHJvb20lMjBkZXNpZ258ZW58MXx8fHwxNzc0MzI2MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Villa Phú Mỹ Hưng',
      category: 'Biệt thự',
      area: '450m²',
    },
    {
      image: 'https://images.unsplash.com/photo-1572742482459-e04d6cfdd6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3NDIxMTc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Penthouse Vinhomes',
      category: 'Căn hộ cao cấp',
      area: '220m²',
    },
    {
      image: 'https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0MzI2MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Văn phòng Tech Hub',
      category: 'Thương mại',
      area: '800m²',
    },
    {
      image: 'https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDI2MzEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Nhà phố Thảo Điền',
      category: 'Nhà phố',
      area: '180m²',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Dự án tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những không gian sống đẳng cấp mà chúng tôi đã tạo nên
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm text-white/80 mb-2">{project.category} • {project.area}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-sm">Xem chi tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#8b6f47] text-[#8b6f47] rounded-lg hover:bg-[#8b6f47] hover:text-white transition-all duration-200"
          >
            <span className="font-medium">Xem tất cả dự án</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
