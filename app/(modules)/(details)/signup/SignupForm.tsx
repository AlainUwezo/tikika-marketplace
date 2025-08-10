"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!name.trim()) {
      setError("Veuillez entrer votre nom.");
      return;
    }
    if (!/^\+?[0-9]{8,15}$/.test(phone)) {
      setError("Numéro de téléphone invalide.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Simulation envoi (à remplacer par API réelle)
    console.log("Création compte avec :", { name, phone, password });
    router.push("/"); // Redirection après inscription
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="w-full max-w-sm bg-background p-6 rounded-2xl shadow-xl space-y-6 border border-border">
        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Créer un compte
          </h1>
          <p className="text-sm text-muted-foreground">
            Commencez votre aventure e-commerce.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Nom complet
            </label>
            <Input
              type="text"
              placeholder="Ex: Steven Gerard"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Téléphone
            </label>
            <Input
              type="tel"
              placeholder="+243..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Mot de passe
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Confirmer le mot de passe
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center animate-pulse">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
          >
            🚀 Créer mon compte
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Déjà inscrit ?{" "}
          <Link
            href="/signin"
            className="text-primary font-medium hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
