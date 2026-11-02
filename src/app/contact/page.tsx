import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import ContactForm from "@/components/ContactForm";
import LocationPanels from "@/components/LocationPanels";
import SectionHeader from "@/components/SectionHeader";
import { CONTACT, LOCATIONS } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a challenge, an idea, or a conversation worth starting? We'd love to hear it.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Contact"
        lines={["Let's make", "something matter."]}
        copy="Have a challenge, an idea, or a conversation worth starting? We'd love to hear it."
        image={{ src: "/images/la/venice-coast-aerial.jpg", alt: "Sunlit Southern California coastline from above", position: "50% 45%" }}
        compact
      />

      <section className="container-x section-y" aria-labelledby="form-heading">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="form-heading" eyebrow="Start a conversation" lines={["Tell us", "what's next."]} size="h3" />
            <dl className="mt-12 space-y-8">
              {CONTACT.email && (
                <div data-reveal>
                  <dt className="t-label text-white/40">Email</dt>
                  <dd className="mt-2 text-[1.1rem]">
                    <a href={`mailto:${CONTACT.email}`} className="link-line">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.phone && (
                <div data-reveal>
                  <dt className="t-label text-white/40">Phone</dt>
                  <dd className="mt-2 text-[1.1rem]">
                    <a href={`tel:${CONTACT.phoneHref}`} className="link-line">
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.social.length > 0 && (
                <div data-reveal>
                  <dt className="t-label text-white/40">Follow</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-5">
                    {CONTACT.social.map((s) => (
                      <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="link-line text-white/80">
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="lg:col-span-7 lg:col-start-6" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="container-x pb-[var(--section)]" aria-labelledby="locations">
        <SectionHeader id="locations" eyebrow="Where we are" lines={["North and south.", "One California."]} className="mb-14" />
        <LocationPanels locations={LOCATIONS} />
      </section>
    </>
  );
}
