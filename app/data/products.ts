export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  storeName: string;
  storeHref: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Café Arabica",
    image: "/products/cafe-arabica.jpg",
    price: 4500,
    storeName: "Supermarché Alpha",
    storeHref: "/stores/alpha",
  },
  {
    id: "p2",
    name: "Crème visage hydratante",
    image: "/products/creme-visage.jpg",
    price: 12500,
    storeName: "Supermarché Gamma",
    storeHref: "/stores/gamma",
  },
  {
    id: "p3",
    name: "Yaourt nature",
    image: "/products/yaourt-nature.jpg",
    price: 2000,
    storeName: "Supermarché Beta",
    storeHref: "/stores/beta",
  },
  {
    id: "p4",
    name: "Lave-linge automatique",
    image: "/products/lave-linge.jpg",
    price: 150000,
    storeName: "Supermarché Epsilon",
    storeHref: "/stores/epsilon",
  },
  {
    id: "p5",
    name: "Savon naturel",
    image: "/products/savon-naturel.jpg",
    price: 3000,
    storeName: "Supermarché Delta",
    storeHref: "/stores/delta",
  },
];
