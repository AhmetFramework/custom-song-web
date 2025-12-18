import Image from 'next/image';

const products = [
  {
    id: 1,
    name: '🎵 Kişiye Özel Şarkı – Duygularınızı Nota Nota Yaşayın',
    price: '585.00TL',
    originalPrice: '925.00TL',
    image: '/product-1.png',
  },
  {
    id: 2,
    name: '🎵 İşletmene Özel Şarkı',
    price: '625.00TL',
    originalPrice: '999.00TL',
    image: '/product-2.png',
  },
  {
    id: 3,
    name: '🎵 Düğüne Özel Şarkı',
    price: '585.00TL',
    originalPrice: '925.00TL',
    image: '/product-3.png',
  },
  {
    id: 4,
    name: 'Sevgililere Özel Web Sitesi',
    price: '525.00TL',
    image: '/product-4.png',
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-white py-12 px-6 dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">En Son Eklenenler</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="mt-2">
                  <span className="text-xl font-bold text-rose-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
