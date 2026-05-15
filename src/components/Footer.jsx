import React from 'react';
import footerLogo from '../assets/images/dynasteez-logo-2.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Newsletter - overlapping card */}
      <div className="relative -top-10 mx-auto max-w-2xl px-4 z-10">
        <div className="bg-white rounded-2xl p-1.5 flex items-center shadow-xl">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 bg-transparent px-5 py-3 text-black text-sm focus:outline-none placeholder:text-gray-400"
          />
          <button className="m-1 bg-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 pb-10 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <img 
                src={footerLogo} 
                alt="Dynasteez" 
                className="h-16 w-auto mb-5 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-[260px]">
                Dynasteez is a modern fashion brand focused on delivering stylish, high-quality clothing designed for everyday confidence.
              </p>
              <a 
                href="#" 
                className="text-gray-400 text-sm hover:text-white transition-colors mt-3 inline-block cursor-pointer"
              >
                Read More
              </a>
            </div>

            {/* Discover Column */}
            <div>
              <h4 className="text-sm font-medium mb-5 text-white">Discover</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Help & Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-sm font-medium mb-5 text-white">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h4 className="text-sm font-medium mb-5 text-white">Socials</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mx-4">
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyrights ©2026 All right reserved
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;