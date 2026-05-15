// ============================================
// T-SHIRT: WHITE
// ============================================
import tshirtWhiteModel from '../assets/images/products/tshirt/white/model.jpg';
import tshirtWhiteBack from '../assets/images/products/tshirt/white/back.jpg';
import tshirtWhiteDetail from '../assets/images/products/tshirt/white/detail.jpg';
import tshirtWhiteFront from '../assets/images/products/tshirt/white/front.jpg';

// ============================================
// T-SHIRT: BLACK
// ============================================
import tshirtBlackModel from '../assets/images/products/tshirt/black/model.jpg';
import tshirtBlackBack from '../assets/images/products/tshirt/black/back.jpg';
import tshirtBlackDetail from '../assets/images/products/tshirt/black/detail.jpg';
import tshirtBlackFront from '../assets/images/products/tshirt/black/front.jpg';

// ============================================
// T-SHIRT: PINK
// ============================================
import tshirtPinkModel from '../assets/images/products/tshirt/pink/model.jpg';
import tshirtPinkBack from '../assets/images/products/tshirt/pink/back.jpg';
import tshirtPinkDetail from '../assets/images/products/tshirt/pink/detail.jpg';
import tshirtPinkFront from '../assets/images/products/tshirt/pink/front.jpg';

// ============================================
// T-SHIRT: BLUE
// ============================================
import tshirtBlueModel from '../assets/images/products/tshirt/blue/model.jpg';
import tshirtBlueBack from '../assets/images/products/tshirt/blue/back.jpg';
import tshirtBlueDetail from '../assets/images/products/tshirt/blue/detail.jpg';
import tshirtBlueFront from '../assets/images/products/tshirt/blue/front.jpg';

// ============================================
// T-SHIRT: RED
// ============================================
import tshirtRedModel from '../assets/images/products/tshirt/red/model.jpg';
import tshirtRedBack from '../assets/images/products/tshirt/red/back.jpg';
import tshirtRedDetail from '../assets/images/products/tshirt/red/detail.jpg';
import tshirtRedFront from '../assets/images/products/tshirt/red/front.jpg';

// ============================================
// HOODIE: WHITE
// ============================================
import hoodieWhiteModel from '../assets/images/products/hoodie/white/model.jpg';
import hoodieWhiteBack from '../assets/images/products/hoodie/white/back.jpg';
import hoodieWhiteDetail from '../assets/images/products/hoodie/white/detail.jpg';
import hoodieWhiteFront from '../assets/images/products/hoodie/white/front.jpg';

// ============================================
// HOODIE: BLACK
// ============================================
import hoodieBlackModel from '../assets/images/products/hoodie/black/model.jpg';
import hoodieBlackBack from '../assets/images/products/hoodie/black/back.jpg';
import hoodieBlackDetail from '../assets/images/products/hoodie/black/detail.jpg';
import hoodieBlackFront from '../assets/images/products/hoodie/black/front.jpg';

// ============================================
// PRODUCT DEFINITIONS
// ============================================

export const products = [
  {
    id: 1,
    slug: 'dynasteez-tshirt',
    title: 'Dynasteez T-shirt',
    price: '20,000',
    description: 'A relaxed-fit light-grey T-shirt with a round neckline and short sleeves. Features a bold "Dynasteez" logo with a crown graphic at the chest, finished in a clean, minimal streetwear style.',
    colors: [
      {
        name: 'White',
        hex: '#E5E5E5',
        // Order: model (1st), back, detail, front (LAST)
        images: [tshirtWhiteModel, tshirtWhiteBack, tshirtWhiteDetail, tshirtWhiteFront]
      },
      {
        name: 'Black',
        hex: '#1A1A1A',
        images: [tshirtBlackModel, tshirtBlackBack, tshirtBlackDetail, tshirtBlackFront]
      },
      {
        name: 'Pink',
        hex: '#F4A4B4',
        images: [tshirtPinkModel, tshirtPinkBack, tshirtPinkDetail, tshirtPinkFront]
      },
      {
        name: 'Blue',
        hex: '#4A90D9',
        images: [tshirtBlueModel, tshirtBlueBack, tshirtBlueDetail, tshirtBlueFront]
      },
      {
        name: 'Red',
        hex: '#E53935',
        images: [tshirtRedModel, tshirtRedBack, tshirtRedDetail, tshirtRedFront]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    slug: 'dynasteez-hoodie',
    title: 'Dynasteez Hoodie',
    price: '50,000',
    description: 'Premium cotton hoodie with embroidered Dynasteez crown logo. Relaxed fit with kangaroo pocket and ribbed cuffs. Perfect for layering in any season.',
    colors: [
      {
        name: 'White',
        hex: '#E5E5E5',
        // Order: model (1st), back, detail, front (LAST)
        images: [hoodieWhiteModel, hoodieWhiteBack, hoodieWhiteDetail, hoodieWhiteFront]
      },
      {
        name: 'Black',
        hex: '#1A1A1A',
        images: [hoodieBlackModel, hoodieBlackBack, hoodieBlackDetail, hoodieBlackFront]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);