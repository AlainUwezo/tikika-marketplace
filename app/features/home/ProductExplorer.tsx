"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import ProductCard from "@/app/components/products/ProductCard";
import Image from "next/image";

const allProducts = [
  {
    id: 1,
    name: "Pomme",
    category: "Fruits",
    price: 1.5,
    imageUrl: "./images/categories/mode.png",
  },
  {
    id: 2,
    name: "Lait entier",
    category: "Produits laitiers",
    price: 2,
    imageUrl: "./images/categories/game.png",
  },
  {
    id: 3,
    name: "Coca-Cola",
    category: "Boissons",
    price: 1.2,
    imageUrl: "./images/categories/livre.png",
  },
  {
    id: 4,
    name: "Chips",
    category: "Snacks",
    price: 0.8,
    imageUrl: "./images/categories/mode.png",
  },
];

const categories = [
  { name: "Tous", icon: "/images/categories/all.png" },
  { name: "Fruits", icon: "/images/categories/fruits.png" },
  { name: "Produits laitiers", icon: "/images/categories/milk.png" },
  { name: "Boissons", icon: "/images/categories/drink.png" },
  { name: "Snacks", icon: "/images/categories/snack.png" },
  { name: "Hygiène", icon: "/images/categories/hygiene.png" },
];

export default function ProductExplorer() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProducts = allProducts.filter(
    (product) =>
      activeCategory === "Tous" || product.category === activeCategory
  );

  return (
    <section className="md:px-8 space-y-8 bg-background">
      {/* 🏷️ Menu catégories style premium */}
      <div className="w-full overflow-x-auto no-scrollbar py-2">
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="min-w-max"
        >
          <TabsList className="flex gap-3 sm:gap-4 px-2 sm:justify-center">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.name}
                value={cat.name}
                className="group flex flex-col items-center justify-center w-24 min-w-[6rem] p-3 rounded-xl
                   bg-gradient-to-b from-white to-muted/30 shadow-sm hover:shadow-md
                   border border-transparent hover:border-primary/30
                   transition-all duration-300 ease-out
                   data-[state=active]:border-primary data-[state=active]:bg-primary/10
                   data-[state=active]:shadow-lg"
              >
                <div className="relative w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-primary">
                  {cat.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* 🛍️ Liste produits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <ShoppingCart className="mx-auto mb-4 w-8 h-8 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">
              Aucun produit ne correspond à votre filtre.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
