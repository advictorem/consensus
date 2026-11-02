import type { Metadata } from "next";
import InteriorHero from "@/components/InteriorHero";
import ContactForm from "@/components/ContactForm";
import LocationPanels from "@/components/LocationPanels";
import SectionHeader from "@/components/SectionHeader";
import { CONTACT } from "@/content/contact";
import { getLocations } from "@/content";
import { alternates, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const ui = getUI(isLocale(locale) ? locale : "en");
  return { title: ui.pages.contact.title, description: ui.pages.contact.description, alternates: alternates("/contact") };
}

export default async function ContactPage({ params }: Params) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  const LOCATIONS = getLocations(locale);
  return (
    <>
      <InteriorHero
        eyebrow={ui.common.contactEyebrow}
        lines={ui.pages.contact.h1}
        copy={ui.pages.contact.intro}
        image={{ src: "/images/la/venice-coast-aerial.jpg", alt: "Sunlit Southern California coastline from above", position: "50% 45%" }}
        compact
      />

      <section className="container-x section-y" aria-labelledby="form-heading">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="form-heading" eyebrow={ui.common.startConversation} lines={ui.common.tellUs} size="h3" />
            <dl className="mt-12 space-y-8">
              {CONTACT.email && (
                <div data-reveal>
                  <dt className="t-label text-white/40">{ui.common.email}</dt>
                  <dd className="mt-2 text-[1.1rem]">
                    <a href={`mailto:${CONTACT.email}`} className="link-line">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.phone && (
                <div data-reveal>
                  <dt className="t-label text-white/40">{ui.common.phone}</dt>
                  <dd className="mt-2 text-[1.1rem]">
                    <a href={`tel:${CONTACT.phoneHref}`} className="link-line">
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              )}
              {CONTACT.social.length > 0 && (
                <div data-reveal>
                  <dt className="t-label text-white/40">{ui.common.follow}</dt>
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
        <SectionHeader id="locations" eyebrow={ui.common.whereWeAre} lines={ui.common.northSouth} className="mb-14" />
        <LocationPanels locations={LOCATIONS} />
      </section>
    </>
  );
}
