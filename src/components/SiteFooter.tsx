import Image from "next/image";
import Link from "@/components/Link";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { CONTACT } from "@/content/contact";
import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import CurrentYear from "./CurrentYear";
import WordmarkReveal from "./WordmarkReveal";
import SocialIcon, { socialKey } from "./SocialIcons";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const ui = getUI(locale);
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Palm-lined LA skyline sits behind the wordmark at the very bottom, fading up into black */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62vh] max-h-[720px] min-h-[380px]">
        <Image
          src="/images/la/palms-dtla-sunset.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_60%] opacity-75 grayscale-[25%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="container-x relative pt-[clamp(6rem,14vh,10rem)]">
        {/* Main CTA + supporting paragraph */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Link href="/contact" className="group inline-block lg:col-span-7" aria-label={ui.nav.cta}>
            <span className="display gradient-fill-hover block leading-[0.82]" style={{ fontSize: "var(--fs-footer)" }}>
              {ui.nav.cta}.
            </span>
          </Link>
          <p className="t-body max-w-[46ch] text-white/75 lg:col-span-5 lg:pb-[0.4em]" data-reveal>
            {ui.common.footerCta}
          </p>
        </div>

        {/* Nav + contact + social */}
        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-12 border-t border-white/10 pt-12 md:grid-cols-12">
          <nav aria-label={ui.a11y.footerNav} className="md:col-span-5">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {FOOTER_NAV.map((item) =>
                item.external ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line t-label inline-flex items-center gap-2 text-white/80 hover:text-white"
                    >
                      {ui.nav[item.key]}
                      <span aria-hidden="true" className="text-[0.7em] opacity-60">
                        ↗
                      </span>
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line t-label text-white/80 hover:text-white">
                      {ui.nav[item.key]}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="t-label mb-4 text-white/40">{ui.common.getInTouch}</p>
            <ul className="space-y-3 text-[1.05rem]">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-line">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneHref}`} className="link-line">
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-white/50">
              {ui.common.serving}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="t-label mb-4 text-white/40">{ui.common.follow}</p>
            <ul className="space-y-4">
              {CONTACT.social
                .map((s) => ({ ...s, key: socialKey(s.label) }))
                .filter((s) => s.key)
                .map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-white/80 hover:text-white">
                      <SocialIcon name={s.key!} className="transition-transform duration-300 group-hover:scale-110" />
                      <span className="link-line t-label">{s.label}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Signature wordmark */}
        <div className="mt-[clamp(4rem,9vw,8rem)]">
          <WordmarkReveal />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 pr-20 text-xs text-white/40 md:flex-row md:items-center md:justify-between md:pr-28">
          <p>
            © <CurrentYear /> {SITE.name} {ui.common.rights}
          </p>
          <p className="font-body text-xs tracking-normal text-white/50">{ui.common.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
