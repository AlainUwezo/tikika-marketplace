"use client";

import { useState, useMemo } from "react";
import StoreCard from "./StoreCard";
import { stores, Store } from "../../data/stores";

const allCategories = [
  "Tous",
  "Alimentation",
  "Cosmétique",
  "Électroménager",
  "Maison",
];

export default function StoresGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filtrer selon catégorie sélectionnée
  const filteredStores = useMemo(() => {
    if (selectedCategory === "Tous") return stores;
    return stores.filter((store) =>
      store.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Supermarchés partenaires
      </h2>

      {/* Barre filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition
              ${
                cat === selectedCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-foreground border-border hover:bg-primary hover:text-primary-foreground"
              }
            `}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={cat === selectedCategory}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille des cartes */}
      {filteredStores.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Aucun supermarché trouvé pour cette catégorie.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredStores.map((store) => (
            <StoreCard
              key={store.id}
              name={store.name}
              logo={store.logo}
              location={store.location}
              href={store.href}
            />
          ))}
        </div>
      )}
    </section>
  );
}
