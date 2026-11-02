import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { SITE } from "@/lib/site";
import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollRotatingBadge from "@/components/ScrollRotatingBadge";
import RevealObserver from "@/components/RevealObserver";

// Self-hosted Roboto (body). Files under src/app/fonts (OFL licensed).
const roboto = localFont({
  src: [
    { path: "../fonts/roboto-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/roboto-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/roboto-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

// Fallback for the display stack ONLY. Mongoose (Adobe Fonts) is the display face.
const oswald = localFont({
  src: [
    { path: "../fonts/oswald-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/oswald-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
  adjustFontFallback: false,
});

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: ui.pages.home.title, template: `%s — ${SITE.shortName}` },
    description: ui.pages.home.description,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: LOCALE_LABELS[locale].og,
      url: SITE.url,
      title: ui.pages.home.title,
      description: ui.pages.home.description,
      images: [{ url: "/media/hero-poster.jpg", width: 1920, height: 1080, alt: "Consensus" }],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    icons: { icon: "/brand/consensus-icon.svg" },
  };
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: { children: React.ReactNode } & Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUI(locale);

  return (
    <html lang={LOCALE_LABELS[locale].htmlLang} className={`${roboto.variable} ${oswald.variable}`}>
      <head>
        {SITE.adobeFontsKit ? (
          // Adobe Fonts web project (Mongoose). Set NEXT_PUBLIC_ADOBE_FONTS_KIT to the kit URL.
          <link rel="stylesheet" href={SITE.adobeFontsKit} />
        ) : null}
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
          >
            {ui.a11y.skip}
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter locale={locale} />
          <ScrollRotatingBadge />
          <RevealObserver />
        </LocaleProvider>
      </body>
    </html>
  );
}
