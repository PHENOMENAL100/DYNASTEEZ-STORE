import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductDetail from './ProductDetail';
import fashionVideo from '../assets/videos/fashion.mp4';
import placeholderDetail2 from '../assets/images/placeholder-detail-2.jpg';
import hoodieWhiteFront from '../assets/images/products/hoodie/white/front.jpg';
import hoodieWhiteBack from '../assets/images/products/hoodie/white/back.jpg';  // ← back image
import tshirtWhiteBack from '../assets/images/products/tshirt/white/back.jpg';   // ← back image
import placeholderModel1 from '../assets/images/placeholder-model-1.jpg';
import placeholderModel2 from '../assets/images/placeholder-model-2.jpg';
import placeholderModel3 from '../assets/images/placeholder-model-3.jpg';
import placeholderModel4 from '../assets/images/placeholder-model-4.jpg';
import placeholderModel5 from '../assets/images/placeholder-model-5.jpg';
import placeholderDetail1 from '../assets/images/placeholder-detail-1.jpg';
import placeholderHoodie from '../assets/images/placeholder-hoodie.jpg';
import placeholderShirt from '../assets/images/placeholder-shirt.jpg';
import placeholderSleeves from '../assets/images/placeholder-sleeves.jpg';
import placeholderJerseys from '../assets/images/placeholder-jerseys.jpg';
import placeholderPolo from '../assets/images/placeholder-polo.jpg';
import placeholderCaps from '../assets/images/placeholder-caps.jpg';
import placeholderJoggers from '../assets/images/placeholder-joggers.jpg';
import placeholderKids from '../assets/images/placeholder-kids.jpg';
import placeholderKids2 from '../assets/images/placeholder-kids-2.jpg';
import placeholderKids3 from '../assets/images/placeholder-kids-3.jpg';

