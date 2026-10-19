export type Bien = {
  id: string;
  titre: string;
  quartier: string;
  surface: string;
  pieces: string;
  precisions: string;
  prix: string;
  photo: string;
  photoAlt: string;
  cadrage: string;
};

// Annonces ouvertes le 19 octobre 2026 sur
// https://www.mubawab.ma/fr/b/11858/agence-139
// Photos téléchargées depuis ces annonces.

export const biens: Bien[] = [
  {
    id: "bella-vista",
    titre: "Appartement à vendre à Bella Vista",
    quartier: "Bella Vista, Malabata, Tanger",
    surface: "54 m²",
    pieces: "2 pièces, 1 chambre, 1 salle de bain",
    precisions: "Premier étage, garage, ascenseur, piscine, carrelage. Immeuble de 10 à 20 ans.",
    prix: "1 250 000 DH",
    photo: "/biens/bella.jpg",
    photoAlt: "La piscine de la résidence à Bella Vista",
    cadrage: "object-center",
  },
  {
    id: "city-center",
    titre: "Appartement à louer au Tanger City Center",
    quartier: "Tanger City Center",
    surface: "55 m²",
    pieces: "2 pièces, 1 chambre, 1 salle de bain",
    precisions:
      "Sixième étage, 4 personnes, 1 nuit minimum. Garage, ascenseur, piscine, concierge, salon européen, cuisine équipée.",
    prix: "1 500 DH par jour",
    photo: "/biens/city.jpg",
    photoAlt: "La mer et la piscine, depuis l’appartement du Tanger City Center",
    cadrage: "object-center",
  },
  {
    id: "nouinouich",
    titre: "Villa à vendre à Nouinouich",
    quartier: "Nouinouich, Malabata, Tanger",
    surface: "2 000 m²",
    pieces: "8 pièces, 5 chambres, 3 salles de bain",
    precisions: "Vue panoramique sur Tanger.",
    // L’annonce affiche 5 000 000 000 DH. Ce n’est pas un prix clair.
    prix: "Prix sur demande",
    photo: "/biens/villa.jpg",
    photoAlt: "Le détroit au coucher du soleil, depuis la villa à Nouinouich",
    cadrage: "object-center",
  },
];

export const WHATSAPP = "https://wa.me/212710090021";

export function whatsappLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
