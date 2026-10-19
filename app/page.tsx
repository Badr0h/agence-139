import Image from "next/image";
import { VisitForm } from "./visit-form";
import { biens, whatsappLink, type Bien } from "@/lib/biens";

const MAPS =
  "https://www.google.com/maps/place/AGENCE+139/@35.77819,-5.810961,17z";

const visiteGenerale = whatsappLink(
  "Bonjour, je souhaite demander une visite.",
);

function messageVisite(bien: Bien) {
  return whatsappLink(
    `Bonjour, je souhaite visiter : ${bien.titre} (${bien.quartier}).`,
  );
}

const boutonVisite =
  "inline-flex h-14 items-center justify-center bg-detroit px-6 text-lg font-semibold text-papier";

export default function Page() {
  const [bella, city, villa] = biens;

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-ligne bg-papier">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-baseline justify-between gap-4 sm:justify-start">
            <p className="text-2xl font-extrabold tracking-tight">Agence 139</p>
            <a href="tel:+212710090021" className="text-lg font-semibold">
              +212 710 09 00 21
            </a>
          </div>
          <a href={visiteGenerale} className={`${boutonVisite} w-full sm:w-auto`}>
            Demander une visite
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-12 lg:py-14">
          <div>
            <h1 className="max-w-[16ch] text-4xl leading-[1.05] font-extrabold sm:text-5xl">
              Achat, vente et location à Tanger.
            </h1>
            <p className="mt-5 max-w-[36ch] text-xl leading-relaxed">
              Agence 139, rue Amr Ibn Ass. Appartement à Bella Vista, location
              au Tanger City Center, villa à Nouinouich.
            </p>
          </div>
          <div className="overflow-hidden bg-detroit text-papier">
            <Image
              src="/biens/city-center.jpg"
              alt="Le détroit de Gibraltar et la piscine, vus depuis l’appartement du Tanger City Center"
              width={1100}
              height={825}
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="h-auto w-full"
            />
            <p
              aria-hidden="true"
              className="px-4 pt-1 pb-2 text-[5.25rem] leading-none font-extrabold sm:text-[7rem]"
            >
              139
            </p>
          </div>
        </section>

        <section id="biens" className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:py-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Biens à visiter</h2>

          {bella ? (
            <article className="mt-8 border-b border-ligne pb-10">
              <Image
                src={bella.photo}
                alt={bella.photoAlt}
                width={bella.largeur}
                height={bella.hauteur}
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="h-72 w-full object-cover sm:h-96"
              />
              <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
                <div>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">{bella.titre}</h3>
                  <p className="mt-2 text-lg">{bella.quartier}</p>
                  <p className="mt-2 max-w-[52ch] text-lg leading-relaxed">
                    {bella.surface}. {bella.pieces}. {bella.precisions}
                  </p>
                </div>
                <div className="grid gap-4">
                  <p className="text-3xl font-extrabold">{bella.prix}</p>
                  <a href={messageVisite(bella)} className={`${boutonVisite} w-full sm:w-auto`}>
                    Demander une visite
                  </a>
                </div>
              </div>
            </article>
          ) : null}

          {city ? (
            <article className="mt-8 grid gap-4 bg-ecume p-4 sm:grid-cols-[18rem_minmax(0,1fr)] sm:gap-8 sm:p-6">
              <Image
                src={city.photo}
                alt={city.photoAlt}
                width={city.largeur}
                height={city.hauteur}
                sizes="(min-width: 640px) 18rem, 100vw"
                className="h-56 w-full object-cover sm:h-full"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-extrabold sm:text-3xl">{city.titre}</h3>
                <p className="text-lg">{city.quartier}</p>
                <p className="max-w-[48ch] text-lg leading-relaxed">
                  {city.surface}. {city.pieces}. {city.precisions}
                </p>
                <p className="text-3xl font-extrabold">{city.prix}</p>
                <a href={messageVisite(city)} className={`${boutonVisite} sm:w-fit`}>
                  Demander une visite
                </a>
              </div>
            </article>
          ) : null}

          {villa ? (
            <article className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
              <Image
                src={villa.photo}
                alt={villa.photoAlt}
                width={villa.largeur}
                height={villa.hauteur}
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="h-80 w-full object-cover sm:h-[28rem]"
              />
              <div>
                <h3 className="text-2xl font-extrabold sm:text-3xl">{villa.titre}</h3>
                <p className="mt-2 text-lg">{villa.quartier}</p>
                <p className="mt-2 max-w-[40ch] text-lg leading-relaxed">
                  {villa.surface}. {villa.pieces}. {villa.precisions}
                </p>
                <p className="mt-4 text-3xl font-extrabold">{villa.prix}</p>
                <a href={messageVisite(villa)} className={`${boutonVisite} mt-5 w-full sm:w-auto`}>
                  Demander une visite
                </a>
              </div>
            </article>
          ) : null}
        </section>

        <section className="bg-platre" id="agence">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:py-16">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">L’agence</h2>
              <p className="mt-5 text-xl leading-relaxed">
                Rue Amr Ibn Ass, n° 68, RDC MA1
                <br />
                Msallah, Tanger
              </p>
              <ul className="mt-5 grid gap-1 text-lg leading-relaxed">
                <li>Lundi au vendredi, 10h00–19h00</li>
                <li>Samedi, 10h00–16h00</li>
                <li>Dimanche, fermé</li>
              </ul>
              <p className="mt-5">
                <a href="tel:+212710090021" className="text-xl font-semibold">
                  +212 710 09 00 21
                </a>
              </p>
              <p className="mt-4 text-lg">
                <a href={MAPS} className="font-semibold underline">
                  Ouvrir l’adresse sur Google Maps
                </a>
              </p>
              <p className="mt-2 text-lg">
                <a href={MAPS} className="font-semibold underline">
                  121 avis, 4,9/5 sur Google
                </a>
              </p>
            </div>
            <VisitForm />
          </div>
        </section>
      </main>

      <footer className="bg-detroit text-papier">
        <div className="mx-auto grid max-w-6xl gap-2 px-5 py-8 text-lg sm:px-8">
          <p className="text-xl font-extrabold">Agence 139</p>
          <p>Rue Amr Ibn Ass, n° 68, RDC MA1, Tanger</p>
          <p>
            <a href="tel:+212710090021" className="font-semibold">
              +212 710 09 00 21
            </a>
          </p>
          <p>ICE 003149170000088</p>
          <p>RC 130883 Tanger</p>
        </div>
      </footer>
    </>
  );
}
