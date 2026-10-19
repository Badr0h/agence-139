"use client";

import { FormEvent, useState } from "react";
import { biens, whatsappLink } from "@/lib/biens";

const champ =
  "h-14 w-full border border-ligne bg-papier px-4 text-lg text-encre focus:border-detroit";

export function VisitForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nom = String(data.get("nom") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const bien = String(data.get("bien") ?? "").trim();

    if (!nom || !telephone) {
      setError("Indiquez votre nom et votre téléphone.");
      return;
    }

    setError("");
    const message = [
      "Bonjour, je souhaite demander une visite.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Bien : ${bien}`,
    ].join("\n");

    window.location.assign(whatsappLink(message));
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-lg">
          Nom
          <input name="nom" type="text" autoComplete="name" className={champ} />
        </label>
        <label className="grid min-w-0 gap-2 text-lg">
          Téléphone
          <input
            name="telephone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={champ}
          />
        </label>
      </div>
      <label className="grid min-w-0 gap-2 text-lg">
        Bien concerné
        <select name="bien" defaultValue={biens[0]?.titre} className={champ}>
          {biens.map((bien) => (
            <option key={bien.id} value={`${bien.titre} (${bien.quartier})`}>
              {bien.titre}
            </option>
          ))}
          <option value="Un autre bien">Un autre bien</option>
        </select>
      </label>
      {error ? (
        <p role="alert" className="text-lg font-semibold">
          {error}
        </p>
      ) : (
        <p className="text-base leading-relaxed">
          Rien n’est enregistré ici. Le message s’ouvre dans WhatsApp.
        </p>
      )}
      <button
        type="submit"
        className="h-14 bg-detroit text-lg font-semibold text-papier"
      >
        Demander une visite
      </button>
    </form>
  );
}
