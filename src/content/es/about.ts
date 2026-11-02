import type { Stat } from "@/components/StatisticsGrid";
import { ABOUT } from "../about";

export const ABOUT_ES: typeof ABOUT = {
  hero: {
    lines: ["Otra forma", "de pensar."],
    copy: "Cuatro décadas de experiencia. Una convicción en el poder de las personas.",
  },
  intro: {
    lines: ["Creemos en", "el poder de", "la conexión."],
    paragraphs: [
      "Desde 1986, Consensus ha ayudado a las organizaciones a navegar el cambio, ganarse la confianza e inspirar a la acción.",
      "Nuestra base es la comunicación estratégica. Nuestra fortaleza es entender a las personas. Y nuestro futuro lo definen los pensadores creativos, tecnólogos y narradores que traen nuevas perspectivas a la mesa.",
    ],
  },
  pillars: [
    {
      number: "01",
      lines: ["Cuatro décadas.", "Visión de futuro."],
      paragraphs: [
        "La experiencia no consiste en hacer las cosas como siempre se han hecho. Consiste en saber qué funciona, hacer mejores preguntas y tener la perspectiva para navegar lo que viene.",
        "Durante 40 años hemos ayudado a las organizaciones a navegar la complejidad, construir credibilidad y convertir conversaciones en progreso.",
        "Esa base les da a nuestros clientes la confianza para enfrentar los retos del mañana.",
      ],
      image: { src: "/images/la/urban-light.jpg", alt: "Hileras de faroles antiguos restaurados iluminados de noche", position: "50% 55%" },
    },
    {
      number: "02",
      lines: ["Equipo pequeño.", "Gran perspectiva."],
      paragraphs: [
        "Somos estrategas, creadores, comunicadores, investigadores y narradores. Distintas trayectorias. Distintas disciplinas. Distintas formas de ver el mundo.",
        "Lo que nos une es una curiosidad compartida y el compromiso de crear trabajo que importa.",
        "Nuestro tamaño nos mantiene ágiles. Nuestra experiencia colectiva nos hace formidables. Y nuestra diversidad de perspectivas hace que las ideas sean más fuertes.",
      ],
      image: { src: "/images/la/griffith-observatory.jpg", alt: "Visitantes en la terraza del Observatorio Griffith sobre Los Ángeles", position: "25% 50%" },
    },
  ],
  stats: {
    lines: ["Experiencia", "con la que puede contar."],
    items: [
      { value: "1986", label: "Año de fundación" },
      { value: "40", label: "Años de experiencia en 2026" },
      { value: "30+", label: "Profesionales de comunicación y creatividad" },
      { value: "2", label: "Socios líderes" },
    ] as Stat[],
    note: "El tamaño del equipo y la estructura de liderazgo reflejan la presentación de capacidades de 2025 y deben confirmarse como vigentes antes de su publicación.",
  },
  leadership: {
    lines: ["Las personas", "detrás del trabajo."],
    copy: "Estrategas senior y líderes creativos que se mantienen cerca del trabajo, y de los clientes y comunidades a los que sirve.",
  },
};
