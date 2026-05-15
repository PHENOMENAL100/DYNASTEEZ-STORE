// import React from 'react';
// import { ShoppingBag, TvMinimalPlay } from 'lucide-react';
// import fashionVideo from '../assets/videos/fashion.mp4';

// const Hero = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
//       <video
//         src={fashionVideo}       
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />
      
//       {/* Buttons container */}
//       <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
//         <button className="flex items-center gap-2 bg-black text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
//           <ShoppingBag className="w-4 h-4" />
//           Shop Now
//         </button>
        
//         <button className="flex items-center gap-2 bg-white text-black px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
//           <TvMinimalPlay className="w-4 h-4" />
//           Watch Video
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { ShoppingBag, Play } from 'lucide-react';
import fashionVideo from '../assets/videos/fashion.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <video
        src={fashionVideo}       
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Buttons container - positioned lower like Figma */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button className="flex items-center gap-2 bg-black text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          <ShoppingBag className="w-4 h-4" />
          Shop Now
        </button>

        <button className="flex items-center gap-2 bg-white text-black px-10 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
          <Play className="w-4 h-4" />
          Watch Video
        </button>
      </div>
    </section>
  );
};

export default Hero;