import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string; // Optionnel
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const onDetailProduct = () => {
    router.push("/product-detail");
  };

  return (
    <Card
      onClick={onDetailProduct}
      className="group gap-2 flex flex-col border-none shadow-none justify-between rounded-xl overflow-hidden transition-all duration-300"
    >
      {/* 🖼️ Image produit */}
      <div className="relative p-4 w-full h-50 sm:h-54 md:h-52 overflow-hidden bg-muted py-4 rounded-md">
        <img
          src={product.imageUrl}
          alt={`Image de ${product.name}`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-10 transition duration-300" />
      </div>

      {/* 📦 Contenu */}
      <CardContent className="mt-0 p-0">
        <div className="space-y-1">
          <h3 className="text-base font-medium text-foreground truncate">
            {product.name}
          </h3>
          {product.category && (
            <p className="text-xs text-muted-foreground">{product.category}</p>
          )}
          {product.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">{product.price.toFixed(2)} $</p>
        </div>
      </CardContent>
    </Card>
  );
}
