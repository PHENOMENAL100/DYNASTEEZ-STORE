import React from 'react';
import placeholderKids2 from '../assets/images/placeholder-kids-2.jpg';
import placeholderKids3 from '../assets/images/placeholder-kids-3.jpg';

const KidsCollection = () => {
  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant typographic heading matching Figma */}
        <div className="relative mb-8">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-black/5 select-none">
            NEW ARRIVALS
          </h2>
          <h2 className="absolute top-1/2 left-0 -translate-y-1/2 text-2xl md:text-3xl font-semibold tracking-wide">
            NEW
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
            onClick={() => console.log('Kids collection clicked')}
          >
            <img 
              src={placeholderKids2}
              alt="New Arrival For Kids"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm tracking-wider mb-1">New Arrival For Kids</p>
              <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
                DISCOVER MORE
              </button>
            </div>
          </div>

          <div 
            className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
            onClick={() => console.log('Kids collection clicked')}
          >
            <img 
              src={placeholderKids3}
              alt="New Arrival For Kids"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm tracking-wider mb-1">New Arrival For Kids</p>
              <button className="text-xs font-medium underline hover:no-underline tracking-widest uppercase">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsCollection;