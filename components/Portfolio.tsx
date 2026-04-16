import React, { useState, useEffect } from 'react';
import type { PortfolioItem } from '../types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolioData: PortfolioItem[] = [
    { id: 1, title: 'PORTFOLIO', category: '', imageUrl: '1.png' },
    { id: 2, title: 'PORTFOLIO', category: '', imageUrl: '2.png' },
    { id: 3, title: 'PORTFOLIO', category: '', imageUrl: '3.png' },
    { id: 4, title: 'PORTFOLIO', category: '', imageUrl: '4.png' },
    { id: 5, title: 'PORTFOLIO', category: '', imageUrl: '5.png' },
    { id: 6, title: 'PORTFOLIO', category: '', imageUrl: '6.png' },
    { id: 7, title: 'PORTFOLIO', category: '', imageUrl: '3.png' },
    { id: 8, title: 'PORTFOLIO', category: '', imageUrl: '4.png' },
    { id: 9, title: 'PORTFOLIO', category: '', imageUrl: '5.png' },
    { id: 10, title: 'PORTFOLIO', category: '', imageUrl: '6.png' },
];

// Updated Props to accept an onClick handler
interface PortfolioCardProps {
    item: PortfolioItem;
    onClick: (item: PortfolioItem) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  return (
    <div 
        // Added onClick here
        onClick={() => onClick(item)}
        className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-900 h-80 md:h-96"
    >
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <span className="text-sm font-semibold text-primary bg-secondary px-3 py-1 rounded-full">
                {item.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-2">
                {item.title}
            </h3>
            {/* Added a small hint text */}
            <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view full screen</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  // 1. State to track the currently open image (null means closed)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // 2. Function to close the modal (used by button and background click)
  const closeLightBox = () => {
      setSelectedItem(null);
  };

  // 3. Optional: Close on "Escape" key press for accessibility
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') closeLightBox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark">My Work Showcase</h2>
          <p className="text-slate-600 mt-4 text-lg">A glimpse into projects I've helped bring to life.</p>
        </div>
        
        <div className="portfolio-slider">
          <Slider {...settings}>
            {portfolioData.map((item) => (
              <div key={item.id} className="p-4">
                {/* Pass the click handler down */}
                <PortfolioCard item={item} onClick={setSelectedItem} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* 
          =============================================
          FULL SCREEN MODAL (LIGHTBOX)
          =============================================
      */}
      {selectedItem && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300"
            onClick={closeLightBox} // Clicking background closes it
        >
            {/* Close Button */}
            <button 
                onClick={closeLightBox}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Content Container (Prevents click inside from closing) */}
            <div 
                className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()} 
            >
                <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                />
                
                {/* Caption below image */}
                <div className="mt-4 text-center">
                    <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                    <span className="text-gray-400 text-sm mt-1 inline-block">{selectedItem.category}</span>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;