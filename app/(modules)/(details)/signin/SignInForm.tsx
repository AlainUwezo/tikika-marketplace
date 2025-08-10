"use client";

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation simple
    if (!/^\+?[0-9]{8,15}$/.test(phone)) {
      setError("Numéro de téléphone invalide.");
      return;
    }
    if (!password) {
      setError("Veuillez entrer votre mot de passe.");
      return;
    }

    // Simulation login (à remplacer par API réelle)
    console.log("Connexion avec :", { phone, password });
    router.push("/dashboard"); // Redirection après connexion
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="w-full max-w-sm bg-background p-6 rounded-2xl shadow-xl space-y-6 border border-border">
        <div className="space-y-1 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Se connecter
          </h1>
          <p className="text-sm text-muted-foreground">
            Accédez à votre espace personnel.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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

          {error && (
            <p className="text-red-500 text-sm text-center animate-pulse">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full text-sm bg-[#ffcc80] text-foreground font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
          >
            Se connecter
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Pas encore de compte ?{" "}
          <Link
            href="/signup"
            className="text-primary font-medium hover:underline"
          >
            S’inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
