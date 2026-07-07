import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          1. Controller
        </h2>
        <p>
          The controller responsible for data processing on this website
          within the meaning of the General Data Protection Regulation (GDPR)
          is:
          <br />
          RT Digital UG (haftungsbeschränkt) i.G.
          <br />
          Fontanestraße 11
          <br />
          14193 Berlin, Germany
          <br />
          hello@clubdesnageurs.com
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          2. Overview of Data Processing
        </h2>
        <p>
          This page provides a general overview of what happens to your
          personal data when you visit this website. Personal data is any
          data that could personally identify you. This website is currently
          a static informational site with no user accounts, sign-up forms,
          or tracking features.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          3. Legal Basis for Processing
        </h2>
        <p>
          Where we process personal data, we rely on the legal bases set out
          in Art. 6 GDPR, including consent (Art. 6(1)(a)), performance of a
          contract (Art. 6(1)(b)), and legitimate interests (Art. 6(1)(f)).
          The technical server log processing described below relies on our
          legitimate interest (Art. 6(1)(f)) in operating and securing this
          website.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          4. Data Collected When Visiting This Website
        </h2>
        <p>
          When you visit this website, our hosting provider automatically
          processes standard server log data, such as your IP address,
          browser and device information, the date and time of access, and
          the page requested. This data is used solely to operate and secure
          the website and is not combined with other data sources. This
          website does not use cookies or any analytics/tracking tools.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          5. Contact Data
        </h2>
        <p>
          This website does not currently offer a contact form. If you email
          us at hello@clubdesnageurs.com, we use the information you provide
          only to respond to your inquiry.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          6. Your Rights
        </h2>
        <p>
          Under the GDPR, you have the right to access (Art. 15), rectify
          (Art. 16), erase (Art. 17), restrict (Art. 18), and object (Art.
          21) to the processing of your personal data, as well as the right
          to data portability (Art. 20). To exercise these rights, please
          contact us using the details above.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          7. Right to Lodge a Complaint
        </h2>
        <p>
          You have the right to lodge a complaint with a data protection
          supervisory authority regarding our processing of your personal
          data. The competent authority for our location is the Berliner
          Beauftragte für Datenschutz und Informationsfreiheit (Berlin
          Commissioner for Data Protection and Freedom of Information).
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          8. Data Security
        </h2>
        <p>
          We use appropriate technical and organizational measures to protect
          your data against loss, misuse, or unauthorized access.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. The current
          version is always available on this page.
        </p>
      </section>
    </LegalPageLayout>
  );
}
