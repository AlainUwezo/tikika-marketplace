"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ShoppingCart, Menu, X, LogIn, UserPlus, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
  }, [sidebarOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!sidebarOpen || !sidebarRef.current) return;

    const focusable = sidebarRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    first?.focus();

    return () => document.removeEventListener("keydown", trapFocus);
  }, [sidebarOpen]);

  const cartHandler = () => {
    router.push("/cart");
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.webp" alt="Logo" width={28} height={28} />
          <span className="text-foreground">Tikika</span>
        </Link>

        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Ouvrir le menu"
          className="p-2 rounded-md hover:bg-muted transition"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un produit ou un magasin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 py-6 bg-muted rounded-md"
          />
        </div>
      </div>

      {/* Desktop Header */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.webp" alt="Logo" width={28} height={28} />
          <span className="text-foreground">Tikika</span>
        </Link>

        <div className="flex-1 mx-6 max-w-lg">
          <Input
            type="search"
            placeholder="Rechercher un produit ou un magasin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/signin")}
          >
            <LogIn className="w-4 h-4 mr-2" />
            Connexion
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/signup")}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Inscription
          </Button>
          <button
            aria-label="Panier"
            className="relative p-2 rounded-md hover:bg-muted transition cursor-pointer"
            onClick={cartHandler}
          >
            <ShoppingCart className="w-6 h-6 text-foreground" />
            <span className="absolute -top-1 -right-1 bg-destructive text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
              3
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setSidebarOpen(false)}
            />

            <motion.div
              key="sidebar"
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-xs bg-background z-50 shadow-2xl flex flex-col p-5 overflow-y-auto rounded-l-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
              id="mobile-menu"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Fermer menu"
                  className="p-2 rounded-md hover:bg-muted transition focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <div role="search" className="mb-6">
                <Input
                  type="search"
                  placeholder="Rechercher un produit ou un magasin..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-6 bg-muted rounded-md"
                />
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full justify-start"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Connexion
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full justify-start"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Inscription
                </Button>
                <div className="flex">
                  <button
                    aria-label="Panier"
                    className="relative p-3 rounded-md hover:bg-muted transition flex items-center"
                    onClick={cartHandler}
                  >
                    <ShoppingCart className="w-7 h-7 text-foreground" />

                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 w-5 h-5 text-[10px] font-bold flex items-center justify-center animate-pulse rounded-full"
                    >
                      3
                    </Badge>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
