import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Imprint — Club des Nageurs",
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Imprint">
      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          Service Provider (Diensteanbieter gemäß § 5 TMG)
        </h2>
        <p>
          RT Digital UG (haftungsbeschränkt) i.G.
          <br />
          Fontanestraße 11
          <br />
          14193 Berlin, Germany
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          Represented by
        </h2>
        <p>Roman Tayupov</p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          Contact
        </h2>
        <p>Email: hello@clubdesnageurs.com</p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          Register Entry
        </h2>
        <p>
          Register Court: Amtsgericht Berlin-Charlottenburg
          <br />
          Register Number: Not yet issued — the company is in formation (UG
          i.G.) and not yet entered in the commercial register.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          Responsible for Content (§ 18 Abs. 2 MStV)
        </h2>
        <p>
          Roman Tayupov
          <br />
          Fontanestraße 11, 14193 Berlin, Germany
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          EU Dispute Resolution
        </h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (OS):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="underline hover:text-zinc-900 dark:hover:text-white"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Our email address can be found above. We are not obliged or
          willing to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>
      </section>
    </LegalPageLayout>
  );
}
