"use client";

import { useState } from "react";
import Cart from "./Cart";

export default function PagePanier() {
  const initialProducts = [
    {
      id: "1",
      name: "Casque Bluetooth",
      imageUrl: "images/categories/phone.png",
      price: 59.99,
      quantity: 1,
    },
    {
      id: "2",
      name: "Sac à dos de randonnée",
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
      price: 89.9,
      quantity: 2,
    },
  ];

  const handleCheckout = (products: typeof initialProducts) => {
    alert(
      `Commande passée pour ${products.length} produit(s), total: ${products
        .reduce((acc, p) => acc + p.price * p.quantity, 0)
        .toFixed(2)} €`
    );
  };

  return (
    <main className="min-h-screen py-2 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">
        {/* Titre */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Votre panier
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Vérifiez vos articles avant de finaliser la commande.
          </p>
        </div>

        {/* Carte du panier */}
        <div className="rounded-lg sm:p-6">
          <Cart initialProducts={initialProducts} onCheckout={handleCheckout} />
        </div>
      </div>
    </main>
  );
}
