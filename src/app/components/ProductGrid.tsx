import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import arganOilImg from '../../assets/argan-oil.jpg';
import shampooImg from '../../assets/shampoo.png';

export function ProductGrid() {
  const { addToCart } = useCart();
  const products = [
    {
      id: 'prod_1',
      image: shampooImg,
      name: 'Shampoo Phục Hồi',
      description: 'Làm sạch sâu, phục hồi tóc hư tổn',
      price: '450.000đ',
      badge: 'Bán chạy',
    },
    {
      id: 'prod_2',
      image: 'https://images.unsplash.com/photo-1608623676098-c52439068319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzaGFtcG9vJTIwY29uZGl0aW9uZXJ8ZW58MXx8fHwxNzc0MzI2MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Dầu Xả Dưỡng Ẩm',
      description: 'Nuôi dưỡng tóc mềm mượt tự nhiên',
      price: '420.000đ',
    },
    {
      id: 'prod_3',
      image: arganOilImg,
      name: 'Tinh Dầu Dưỡng Tóc',
      description: 'Dưỡng ẩm, ngăn ngừa gãy rụng',
      price: '380.000đ',
      badge: 'Mới',
    },
    {
      id: 'prod_4',
      image: 'https://images.unsplash.com/photo-1758788390320-16e1f280cf49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbWFzayUyMHRyZWF0bWVudCUyMGphcnxlbnwxfHx8fDE3NzQzMjYwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Mặt Nạ Tóc Cao Cấp',
      description: 'Phục hồi chuyên sâu cho tóc khô',
      price: '520.000đ',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4">
            Bộ sưu tập sản phẩm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Giải pháp chăm sóc tóc toàn diện từ chuyên gia
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#4FD1C5]/10 to-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-white text-xs font-medium rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1a2332] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#4FD1C5]">
                    {product.price}
                  </span>
                </div>

                <button 
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  })}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="font-medium text-sm">Thêm vào giỏ</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