const AuthenticatedHome = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 16;

  const handleShopClick = (category) => {
    console.log('Navigate to:', category);
  };

  const toggleFavorite = (productId, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(productId)) {
        newFavs.delete(productId);
      } else {
        newFavs.add(productId);
      }
      return newFavs;
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct({ productId: product.productId || product.id });
    window.scrollTo(0, 0);
  };

  const handleBackFromDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (productWithOptions) => {
    console.log('Added to cart:', productWithOptions);
    alert(`Added ${productWithOptions.title} (${productWithOptions.selectedColor}, ${productWithOptions.selectedSize}) to cart!`);
  };

  const allProducts = [
    { 
      id: 1, 
      productId: 1,
      image: placeholderDetail2,
      hoverImage: tshirtWhiteBack,  // ← shows on hover
      title: 'Dynasteez T-shirt', 
      price: '20,000' 
    },
    { 
      id: 2, 
      productId: 2,
      image: hoodieWhiteFront,
      hoverImage: hoodieWhiteBack,  // ← shows on hover
      title: 'Dynasteez Hoodie', 
      price: '50,000' 
    },
    { id: 3, image: placeholderModel4, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 4, image: placeholderModel1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 5, image: placeholderHoodie, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 6, image: placeholderModel3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 7, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 8, image: placeholderSleeves, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 9, image: placeholderJerseys, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 10, image: placeholderPolo, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 11, image: placeholderCaps, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 12, image: placeholderJoggers, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 13, image: placeholderKids, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 14, image: placeholderKids2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 15, image: placeholderKids3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 16, image: placeholderDetail1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 17, image: placeholderDetail2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 18, image: placeholderModel5, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 19, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 20, image: placeholderModel2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 21, image: placeholderModel4, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 22, image: placeholderModel1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 23, image: placeholderHoodie, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 24, image: placeholderModel3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 25, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 26, image: placeholderSleeves, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 27, image: placeholderJerseys, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 28, image: placeholderPolo, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 29, image: placeholderCaps, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 30, image: placeholderJoggers, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 31, image: placeholderKids, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 32, image: placeholderKids2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 33, image: placeholderKids3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 34, image: placeholderDetail1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 35, image: placeholderDetail2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 36, image: placeholderModel5, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 37, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 38, image: placeholderModel2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 39, image: placeholderModel4, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 40, image: placeholderModel1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 41, image: placeholderHoodie, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 42, image: placeholderModel3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 43, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 44, image: placeholderSleeves, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 45, image: placeholderJerseys, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 46, image: placeholderPolo, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 47, image: placeholderCaps, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 48, image: placeholderJoggers, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 49, image: placeholderKids, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 50, image: placeholderKids2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 51, image: placeholderKids3, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 52, image: placeholderDetail1, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 53, image: placeholderDetail2, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 54, image: placeholderModel5, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 55, image: placeholderShirt, title: 'Dynasteez Shirt', price: '60,000' },
    { id: 56, image: placeholderModel2, title: 'Dynasteez Shirt', price: '60,000' },
  ];

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  if (selectedProduct) {
    return (
      <ProductDetail 
        product={selectedProduct}
        onBack={handleBackFromDetail}
        onAddToCart={handleAddToCart}
      />
    );
  }

  const EditorialView = () => (
    <>
      <section 
        className="relative w-full h-screen overflow-hidden group cursor-pointer"
        onClick={() => handleShopClick('men')}
      >
        <video
          src={fashionVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-6 right-8 flex gap-3 z-10">
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentSlide(1); }}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
              currentSlide === 1 ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            1
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setCurrentSlide(2); }}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
              currentSlide === 2 ? 'bg-white text-black' : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            2
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('women')}
        >
          <img 
            src={placeholderModel3} 
            alt="Dynasteez Hoodie" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Hoodie</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Women
            </button>
          </div>
        </div>

        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('men')}
        >
          <img 
            src={placeholderDetail1} 
            alt="Galaxy Hoodie" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Hoodie</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Men
            </button>
          </div>
        </div>
      </section>

      <section 
        className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group"
        onClick={() => handleShopClick('men')}
      >
        <img 
          src={placeholderShirt} 
          alt="Dynasteez Pink T-Shirt" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Tees</p>
          <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
            Shop Men
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('women')}
        >
          <img 
            src={placeholderModel4} 
            alt="Dynasteez T-Shirt" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez T-Shirt</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Women
            </button>
          </div>
        </div>

        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('women')}
        >
          <img 
            src={placeholderSleeves} 
            alt="Dynasteez Crop Top" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Crop Top</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Women
            </button>
          </div>
        </div>
      </section>

      <section 
        className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer group"
        onClick={() => handleShopClick('men')}
      >
        <img 
          src={placeholderJerseys} 
          alt="Dynasteez 77 Jersey" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Jersey</p>
          <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
            Shop Men
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('women')}
        >
          <img 
            src={placeholderModel5} 
            alt="Dynasteez Tank Top" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Tank Top</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Women
            </button>
          </div>
        </div>

        <div 
          className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
          onClick={() => handleShopClick('women')}
        >
          <img 
            src={placeholderModel2} 
            alt="Dynasteez Tank Top" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-wider mb-2 font-medium">Dynasteez Tank Top</p>
            <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
              Shop Women
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const ProductGridView = () => (
    <section className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-end mb-8">
          <div className="flex gap-3">
            <button 
              onClick={() => setCurrentSlide(1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                currentSlide === 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              1
            </button>
            <button 
              onClick={() => setCurrentSlide(2)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                currentSlide === 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              2
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => {
            const isFav = favorites.has(product.id);
            const hasHover = !!product.hoverImage;
            
            return (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-2">
                  {/* Default image */}
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${hasHover ? 'group-hover:opacity-0' : ''}`}
                  />
                  
                  {/* Hover image (back view) — only for items with hoverImage */}
                  {hasHover && (
                    <img 
                      src={product.hoverImage} 
                      alt={`${product.title} - Back`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                  
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all cursor-pointer z-10"
                    onClick={(e) => toggleFavorite(product.id, e)}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'
                      }`} 
                    />
                  </button>
                </div>
                <div className="px-1">
                  <h3 className="text-sm text-gray-900">{product.title}</h3>
                  <p className="text-sm text-gray-900 font-medium">₦ {product.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors cursor-pointer ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {currentSlide === 1 ? <EditorialView /> : <ProductGridView />}
    </div>
  );
};

export default AuthenticatedHome;