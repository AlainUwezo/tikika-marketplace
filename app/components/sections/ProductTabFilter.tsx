"use client";
import React from "react";
import { LockIcon, MagnetIcon, ListMinusIcon } from "lucide-react";

// Type des filtres disponibles
type ProductFilterOptions =
  | "Tous"
  | "Fruits"
  | "Produits laitiers"
  | "Boissons"
  | "Snacks"
  | "Hygiène";

interface ProductFilterProps {
  selectedFilter: ProductFilterOptions;
  onFilterChange: (productFilter: ProductFilterOptions) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-4 bg-gray-50 py-3 px-4 rounded-lg shadow-sm">
      {/* Filtre pour tout afficher */}
      <button
        className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
          selectedFilter === "Tous"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100 hover:text-blue-600"
        }`}
        onClick={() => onFilterChange("Tous")}
      >
        <LockIcon className="text-lg" />
        <span>Tous</span>
      </button>

      {/* Filtre pour les cours ouverts */}
      <button
        className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
          selectedFilter === "Fruits"
            ? "bg-green-600 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-green-100 hover:text-green-600"
        }`}
        onClick={() => onFilterChange("Fruits")}
      >
        <MagnetIcon className="text-lg" />
        <span>Fruits</span>
      </button>

      {/* Filtre pour les cours fermés */}
      <button
        className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
          selectedFilter === "Boissons"
            ? "bg-red-600 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-red-100 hover:text-red-600"
        }`}
        onClick={() => onFilterChange("Boissons")}
      >
        <ListMinusIcon className="text-lg" />
        <span>Boissons</span>
      </button>
    </div>
  );
};

export default ProductFilter;
