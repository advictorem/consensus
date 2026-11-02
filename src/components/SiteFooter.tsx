import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { CONTACT } from "@/content/contact";
import { Arrow } from "./GhostButton";
import CurrentYear from "./CurrentYear";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Atmospheric LA skyline, faded seamlessly into black */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] min-h-[420px] max-h-[760px]">
        <Image
          src="/images/la/palms-dtla-sunset.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_35%] opacity-80 grayscale-[30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.55) 22%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.85) 78%, #000 100%)",
          }}
        />
      </div>

      <div className="container-x relative pt-[clamp(10rem,22vh,16rem)]">
        {/* Main CTA */}
        <Link
          href="/contact"
          className="group block"
          aria-label="Let's talk — go to contact page"
        >
          <span className="eyebrow mb-6 block">Great things start with a conversation.</span>
          <span className="display t-footer flex items-end gap-[0.12em] leading-[0.82]" style={{ fontSize: "var(--fs-footer)" }}>
            <span className="transition-[background-position] duration-700 group-hover:gradient-text">
              Let&rsquo;s Talk.
            </span>
            <Arrow className="mb-[0.08em] !h-[0.42em] !w-[0.42em] shrink-0 opacity-50 transition-all duration-500 group-hover:translate-x-[0.1em] group-hover:opacity-100" />
          </span>
        </Link>

        {/* Nav + contact + social */}
        <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-12 border-t border-white/10 pt-12 md:grid-cols-12">
          <nav aria-label="Footer" className="md:col-span-5">
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
                      {item.label}
                      <span aria-hidden="true" className="text-[0.7em] opacity-60">↗</span>
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="link-line t-label text-white/80 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="t-label mb-4 text-white/40">Get in touch</p>
            <ul className="space-y-3 text-[1.05rem]">
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="link-line">
                    {CONTACT.email}
                  </a>
                </li>
              )}
              {CONTACT.phone && (
                <li>
                  <a href={`tel:${CONTACT.phoneHref}`} className="link-line">
                    {CONTACT.phone}
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-6 text-sm text-white/50">
              Headquartered in Southern California.
              <br />
              Serving clients across California and beyond.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="t-label mb-4 text-white/40">Follow</p>
            <ul className="space-y-3">
              {CONTACT.social.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line t-label text-white/80 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Signature wordmark */}
        <div className="mt-[clamp(4rem,9vw,8rem)]">
          <Image
            src="/brand/consensus-wordmark.svg"
            alt="Consensus"
            width={1294}
            height={372}
            sizes="100vw"
            className="h-auto w-full select-none"
            draggable={false}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 pr-20 text-xs text-white/40 md:flex-row md:items-center md:justify-between md:pr-28">
          <p>© <CurrentYear /> {SITE.name} All rights reserved.</p>
          <p className="t-label !text-[0.68rem]">Meaningful connections. Measurable impact.</p>
        </div>
      </div>
    </footer>
  );
}
