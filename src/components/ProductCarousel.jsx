import placeholderHoodie from '../assets/images/placeholder-hoodie.jpg'
import placeholderShirt from '../assets/images/placeholder-shirt.jpg'
import placeholderPolo from '../assets/images/placeholder-polo.jpg'
import placeholderJoggers from '../assets/images/placeholder-joggers.jpg'
import placeholderKids from '../assets/images/placeholder-kids.jpg'
import placeholderSleeves from '../assets/images/placeholder-sleeves.jpg'
import placeholderJerseys from '../assets/images/placeholder-jerseys.jpg'
import placeholderCaps from '../assets/images/placeholder-caps.jpg'

const ProductCarousel = () => {
  const products = [
    { image: placeholderHoodie, title: 'Dynasteez Hoodie', price: '50,000' },
    { image: placeholderShirt, title: 'Dynasteez Shirt', price: '40,000' },
    { image: placeholderPolo, title: 'Dynasteez Polo', price: '25,000' },
    { image: placeholderJoggers, title: 'Dynasteez Joggers', price: '40,000' },
    { image: placeholderKids, title: 'Dynasteez Kids', price: '40,000' },
    { image: placeholderSleeves, title: 'Dynasteez LongSleeves', price: '30,000' },
    { image: placeholderJerseys, title: 'Dynasteez Jerseys', price: '30,000' },
    { image: placeholderCaps, title: 'Dynasteez Cap', price: '30,000' },
  ];

  // Duplicate for infinite scroll
  const allProducts = [...products, ...products];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Our Prices</h2>

        <div className="overflow-hidden relative">
          <div 
            className="flex gap-6"
            style={{
              animation: 'scroll 20s linear infinite',
            }}
          >
            {allProducts.map((product, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex-grow basis-[250px] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-gray-100 aspect-[3/4] mb-3 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-sm">{product.title}</h3>
                <p className="text-gray-600 text-sm">₦{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;