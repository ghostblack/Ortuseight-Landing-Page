import React from 'react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col group h-[491px] justify-between w-full bg-white">
      {/* Upper content wrapper */}
      <div className="w-full">
        {/* Image Container - Fixed height to prevent resizing based on width */}
        {/* Removed padding to let image fill the space as requested */}
        <div className="relative bg-[#F9F9F9] h-[320px] w-full mb-6 overflow-hidden flex items-center justify-center">
          {product.discount && (
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-medium px-4 py-1.5 z-10">
              {product.discount}
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col items-start text-left space-y-2 px-1">
          <div className="flex items-center gap-3">
            <span className="font-sans font-bold text-black text-xl tracking-tight">{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 text-sm line-through decoration-1 font-light">{product.originalPrice}</span>
            )}
          </div>
          <h3 className="text-black font-sans font-normal text-sm uppercase tracking-wider leading-relaxed line-clamp-2 min-h-[2.5em] pr-4">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs font-light tracking-wide">{product.color}</p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-brand-orange text-white text-sm uppercase font-bold py-4 mt-auto hover:bg-orange-600 transition-colors duration-300 tracking-wider">
        Buy Now
      </button>
    </div>
  );
};