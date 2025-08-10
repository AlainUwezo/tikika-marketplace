"use client";

import { useState } from "react";

interface CartProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartProps {
  initialProducts: CartProduct[];
  onCheckout: (products: CartProduct[]) => void;
}

export default function Cart({ initialProducts, onCheckout }: CartProps) {
  const [products, setProducts] = useState<CartProduct[]>(initialProducts);

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-700 py-12">
        <p className="text-lg">Votre panier est vide 🛒</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        Articles dans votre panier
      </h2>

      <ul className="space-y-6">
        {products.map(({ id, name, imageUrl, price, quantity }) => (
          <li
            key={id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4"
          >
            {/* Image + Infos */}
            <div className="flex items-center gap-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-20 h-20 object-contain rounded-md border border-gray-200"
                loading="lazy"
              />
              <div>
                <p className="text-gray-900 font-medium">{name}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Prix unitaire : {price.toFixed(2)} $
                </p>
              </div>
            </div>

            {/* Quantité + Sous-total */}
            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(id, -1)}
                  className="w-8 h-8 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label={`Réduire la quantité de ${name}`}
                >
                  –
                </button>
                <span className="w-6 text-center text-gray-900 font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(id, +1)}
                  className="w-8 h-8 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label={`Augmenter la quantité de ${name}`}
                >
                  +
                </button>
              </div>

              <p className="text-right font-semibold text-gray-900 min-w-[80px]">
                {(price * quantity).toFixed(2)} $
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="flex justify-between items-center border-t pt-6">
        <span className="text-lg font-bold text-gray-900">Total :</span>
        <span className="text-lg font-bold text-primary">
          {total.toFixed(2)} $
        </span>
      </div>

      {/* Bouton commander */}
      <button
        onClick={() => onCheckout(products)}
        className="w-full py-3 bg-[#ffcc80] hover:bg-[#ffcc80]/90 text-foreground font-semibold rounded-lg transition-colors"
      >
        Passer la commande
      </button>
    </div>
  );
}
