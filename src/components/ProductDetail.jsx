import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById } from '../data/products';

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  const productId = product?.productId || 1;
  const currentProduct = getProductById(productId) || getProductById(1);

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isFav, setIsFav] = useState(false);

  const currentColor = currentProduct.colors[selectedColorIdx];
  
  // Image order: model (0), back (1), detail (2), front (3) — front is LAST
  const currentImages = currentColor.images;

  const relatedProducts = [
    { id: 101, image: getProductById(1)?.colors[0]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 102, image: getProductById(1)?.colors[1]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 103, image: getProductById(2)?.colors[0]?.images[0], title: 'Dynasteez Hoodie', price: '50,000' },
    { id: 104, image: getProductById(2)?.colors[1]?.images[0], title: 'Dynasteez Hoodie', price: '50,000' },
    { id: 105, image: getProductById(1)?.colors[2]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 106, image: getProductById(1)?.colors[3]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 107, image: getProductById(1)?.colors[4]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 108, image: getProductById(1)?.colors[0]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 109, image: getProductById(2)?.colors[0]?.images[0], title: 'Dynasteez Hoodie', price: '50,000' },
    { id: 110, image: getProductById(2)?.colors[1]?.images[0], title: 'Dynasteez Hoodie', price: '50,000' },
    { id: 111, image: getProductById(1)?.colors[1]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
    { id: 112, image: getProductById(1)?.colors[0]?.images[0], title: 'Dynasteez T-shirt', price: '20,000' },
  ];

  const handlePrevImage = () => {
    setSelectedImageIdx((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIdx((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-6 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
              <img 
                src={currentImages[selectedImageIdx]} 
                alt={currentProduct.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setIsFav(!isFav)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    isFav ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'
                  }`} 
                />
              </button>
              <button 
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {currentImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`relative flex-shrink-0 w-20 h-24 overflow-hidden transition-all cursor-pointer ${
                    selectedImageIdx === idx ? 'ring-2 ring-black' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedImageIdx === idx && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">{currentProduct.title}</h1>
              <p className="text-xl font-medium text-gray-900 mt-2">₦ {currentProduct.price}</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{currentProduct.description}</p>

            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">Available Colors;</p>
              <div className="flex gap-3">
                {currentProduct.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedColorIdx(idx); setSelectedImageIdx(0); }}
                    className={`w-8 h-8 rounded border-2 transition-all cursor-pointer ${
                      selectedColorIdx === idx 
                        ? 'border-black ring-2 ring-black ring-offset-2' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 mb-3">Available Sizes;</p>
              <div className="flex gap-3">
                {currentProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-start">
              <button
                onClick={() => onAddToCart?.({ ...currentProduct, selectedColor: currentColor.name, selectedSize })}
                className="px-12 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">You may also be interested in</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => console.log('Related product clicked:', item.id)}
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button 
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Wishlist:', item.id);
                    }}
                  >
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-400" />
                  </button>
                </div>
                <h3 className="text-sm text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-900 font-medium">₦ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;