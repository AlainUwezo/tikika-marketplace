"use client";

import { useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";

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

  const [step, setStep] = useState<"panier" | "checkout">("panier");
  const [cartProducts, setCartProducts] = useState(initialProducts);

  const handleCheckout = (products: typeof initialProducts) => {
    setCartProducts(products);
    setStep("checkout");
  };

  const handleBackToCart = () => {
    setStep("panier");
  };

  return (
    <main className="min-h-screen py-8 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">
        {/* Titre */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {step === "panier" ? "Votre panier" : "Confirmation de commande"}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {step === "panier"
              ? "Vérifiez vos articles avant de finaliser la commande."
              : "Voici le récapitulatif de votre commande."}
          </p>
        </div>

        {/* Étapes */}
        <div className="rounded-lg sm:p-6">
          {step === "panier" ? (
            <Cart initialProducts={cartProducts} onCheckout={handleCheckout} />
          ) : (
            <>
              <Checkout products={cartProducts} />
              <button
                onClick={handleBackToCart}
                className="mt-4 text-sm text-primary underline hover:text-primary/80"
              >
                ← Modifier le panier
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
