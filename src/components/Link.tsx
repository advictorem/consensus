"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localeHref } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

/** next/link that automatically prefixes internal hrefs for the active locale. */
export default function Link({ href, ...rest }: ComponentProps<typeof NextLink> & { href: string }) {
  const locale = useLocale();
  return <NextLink href={localeHref(href, locale)} {...rest} />;
}
