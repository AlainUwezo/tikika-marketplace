"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export default function HeaderDetail({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={() => router.back()}
          aria-label="Retour"
          className="p-2 rounded-md hover:bg-muted transition"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Titre ou logo */}
        {title ? (
          <h1 className="text-base md:text-lg font-semibold truncate max-w-[60%] text-center">
            {title}
          </h1>
        ) : (
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <img src="/logo.webp" alt="Logo" width={24} height={24} />
            <span className="text-foreground">Tikika</span>
          </Link>
        )}

        {/* Bouton panier */}
        <button
          aria-label="Panier"
          className="relative p-2 rounded-md hover:bg-muted transition"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCart className="w-6 h-6 text-foreground" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 w-5 h-5 text-[10px] font-bold flex items-center justify-center rounded-full"
          >
            3
          </Badge>
        </button>
      </div>
    </header>
  );
}
