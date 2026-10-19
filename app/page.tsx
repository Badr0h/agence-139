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

function Lieu({ bien, miroir }: { bien: Bien; miroir?: boolean }) {
  return (
    <article
      className={`relative lg:grid lg:min-h-[92vh] lg:grid-cols-2 ${miroir ? "lg:[&>figure]:order-2" : ""}`}
    >
      <figure className="relative h-[calc(100svh-4.75rem)] lg:h-full lg:min-h-[92vh]">
        <Image
          src={bien.photo}
          alt={bien.photoAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover ${bien.cadrage}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-encre from-0% via-encre/80 via-42% to-transparent to-72% lg:hidden" />
      </figure>
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 text-papier lg:static lg:flex lg:flex-col lg:justify-center lg:bg-papier lg:px-14 lg:py-16 lg:text-encre">
        <h2 className="max-w-[16ch] font-display text-4xl leading-[1.05] font-medium lg:text-5xl">
          {bien.titre}
        </h2>
        <p className="mt-2 text-lg text-papier/85 lg:mt-3 lg:text-pierre">{bien.quartier}</p>
        <p className="mt-3 max-w-[36ch] text-lg leading-snug lg:mt-4 lg:leading-relaxed">
          {bien.surface}. {bien.pieces}. {bien.precisions}
        </p>
        <p className="mt-4 font-display text-4xl leading-none font-medium lg:mt-6 lg:text-5xl">
          {bien.prix}
        </p>
        <a
          href={messageVisite(bien)}
          className="mt-5 inline-flex h-14 w-full items-center justify-center bg-papier text-lg font-medium text-encre lg:mt-6 lg:w-fit lg:bg-encre lg:px-8 lg:text-papier"
        >
          Demander une visite
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  const [bella, city, villa] = biens;

  return (
    <>
      <main>
        <section className="relative min-h-[100svh] text-papier">
          <Image
            src="/biens/chambre-mer.jpg"
            alt="Chambre de l’appartement du Tanger City Center, vue sur la mer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-encre/80 via-encre/20 to-transparent" />
          <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pt-16 pb-28 md:px-14 md:pb-16">
            <p className="text-lg">Rue Amr Ibn Ass, Tanger</p>
            <h1 className="mt-3 max-w-[12ch] font-display text-5xl leading-[0.95] font-medium sm:text-7xl">
              Agence 139
            </h1>
            <p className="mt-4 max-w-[18ch] text-2xl leading-snug sm:text-3xl">
              Achat, vente et location à Tanger.
            </p>
            <p className="mt-3 max-w-[28ch] text-lg leading-relaxed text-papier/90">
              Bella Vista, Tanger City Center, Nouinouich.
            </p>
            <a
              href={visiteGenerale}
              className="mt-8 hidden h-14 w-fit items-center justify-center bg-papier px-8 text-lg font-medium text-encre md:inline-flex"
            >
              Demander une visite
            </a>
          </div>
        </section>

        {bella ? <Lieu bien={bella} /> : null}
        {city ? <Lieu bien={city} miroir /> : null}
        {villa ? <Lieu bien={villa} /> : null}

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

      <footer className="border-t border-ligne pb-28 md:pb-0">
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

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ligne bg-papier px-4 py-3 md:hidden">
        <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3">
          <a
            href="tel:+212710090021"
            className="flex h-12 items-center justify-center text-base font-medium"
          >
            Appeler
          </a>
          <a
            href={visiteGenerale}
            className="flex h-12 items-center justify-center bg-encre text-base font-medium text-papier"
          >
            Demander une visite
          </a>
        </div>
      </div>
    </>
  );
}
