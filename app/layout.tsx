// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/app/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketplace",
  description: "Commande tes produits préférés facilement",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
