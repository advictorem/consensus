import { HOME } from "../home";

export const HOME_ES: typeof HOME = {
  hero: {
    lines: ["Crear sentido.", "Mover a las personas."],
    copy: "Unimos estrategia, creatividad y tecnología para contar historias que conectan a las personas, generan confianza e inspiran a la acción.",
    primary: { label: "Explora nuestro trabajo", href: "#work" },
  },
  who: {
    lines: ["Somos Consensus."],
    paragraphs: [
      "Toda marca tiene una historia. Toda comunidad tiene una voz. Y toda idea con sentido merece ser escuchada.",
      "Trabajamos en la intersección entre las personas, el propósito y lo posible: convertimos retos complejos en narrativas claras, relaciones auténticas y comunicaciones que hacen avanzar las cosas.",
    ],
    cta: { label: "Nosotros", href: "/about" },
  },
  work: {
    title: "Nuestro trabajo",
    cta: { label: "Ver todo el trabajo", href: "/work" },
  },
  capabilities: {
    eyebrow: "Qué hacemos",
    lines: ["Pensamiento en grande.", "Impacto en el mundo real."],
    intro:
      "Las mejores comunicaciones no viven en compartimentos aislados. Conectamos conocimiento, estrategia, creatividad y tecnología para encontrar a las personas donde están, y llevarlas hacia lo que importa.",
    cta: { label: "Explore nuestras capacidades", href: "/what-we-do" },
  },
  clients: {
    label: "Con quiénes trabajamos",
  },
  stats: [
    { value: 30, suffix: "+", label: "Años en el negocio" },
    { value: 25, label: "Industrias" },
    { value: 17, label: "Premios de la industria" },
    { value: 380, label: "Clientes atendidos" },
  ],
  difference: {
    lines: ["Hechos para", "lo que sigue."],
    copy: "La experiencia nos da perspectiva. La curiosidad nos mantiene en movimiento. Unimos un pensamiento estratégico experimentado con talento creativo diverso, tecnología inteligente y la convicción compartida de que las ideas más fuertes nacen de entender a las personas.",
    points: [
      { k: "Experiencia", v: "Cuatro décadas navegando retos de comunicación complejos." },
      { k: "Agilidad", v: "Un equipo pequeño y senior que se mueve a la velocidad de la conversación." },
      { k: "Perspectiva", v: "Trayectorias, disciplinas y formas de ver el mundo diversas." },
      { k: "Fluidez", v: "Tecnológicamente fluidos, inconfundiblemente humanos." },
    ],
    cta: { label: "Cómo trabajamos", href: "/what-we-do" },
  },
  journal: {
    eyebrow: "Insights",
    lines: ["Ideas que vale", "la pena compartir."],
    cta: { label: "Lea nuestros insights", href: "/insights" },
  },
};
