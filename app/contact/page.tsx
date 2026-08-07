import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";
import SplitHeading from "@/app/components/SplitHeading";
import { site } from "@/lib/site";

const description =
  "Get in touch with Ali Hassan (alihassanml), an AI Engineer in Lahore, Pakistan, about agentic AI, voice agents, RAG or computer vision work.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ali Hassan, AI Engineer",
    description,
    url: `${site.url}/contact`,
    type: "website",
  },
  twitter: {
    title: "Contact Ali Hassan, AI Engineer",
    description,
  },
};

/** ContactPage → the Person it belongs to. Ties the handle, title and
 * — every profile back to one identity for search engines. */
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact#contactpage`,
  url: `${site.url}/contact`,
  name: "Contact Ali Hassan, AI Engineer",
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    alternateName: site.handle,
    jobTitle: "AI Engineer",
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: Object.values(site.links),
  },
};

const profiles = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Kaggle", href: site.links.kaggle },
  { label: "Upwork", href: site.links.upwork },
  { label: "X", href: site.links.twitter },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="mx-auto max-w-[88rem] px-6 pb-24 pt-32 lg:px-12 lg:pb-32 lg:pt-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left column: the address book */}
          <div className="lg:col-span-5">
            <p className="label">Contact · {site.location}</p>

            <SplitHeading
              text="Start a project with Ali Hassan"
              as="h1"
              immediate
              className="d-1 mt-5 font-display font-bold text-ink"
            />

            <Reveal delay={0.15}>
              <p className="lede mt-7 max-w-lg">
                Tell me the problem you are trying to solve, the data you already
                have, and the timeline you are working to. That is enough for me
                to answer with something useful. I read every message and reply
                within a day.
              </p>

              <dl className="mt-12">
                <div className="hairline flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5">
                  <dt className="label">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="link-quiet text-ink transition-colors hover:text-pine"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>

                <div className="hairline flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5">
                  <dt className="label">Location</dt>
                  <dd className="text-ink">{site.location}</dd>
                </div>

                <div className="hairline flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-5">
                  <dt className="label">Profiles</dt>
                  <dd className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                    {profiles.map((profile) => (
                      <a
                        key={profile.label}
                        href={profile.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-quiet text-ink transition-colors hover:text-pine"
                      >
                        {profile.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="hairline pt-6">
                <a
                  href={site.links.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink"
                >
                  Book a 30-minute call
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right column: the form itself is the call to action */}
          <Reveal delay={0.25} className="lg:col-span-7">
            <div className="rounded-2xl bg-oat p-8 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
