"use client";

import { useState } from "react";
import SimpleAddressField from "./SimpleAddressField";

interface CartProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CheckoutProps {
  products: CartProduct[];
}

export default function Checkout({ products }: CheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const handleConfirm = () => {
    setIsProcessing(true);

    // Simulation d'envoi (à remplacer par appel API)
    setTimeout(() => {
      console.log("Commande confirmée :", products);
      alert("✅ Votre commande a été passée avec succès !");
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      <SimpleAddressField />

      <ul className="space-y-6">
        {products.map(({ id, name, imageUrl, price, quantity }) => (
          <li key={id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-16 h-16 object-contain rounded-md border border-gray-200"
              loading="lazy"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-600">
                {quantity} × {price.toFixed(2)} $
              </p>
            </div>
            <p className="font-semibold text-gray-900">
              {(price * quantity).toFixed(2)} $
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center border-t pt-6">
        <span className="text-lg font-bold text-gray-900">Total :</span>
        <span className="text-lg font-bold text-primary">
          {total.toFixed(2)} $
        </span>
      </div>

      <button
        onClick={handleConfirm}
        disabled={isProcessing}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          isProcessing
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#81c784] hover:bg-[#81c784]/90 text-white"
        }`}
      >
        {isProcessing ? "Traitement en cours..." : "Confirmer la commande"}
      </button>
    </div>
  );
}
