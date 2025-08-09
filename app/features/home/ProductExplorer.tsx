"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import ProductCard from "@/app/components/products/ProductCard";

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
  "Tous",
  "Fruits",
  "Produits laitiers",
  "Boissons",
  "Snacks",
  "Hygiène",
];

export default function ProductExplorer() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "Tous" || product.category === activeCategory;
    return matchesCategory;
  });

  return (
    <section className="md:px-8 space-y-8 bg-background">
      {/* 🏷️ Tabs de catégories */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <Tabs
          value={activeCategory}
          onValueChange={(val) => setActiveCategory(val)}
          className="min-w-max"
        >
          <TabsList className="flex space-x-2 rounded-xl bg-muted p-1 w-max">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all
                     data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                     hover:bg-accent hover:text-accent-foreground"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* 🛍️ Liste des produits */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
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
