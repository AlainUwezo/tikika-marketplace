"use client";
import ProductDetail from "./ProductDetail";

const exampleProduct = {
  name: "Beats Studio Pro Headphones",
  imageUrl: "/images/categories/phone.png",
  rating: 4.8,
  ratingCount: 172,
  description:
    "Beats Studio Pro Wireless is a premium Bluetooth headset headphones. The product uses great sound and effectively suppresses noise.",
  specifications: {
    "Battery Life": "22 hours",
    Weight: "250 g",
    Bluetooth: "5.0",
    "Noise Cancellation": "Active",
  },
  price: 65.9,
};

const Page = () => {
  const handleAddToCart = () => {
    alert("Produit ajouté au panier !");
  };

  return (
    <ProductDetail product={exampleProduct} onAddToCart={handleAddToCart} />
  );
};

export default Page;
