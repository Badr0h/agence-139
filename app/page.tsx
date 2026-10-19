import Image from "next/image";
import { Logo } from "./logo";
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

const bouton =
  "inline-flex h-12 items-center justify-center bg-toit px-5 text-base font-medium whitespace-nowrap text-papier";

function Carte({ bien }: { bien: Bien }) {
  return (
    <article className="grid border border-ligne bg-papier md:grid-cols-[16rem_minmax(0,1fr)]">
      <figure className="relative aspect-[5/2] md:aspect-auto md:min-h-44">
        <Image
          src={bien.photo}
          alt={bien.photoAlt}
          fill
          quality={90}
          sizes="(min-width: 768px) 16rem, 100vw"
          className={`object-cover ${bien.cadrage}`}
        />
      </figure>
      <div className="flex flex-col px-4 py-4 sm:px-5">
        <p className="text-base text-pierre">{bien.quartier}</p>
        <h2 className="mt-1 font-display text-2xl leading-tight font-medium">
          {bien.titre}
        </h2>
        <p className="mt-3 font-display text-4xl leading-none font-medium text-toit">
          {bien.prix}
        </p>
        <p className="mt-3 max-w-[48ch] text-base leading-snug">
          {bien.surface}. {bien.pieces}. {bien.precisions}
        </p>
        <a href={messageVisite(bien)} className={`${bouton} mt-4 w-full sm:w-fit`}>
          Demander une visite
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <header className="border-b border-ligne bg-sable">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-8">
          <Logo className="h-11 w-auto shrink font-sans sm:h-14" />
          <a
            href="tel:+212710090021"
            className="ml-auto hidden text-lg font-medium whitespace-nowrap sm:block"
          >
            +212 710 09 00 21
          </a>
          <a href={visiteGenerale} className={`${bouton} ml-auto h-10 px-3 text-sm sm:ml-0 sm:h-12 sm:px-5 sm:text-base`}>
            Demander une visite
          </a>
        </div>
        <div className="px-4 pb-3 sm:hidden">
          <a href="tel:+212710090021" className="text-base font-medium">
            +212 710 09 00 21
          </a>
        </div>
      </header>
      <div className="h-1.5 bg-toit" />

      <main>
        <section>
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-10 lg:py-14">
            <h1 className="max-w-[14ch] font-display text-4xl leading-[1.05] font-medium sm:text-6xl lg:col-span-7 lg:self-center">
              Achat, vente et location à Tanger.
            </h1>
            <aside className="flex flex-col gap-3 bg-toit p-4 text-base leading-snug text-papier sm:gap-4 sm:p-7 sm:text-lg sm:leading-relaxed lg:col-span-5">
              <p>
                <a href={MAPS}>
                  Rue Amr Ibn Ass, n° 68, RDC MA1
                  <br />
                  Msallah, Tanger
                </a>
              </p>
              <div>
                <p>Lundi au vendredi, 10h00–19h00</p>
                <p>Samedi, 10h00–16h00</p>
                <p>Dimanche, fermé</p>
              </div>
              <a href={MAPS} className="w-fit underline">
                121 avis, 4,9/5 sur Google
              </a>
              <a
                href={visiteGenerale}
                className="mt-auto inline-flex h-12 items-center justify-center bg-papier px-5 text-base font-medium text-encre"
              >
                Demander une visite
              </a>
            </aside>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-4 pb-12 sm:px-8">
          {biens.map((bien) => (
            <Carte key={bien.id} bien={bien} />
          ))}
        </section>

        <section className="border-t border-ligne" id="agence">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:py-16">
            <div>
              <h2 className="font-display text-4xl leading-tight font-medium">
                Demander une visite
              </h2>
              <p className="mt-4 max-w-[34ch] text-xl leading-relaxed">
                Indiquez votre nom, votre téléphone et le bien. Le message
                s’ouvre dans WhatsApp.
              </p>
            </div>
            <VisitForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-ligne">
        <div className="mx-auto grid max-w-6xl gap-1 px-4 py-8 text-base text-pierre sm:px-8">
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
