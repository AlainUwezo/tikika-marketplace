import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { FunctionComponent } from "react";

interface Props {
  classNames?: string;
}

const FaqSection: FunctionComponent<Props> = ({ classNames = "" }) => {
  return (
    <section
      className={`${classNames} max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12`}
    >
      <h2 className="text-xl text-center text-gray-700 mb-8">
        Questions fréquentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        aria-label="Section FAQ"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary transition-colors">
            Comment passer une commande ?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700 leading-relaxed pt-2">
            Sélectionnez vos produits, ajoutez-les au panier, puis suivez les
            étapes de validation pour finaliser votre commande.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary transition-colors">
            Quels sont les moyens de paiement disponibles ?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700 leading-relaxed pt-2">
            Vous pouvez payer à la livraison, par Mobile Money (M-Pesa, Airtel
            Money...), ou par carte bancaire.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary transition-colors">
            Quel est le délai de livraison ?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700 leading-relaxed pt-2">
            La livraison s’effectue généralement entre 24h et 48h selon votre
            localisation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
