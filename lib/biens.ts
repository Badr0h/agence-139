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
  largeur: number;
  hauteur: number;
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
    precisions: "1er étage, garage, ascenseur, piscine, carrelage. Immeuble de 10 à 20 ans.",
    prix: "1 250 000 DH",
    photo: "/biens/bella-vista.jpg",
    photoAlt: "Piscine de la résidence, depuis l’appartement à Bella Vista, Tanger",
    largeur: 1100,
    hauteur: 1466,
  },
  {
    id: "city-center",
    titre: "Appartement à louer au Tanger City Center",
    quartier: "Tanger City Center",
    surface: "55 m²",
    pieces: "2 pièces, 1 chambre, 1 salle de bain",
    precisions:
      "6e étage, 4 personnes, 1 nuit minimum. Garage, ascenseur, piscine, concierge, salon européen, cuisine équipée.",
    prix: "1 500 DH par jour",
    photo: "/biens/city-center.jpg",
    photoAlt: "Vue sur la mer et la piscine depuis l’appartement du Tanger City Center",
    largeur: 1100,
    hauteur: 825,
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
    photo: "/biens/nouinouich.jpg",
    photoAlt: "Villa à Nouinouich, piscine et vue sur Tanger",
    largeur: 1100,
    hauteur: 1466,
  },
];

export const WHATSAPP = "https://wa.me/212710090021";

export function whatsappLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
