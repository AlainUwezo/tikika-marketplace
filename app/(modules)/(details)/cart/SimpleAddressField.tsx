import { useState } from "react";

export default function SimpleAddressField() {
  const [address, setAddress] = useState("12 Avenue du Progrès, Lubumbashi");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">
        Adresse de livraison
      </h2>

      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            className="w-full border px-3 py-2 rounded resize-none"
            placeholder="Entrez votre adresse complète"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="text-sm text-primary underline"
          >
            Enregistrer
          </button>
        </div>
      ) : (
        <div className="text-sm text-gray-700 space-y-1">
          <p>{address}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-primary underline"
          >
            Modifier
          </button>
        </div>
      )}
    </div>
  );
}
