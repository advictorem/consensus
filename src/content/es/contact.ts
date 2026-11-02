import type { Location } from "@/components/LocationPanels";

export const LOCATIONS_ES: Location[] = [
  {
    label: "Sede principal",
    title: ["Sur de", "California"],
    note: "Con sede en el Burbank Media District del área metropolitana de Los Ángeles.",
    image: { src: "/images/la/venice-coast-aerial.jpg", alt: "Vista aérea de la costa y el muelle de la bahía de Santa Mónica", position: "60% 40%" },
  },
  {
    label: "Presencia regional",
    title: ["Norte de", "California"],
    note: "Al servicio de clientes y comunidades en el Área de la Bahía y en todo el estado.",
    image: { src: "/images/la/sf-skyline-fog.jpg", alt: "El horizonte de San Francisco emergiendo de la niebla al amanecer", position: "50% 45%" },
  },
];

/** Keyed by field `name` from CONTACT_FORM_FIELDS. */
export const CONTACT_FORM_FIELDS_ES: Record<string, { label: string; placeholder?: string; options?: string[] }> = {
  name: { label: "Su nombre" },
  title: { label: "Su cargo" },
  email: { label: "Correo electrónico" },
  organization: { label: "Organización" },
  address: { label: "Su dirección" },
  subject: { label: "Asunto del mensaje" },
  message: { label: "Su mensaje (mínimo 20 caracteres)" },
  optin: {
    label: "Manténgase en contacto",
    options: ["Recibir las últimas noticias y novedades de Consensus", "Unirse a la comunidad #NextGenConsensus"],
  },
};
