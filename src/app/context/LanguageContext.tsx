import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'vi' | 'en';

const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      ecosystem: 'Hệ sinh thái',
      whyEcocasa: 'Why Ecocasa',
      reviews: 'Đánh Giá',
      news: 'Tin tức',
      livingIntro: 'Giới thiệu',
      livingProcess: 'Quy trình',
      livingProjects: 'Dự án',
      livingConsult: 'Tư vấn',
      cosmeticsIntro: 'Giới thiệu',
      cosmeticsCollection: 'Bộ sưu tập',
      cosmeticsConsult: 'Tư vấn',
    },
    header: {
      cta: 'Nhận tư vấn',
      consult: 'Tư vấn',
      backHome: 'Quay lại trang chủ',
    },
    hero: {
      badge: 'Premium Lifestyle Ecosystem',
      title1: 'Thiết kế đậm chất',
      title2: 'Cuộc sống an lành',
      subtitle: 'Từ không gian sống tinh tế đến chăm sóc cá nhân chỉn chu, ECOCASA kiến tạo trải nghiệm sống hài hòa cho cuộc sống hiện đại.',
      btn1: 'Khám phá EcoCasa Living',
      btn2: 'Dịch vụ PantioSalon',
      stat1: 'Hơn 200+ dự án',
      stat2: '1000+ khách hàng',
      stat3: 'Đánh giá 4.9/5.0',
    },
    brand: {
      title: 'Triết lý thương hiệu',
      subtitle: 'ECOCASA tin rằng cuộc sống an lành bắt đầu từ không gian sống được thiết kế đúng đắn và sự chăm sóc bản thân chu đáo. Chúng tôi kết nối hai thế giới này thành một hệ sinh thái cao cấp, mang đến trải nghiệm sống trọn vẹn cho bạn và gia đình.',
      value1Title: 'Thiết kế bền vững',
      value1Desc: 'Mỗi không gian đều được kiến tạo với tầm nhìn dài hạn, kết hợp thẩm mỹ và công năng hoàn hảo.',
      value2Title: 'Chất lượng tinh túy',
      value2Desc: 'Từ vật liệu xây dựng đến sản phẩm chăm sóc, chúng tôi chỉ lựa chọn những gì tốt nhất.',
      value3Title: 'Trải nghiệm toàn diện',
      value3Desc: 'Không chỉ là không gian và sản phẩm, mà là tổ sống an lành, tinh tế cho mọi gia đình.',
    },
    ecosystem: {
      title: 'Hệ sinh thái ECOCASA',
      subtitle: 'Hai lĩnh vực chuyên nghiệp, một tầm nhìn chung về cuộc sống tinh tế',
      living: {
        features: ['Thiết kế nội thất cao cấp', 'Thi công chuyên nghiệp', 'Tư vấn không gian sống', 'Bảo hành toàn diện'],
        desc: 'Không gian sống được thiết kế theo phong cách riêng, phản ánh cá tính và lối sống của từng gia đình.',
        btn: 'Tìm hiểu thêm',
      },
      cosmetics: {
        features: ['Chăm sóc tóc chuyên nghiệp', 'Sản phẩm cao cấp', 'Đội ngũ chuyên gia', 'Trải nghiệm thư giãn'],
        desc: 'Dịch vụ chăm sóc tóc đẳng cấp với sản phẩm cao cấp và đội ngũ chuyên gia giàu kinh nghiệm.',
        btn: 'Khám phá sản phẩm',
      },
    },
    trust: {
      title: 'Tại sao chọn ECOCASA?',
      subtitle: 'Chúng tôi tự hào mang đến trải nghiệm tốt nhất cho khách hàng',
      scrollHint: '↓ Lướt để xem thêm',
      items: [
        { title: 'Chuyên nghiệp đẳng cấp', description: 'Đội ngũ Kiến trúc sư, QC hoạt động chuyên nghiệp với hàng chục năm kinh nghiệm, đã từng thiết kế và tổ chức thi công hàng trăm dự án lớn nhỏ khác nhau ở Đà nẵng và các tỉnh thành khu vực phía Bắc.' },
        { title: 'Đồng hành tận tâm', description: 'Tư vấn miễn phí, hỗ trợ 24/7 trong suốt quá trình triển khai. Báo cáo thi công hàng ngày thông qua hình ảnh và video. Khách hàng luôn là trung tâm trong mọi quyết định của chúng tôi.' },
        { title: 'Cam kết chất lượng, tiến độ, giá thành', description: 'Giá trị nhận được tương xứng với giá trị đầu tư, hoàn thành đúng hạn cam kết, minh bạch từng giai đoạn. Mọi vật liệu, phụ kiện đều minh bạch về nguồn gốc xuất xứ.' },
        { title: 'Bảo hành dài hạn', description: 'Chế độ bảo hành toàn diện, hỗ trợ sau bán hàng chuyên nghiệp. Mọi sản phẩm đều đi kèm cam kết chất lượng rõ ràng.' },
        { title: 'Sáng tạo không giới hạn', description: 'Thiết kế độc quyền, chuẩn phong thuỷ ứng dụng, mang lại sự thịnh vượng cho gia chủ, phù hợp với cá tính và phong cách sống của từng gia đình. Cam kết không dùng template có sẵn.' },
        { title: 'Giá trị bền vững', description: 'Sản phẩm và dịch vụ thân thiện với môi trường, an toàn cho sức khoẻ, hướng tới một không gian sống xanh, sạch, đầy đủ các công năng cần thiết cho khách hàng.' },
      ],
    },
    stats: {
      title: 'Khách hàng nói gì về chúng tôi',
      subtitle: 'Hàng ngàn khách hàng đã tin tưởng và hài lòng với dịch vụ của ECOCASA',
      items: [
        { value: '200+', label: 'Dự án hoàn thành' },
        { value: '1000+', label: 'Khách hàng hài lòng' },
        { value: '10+', label: 'Năm kinh nghiệm' },
        { value: '4.9/5', label: 'Đánh giá trung bình' },
      ],
    },
    onboarding: {
      living: { title: 'EcoCasa Living', desc: 'Thiết kế & thi công nội thất cao cấp – nhấn để khám phá!' },
      cosmetics: { title: 'PantioSalon', desc: 'Chăm sóc tóc chuyên nghiệp cao cấp – nhấn để khám phá!' },
      hint: 'Nhấn vào bất kỳ đâu để bắt đầu',
    },
    news: {
      title: 'Tin tức & Trải nghiệm',
      subtitle: 'Cập nhật những xu hướng kiến trúc, làm đẹp và câu chuyện từ ECOCASA',
      filterAll: 'Tất cả',
      filterLiving: 'Ecocasa Living',
      filterCosmetics: 'Ecocasa Cosmetics',
      readMore: 'Chi tiết',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      ecosystem: 'Ecosystem',
      whyEcocasa: 'Why Ecocasa',
      reviews: 'Reviews',
      news: 'News',
      livingIntro: 'Overview',
      livingProcess: 'Process',
      livingProjects: 'Projects',
      livingConsult: 'Consult',
      cosmeticsIntro: 'Overview',
      cosmeticsCollection: 'Collection',
      cosmeticsConsult: 'Consult',
    },
    header: {
      cta: 'Get Consultation',
      consult: 'Consult',
      backHome: 'Back to Home',
    },
    hero: {
      badge: 'Premium Lifestyle Ecosystem',
      title1: 'Design with Character',
      title2: 'Live in Harmony',
      subtitle: 'From refined living spaces to meticulous personal care, ECOCASA crafts a harmonious lifestyle experience for modern living.',
      btn1: 'Explore EcoCasa Living',
      btn2: 'PantioSalon Services',
      stat1: '200+ Projects',
      stat2: '1000+ Clients',
      stat3: 'Rated 4.9/5.0',
    },
    brand: {
      title: 'Brand Philosophy',
      subtitle: 'ECOCASA believes that a serene life begins with a thoughtfully designed space and attentive personal care. We unite these two worlds into a premium ecosystem, delivering a complete living experience for you and your family.',
      value1Title: 'Sustainable Design',
      value1Desc: 'Every space is crafted with a long-term vision, perfectly balancing aesthetics and functionality.',
      value2Title: 'Pure Quality',
      value2Desc: 'From building materials to personal care products, we select only the finest.',
      value3Title: 'Complete Experience',
      value3Desc: 'Not just spaces and products — a serene, refined lifestyle for every family.',
    },
    ecosystem: {
      title: 'The ECOCASA Ecosystem',
      subtitle: 'Two professional domains, one shared vision of refined living',
      living: {
        features: ['Premium Interior Design', 'Professional Construction', 'Living Space Consulting', 'Comprehensive Warranty'],
        desc: 'Living spaces designed to reflect each family\'s unique personality and lifestyle.',
        btn: 'Learn More',
      },
      cosmetics: {
        features: ['Professional Hair Care', 'Premium Products', 'Expert Team', 'Relaxation Experience'],
        desc: 'World-class hair care services with premium products and an experienced team of specialists.',
        btn: 'Explore Products',
      },
    },
    trust: {
      title: 'Why Choose ECOCASA?',
      subtitle: 'We are proud to deliver the best experience to our clients',
      scrollHint: '↓ Scroll to explore',
      items: [
        { title: 'World-Class Expertise', description: 'A team of leading architects and specialists with over 10 years of experience, completing more than 200 projects nationwide.' },
        { title: 'Dedicated Partnership', description: 'Free consultation, 24/7 support throughout the entire process. Our clients are always at the heart of every decision.' },
        { title: 'On-Time Delivery', description: 'Completed on schedule, with full transparency through every phase. We understand your time is invaluable.' },
        { title: 'Long-Term Warranty', description: 'Comprehensive warranty program and professional after-sales support. Every product comes with a clear quality commitment.' },
        { title: 'Unlimited Creativity', description: 'Exclusive designs tailored to each family\'s personality and lifestyle. We never use pre-made templates.' },
        { title: 'Lasting Value', description: 'Eco-friendly, health-safe products and services. We build green living spaces for future generations.' },
      ],
    },
    stats: {
      title: 'What Our Clients Say',
      subtitle: 'Thousands of clients have trusted and been delighted by ECOCASA services',
      items: [
        { value: '200+', label: 'Completed Projects' },
        { value: '1000+', label: 'Happy Clients' },
        { value: '10+', label: 'Years of Experience' },
        { value: '4.9/5', label: 'Average Rating' },
      ],
    },
    onboarding: {
      living: { title: 'EcoCasa Living', desc: 'Premium interior design & construction – tap to explore!' },
      cosmetics: { title: 'PantioSalon', desc: 'Professional premium hair care – tap to explore!' },
      hint: 'Tap anywhere to get started',
    },
    news: {
      title: 'News & Experience',
      subtitle: 'Updates on architecture, beauty trends, and stories from ECOCASA',
      filterAll: 'All',
      filterLiving: 'Ecocasa Living',
      filterCosmetics: 'Ecocasa Cosmetics',
      readMore: 'Read more',
    },
  },
} as const;

export type Translations = typeof translations.vi;

interface LangCtx {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('vi');
  const t = translations[lang] as Translations;
  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
