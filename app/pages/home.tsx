import Footer from "../components/layouts/Footer";
import ProductExplorer from "../features/home/ProductExplorer";
import CategoryList from "../features/home/CategoryList";
import PromoBanner from "../features/home/PromoBanner";
import FaqSection from "../components/sections/FaqSection";

export default function Home() {
  return (
    <section className="min-h-screen space-y-6">
      <div
        className="
          flex flex-col
          lg:flex-row
          gap-6
          "
      >
        {/* Sidebar catégories (verticale, fixe largeur) sur large écran */}
        <aside
          className="
            w-full
            lg:w-64
            border-r border-gray-200
            lg:min-h-[70vh]
            lg:sticky lg:top-0
            bg-white
            overflow-y-auto
          "
        >
          <CategoryList />
        </aside>

        {/* Contenu principal promo + produits */}
        <main className="flex-1">
          <PromoBanner
            title="Derniers jours pour économiser !"
            subtitle="Nos meilleures offres s’envolent bientôt."
            expiryDate="20 août 2025"
            imageUrl="/images/promo-banner.png"
            ctaLabel="Je découvre"
            ctaHref="/offres-été"
            classNames="mb-4"
          />

          <ProductExplorer />
        </main>
      </div>

      <FaqSection />

      <Footer />
    </section>
  );
}
