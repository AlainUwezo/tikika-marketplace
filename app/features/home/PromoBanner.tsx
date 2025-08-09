"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";

interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  expiryDate?: string;
  imageUrl?: string;
  ctaLabel?: string;
  ctaHref?: string;
  classNames?: string;
}

export default function PromoBanner({
  title = "Offre limitée sur nos produits phares",
  subtitle = "Faites vite, les stocks sont limités !",
  expiryDate = "15 août 2025",
  imageUrl = "/images/promo-banner.png",
  ctaLabel = "Profiter de l’offre",
  ctaHref = "/promotions",
  classNames = "",
}: PromoBannerProps) {
  return (
    <section
      aria-label="Bannière promotionnelle"
      className={`${classNames} relative overflow-hidden rounded-xl shadow-lg border border-border h-56 sm:h-64 group animate-in fade-in slide-in-from-top duration-700`}
    >
      {/* Image de fond */}
      <img
        src={imageUrl}
        alt="Image promotionnelle"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transform scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col sm:flex-row items-end sm:items-center justify-between px-6 py-5 text-white gap-4 sm:gap-0">
        {/* Texte principal */}
        <div className="flex flex-col gap-2 max-w-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-sm sm:text-base opacity-90 drop-shadow">
            {subtitle}
          </p>

          {/* Date de fin stylisée */}
          <div className="inline-block bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md w-fit mt-2">
            Offre valable jusqu’au {expiryDate}
          </div>
        </div>

        {/* Bouton CTA */}
        <Link href={ctaHref} passHref>
          <Button
            size="lg"
            variant="secondary"
            aria-label={`Accéder à la promotion valable jusqu’au ${expiryDate}`}
            className="bg-white text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out shadow-xl"
          >
            {ctaLabel} →
          </Button>
        </Link>
      </div>
    </section>
  );
}
