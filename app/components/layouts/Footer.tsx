import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FunctionComponent } from "react";

interface Props {
  classNames?: string;
}

const Footer: FunctionComponent<Props> = ({ classNames = "" }) => {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">À propos</h3>
          <p className="text-sm text-muted-foreground">
            Une plateforme moderne pour commander vos produits préférés dans les
            supermarchés partenaires de votre ville.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Liens utiles</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +243 900 000 000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@vitrine.cd
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div className="flex gap-4 mt-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:text-primary transition" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border text-center text-xs py-4 text-muted-foreground">
        &copy; {new Date().getFullYear()} Vitrine.cd — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
