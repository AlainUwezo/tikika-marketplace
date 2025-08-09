"use client";

import { useState, useMemo } from "react";
import { ShoppingCart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import ProductCard from "@/app/components/products/ProductCard";

interface Product {
  id: number;
  name: string;
  category: Category;
  subCategory: string;
  price: number;
  imageUrl: string;
}

type Category =
  | "Fruits"
  | "Produits laitiers"
  | "Boissons"
  | "Snacks"
  | "Hygiène";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Pomme",
    category: "Fruits",
    subCategory: "Pommes rouges",
    price: 1.5,
    imageUrl: "/images/categories/mode.png",
  },
  {
    id: 2,
    name: "Lait entier",
    category: "Produits laitiers",
    subCategory: "Lait de vache",
    price: 2,
    imageUrl: "/images/categories/game.png",
  },
  {
    id: 3,
    name: "Coca-Cola",
    category: "Boissons",
    subCategory: "Sodas",
    price: 1.2,
    imageUrl: "/images/categories/livre.png",
  },
  {
    id: 4,
    name: "Chips",
    category: "Snacks",
    subCategory: "Chips salées",
    price: 0.8,
    imageUrl: "/images/categories/mode.png",
  },
];

const categoryMap: Record<Category, string[]> = {
  Fruits: ["Pommes rouges", "Pommes vertes", "Bananes", "Fraises"],
  "Produits laitiers": ["Lait de vache", "Fromages", "Yaourts"],
  Boissons: ["Sodas", "Eaux", "Jus de fruits"],
  Snacks: ["Chips salées", "Biscuits", "Barres chocolatées"],
  Hygiène: ["Savons", "Dentifrices", "Shampooings"],
};

export default function SubCategoryBrowser({
  activeCategory,
  search = "",
}: {
  activeCategory: Category;
  search?: string;
}) {
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  // Produits filtrés en fonction de la catégorie + sous-catégorie + recherche
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = p.category === activeCategory;
      const matchSubCategory =
        !activeSubCategory || p.subCategory === activeSubCategory;
      return matchSearch && matchCategory && matchSubCategory;
    });
  }, [search, activeCategory, activeSubCategory]);

  return (
    <section className="max-w-7xl mx-auto space-y-8">
      {/* Onglets sous-catégories */}
      <Tabs
        value={activeSubCategory || ""}
        onValueChange={(val: string) => setActiveSubCategory(val || null)}
        className="min-w-max"
      >
        <TabsList className="flex space-x-2 rounded-xl bg-muted p-1 w-max mx-auto">
          {/* Onglet pour voir toute la catégorie sans filtrer sous-catégorie */}
          <TabsTrigger
            value=""
            className="flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all
                     data-[state=active]:bg-[#ffcc80] data-[state=active]:text-foreground
                     hover:bg-accent hover:text-accent-foreground"
          >
            Toutes
          </TabsTrigger>

          {/* Sous-catégories de la catégorie active */}
          {categoryMap[activeCategory].map((sub: string) => (
            <TabsTrigger
              key={sub}
              value={sub}
              className="flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all
                     data-[state=active]:bg-[#ffcc80] data-[state=active]:text-foreground
                     hover:bg-accent hover:text-accent-foreground"
            >
              {sub}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Liste des produits filtrés */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16 text-gray-400 select-none">
            <ShoppingCart className="mx-auto mb-5 w-10 h-10" />
            <p className="text-lg font-light">
              Aucun produit ne correspond à votre sélection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
