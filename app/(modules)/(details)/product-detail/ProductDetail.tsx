"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface ProductDetailProps {
  product: {
    name: string;
    imageUrl: string;
    rating: number; // sur 5
    ratingCount: number;
    description: string;
    specifications: Record<string, string>;
    price: number;
  };
  onAddToCart: () => void;
}

export default function ProductDetail({
  product,
  onAddToCart,
}: ProductDetailProps) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const fill =
        i <= (hoveredStar ?? product.rating) ? "currentColor" : "none";
      stars.push(
        <Star
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill={fill}
          stroke="currentColor"
          onMouseEnter={() => setHoveredStar(i)}
          onMouseLeave={() => setHoveredStar(null)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-2xl py-8 mx-auto bg-white rounded-xl lg:grid lg:grid-cols-2 lg:gap-8 px-4">
      {/* Image produit */}
      <div>
        <img
          src={product.imageUrl}
          alt={`Image de ${product.name}`}
          className="w-full h-auto rounded-xl object-contain"
          loading="lazy"
        />
      </div>

      {/* Détails produit */}
      <div className="flex flex-col justify-between space-y-6 mt-6 lg:mt-0">
        {/* Titre + Étoiles */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex">{renderStars()}</div>
            <span className="text-sm font-medium text-gray-700">
              {product.rating.toFixed(1)} / 5
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {product.ratingCount} avis
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Spécifications */}
        <div>
          <h2 className="text-md font-semibold text-gray-800 mb-2">
            Caractéristiques
          </h2>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key} :</strong> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton d’ajout au panier */}
        <button
          onClick={onAddToCart}
          aria-label={`Ajouter ${product.name} au panier`}
          className="w-full py-3 bg-[#ffcc80] hover:bg-[#ffcc80]/90 text-black font-semibold rounded-lg shadow-md transition-colors"
        >
          Ajouter au panier – {product.price.toFixed(2)} €
        </button>
      </div>
    </div>
  );
}
