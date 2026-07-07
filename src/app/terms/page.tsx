import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use — Club des Nageurs",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          1. Scope
        </h2>
        <p>
          These Terms of Use govern your access to and use of this website,
          operated by RT Digital UG (haftungsbeschränkt).
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          2. Provider
        </h2>
        <p>
          Details of the website operator can be found in our{" "}
          <a href="/impressum" className="underline hover:text-zinc-900 dark:hover:text-white">
            Imprint
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          3. Intellectual Property
        </h2>
        <p>
          All content on this website, including text, images, and video, is
          the property of RT Digital UG (haftungsbeschränkt) or its licensors and is
          protected by copyright and other intellectual property laws. No
          content may be reproduced or reused without prior written consent.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          4. No Warranty / Limitation of Liability
        </h2>
        <p>
          This website and its content are provided &ldquo;as is&rdquo;
          without any warranties, express or implied. RT Digital UG
          (haftungsbeschränkt) shall not be liable for any damages
          arising from the use of this website, to the extent permitted by
          law.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          5. External Links
        </h2>
        <p>
          This website may contain links to third-party websites. We have no
          influence over the content of those websites and accept no
          liability for them.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          6. Governing Law
        </h2>
        <p>
          These Terms of Use are governed by the laws of Germany, without
          regard to its conflict of law provisions. Any disputes shall be
          subject to the exclusive jurisdiction of the courts of Berlin,
          Germany, except where mandatory consumer protection law in your
          country of residence provides otherwise.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-base font-medium text-zinc-800 dark:text-zinc-200">
          7. Changes to These Terms
        </h2>
        <p>
          We may update these Terms of Use from time to time. The current
          version is always available on this page.
        </p>
      </section>
    </LegalPageLayout>
  );
}
