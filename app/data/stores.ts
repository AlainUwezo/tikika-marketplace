// data/stores.ts
export interface Store {
  id: string;
  name: string;
  logo: string;
  location: string;
  categories: string[];
  href: string;
}

export const stores: Store[] = [
  {
    id: "1",
    name: "Supermarché Alpha",
    logo: "/logos/alpha.png",
    location: "Kinshasa",
    categories: ["Alimentation", "Cosmétique"],
    href: "/stores/alpha",
  },
  {
    id: "2",
    name: "Supermarché Beta",
    logo: "/logos/beta.png",
    location: "Lubumbashi",
    categories: ["Alimentation", "Électroménager"],
    href: "/stores/beta",
  },
  {
    id: "3",
    name: "Supermarché Gamma",
    logo: "/logos/gamma.png",
    location: "Goma",
    categories: ["Cosmétique", "Maison"],
    href: "/stores/gamma",
  },
  {
    id: "4",
    name: "Supermarché Delta",
    logo: "/logos/delta.png",
    location: "Kisangani",
    categories: ["Alimentation", "Maison"],
    href: "/stores/delta",
  },
  {
    id: "5",
    name: "Supermarché Epsilon",
    logo: "/logos/epsilon.png",
    location: "Bukavu",
    categories: ["Électroménager", "Cosmétique"],
    href: "/stores/epsilon",
  },
  {
    id: "6",
    name: "Supermarché Zeta",
    logo: "/logos/zeta.png",
    location: "Matadi",
    categories: ["Maison"],
    href: "/stores/zeta",
  },
];
