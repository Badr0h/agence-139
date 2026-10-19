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

function Carte({ bien }: { bien: Bien }) {
  return (
    <article className="border border-ligne">
      <figure className="relative aspect-[4/3]">
        <Image
          src={bien.photo}
          alt={bien.photoAlt}
          fill
          quality={90}
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`object-cover ${bien.cadrage}`}
        />
      </figure>
      <div className="px-4 py-4">
        <p className="text-base text-pierre">{bien.quartier}</p>
        <h2 className="mt-1 font-display text-2xl leading-tight font-medium">
          {bien.titre}
        </h2>
        <p className="mt-3 font-display text-3xl leading-none font-medium text-mer">
          {bien.prix}
        </p>
        <p className="mt-3 text-base leading-snug">
          {bien.surface}. {bien.pieces}. {bien.precisions}
        </p>
        <a
          href={messageVisite(bien)}
          className="mt-4 inline-flex h-12 w-full items-center justify-center bg-mer text-base font-medium text-papier"
        >
          Demander une visite
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ligne bg-papier">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2">
          <div className="min-w-0">
            <h1 className="font-display text-xl leading-none font-medium sm:text-2xl">
              Agence 139
            </h1>
            <a
              href="tel:+212710090021"
              className="mt-1 block text-sm font-medium whitespace-nowrap sm:hidden"
            >
              +212 710 09 00 21
            </a>
          </div>
          <a
            href="tel:+212710090021"
            className="hidden text-base font-medium whitespace-nowrap sm:block"
          >
            +212 710 09 00 21
          </a>
          <a
            href={visiteGenerale}
            className="ml-auto inline-flex h-10 shrink-0 items-center justify-center bg-mer px-3 text-sm font-medium whitespace-nowrap text-papier sm:h-11 sm:px-4 sm:text-base"
          >
            Demander une visite
          </a>
        </div>
      </header>

      <main>
        <section className="relative h-44 md:h-[32rem]">
          <Image
            src="/biens/hero.jpg"
            alt="Coucher de soleil sur la piscine de la villa à Nouinouich"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-encre/80 to-transparent px-4 pt-10 pb-3 text-lg leading-snug text-papier md:hidden">
            Achat, vente et location à Tanger.
          </p>
          <div className="absolute bottom-8 left-8 hidden max-w-md bg-papier px-6 py-5 md:block">
            <p className="font-display text-4xl leading-none font-medium">Agence 139</p>
            <p className="mt-2 max-w-[22ch] text-xl leading-snug">
              Achat, vente et location à Tanger.
            </p>
            <a
              href={visiteGenerale}
              className="mt-4 inline-flex h-12 items-center justify-center bg-mer px-5 text-base font-medium text-papier"
            >
              Demander une visite
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-3 pb-8 md:grid-cols-3 md:py-12">
          {biens.map((bien) => (
            <Carte key={bien.id} bien={bien} />
          ))}
        </section>

        <section className="border-t border-ligne" id="agence">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
            <div>
              <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl">
                L’agence
              </h2>
              <p className="mt-6 text-xl leading-relaxed">
                Rue Amr Ibn Ass, n° 68, RDC MA1
                <br />
                Msallah, Tanger
              </p>
              <ul className="mt-6 grid gap-1 text-lg leading-relaxed">
                <li>Lundi au vendredi, 10h00–19h00</li>
                <li>Samedi, 10h00–16h00</li>
                <li>Dimanche, fermé</li>
              </ul>
              <p className="mt-6">
                <a href="tel:+212710090021" className="text-xl font-medium">
                  +212 710 09 00 21
                </a>
              </p>
              <p className="mt-4 text-lg">
                <a href={MAPS} className="underline">
                  Ouvrir l’adresse sur Google Maps
                </a>
              </p>
              <p className="mt-2 text-lg">
                <a href={MAPS} className="underline">
                  121 avis, 4,9/5 sur Google
                </a>
              </p>
            </div>
            <VisitForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-ligne">
        <div className="mx-auto grid max-w-6xl gap-1 px-5 py-8 text-base text-pierre sm:px-8">
          <p className="font-display text-2xl font-medium text-encre">Agence 139</p>
          <p>Rue Amr Ibn Ass, n° 68, RDC MA1, Tanger</p>
          <p>
            <a href="tel:+212710090021" className="text-encre">
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
