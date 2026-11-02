import type { Capability } from "../types";

export const CAPABILITIES_ES: Record<string, Pick<Capability, "title" | "short" | "description" | "services">> = {
  "strategy-insights": {
    title: "Estrategia e insights",
    short: "Posicionamiento de marca, investigación de audiencias, mensajes, planeación estratégica, asuntos públicos y desarrollo de campañas.",
    description:
      "Todo programa con sentido empieza por entender: quién importa, qué cree y qué lo va a mover. Combinamos cuatro décadas de criterio estratégico con investigación, datos e inteligencia de audiencias para dar forma a posicionamientos, mensajes y planes que se sostienen en el mundo real.",
    services: [
      "Posicionamiento de marca",
      "Investigación de audiencias y grupos de interés",
      "Desarrollo de mensajes",
      "Planeación de comunicación estratégica",
      "Estrategia de asuntos públicos",
      "Desarrollo de campañas",
      "Mapeo de temas y planeación de escenarios",
    ],
  },
  "public-relations-reputation": {
    title: "Relaciones públicas y reputación",
    short: "Relaciones con medios, comunicación corporativa, manejo de crisis, reputación y gestión de temas críticos.",
    description:
      "La reputación se construye antes de ponerse a prueba. Ayudamos a las organizaciones a ganar cobertura relevante, comunicar con claridad bajo presión y gestionar los temas que definen cómo las ven el público, la prensa y quienes toman decisiones de política pública.",
    services: [
      "Relaciones con medios",
      "Comunicación corporativa",
      "Comunicación y respuesta ante crisis",
      "Gestión de temas críticos",
      "Visibilidad ejecutiva y liderazgo de opinión",
      "Estrategia de reputación",
      "Capacitación para medios",
    ],
  },
  "creative-storytelling": {
    title: "Creatividad y storytelling",
    short: "Branding, identidad, redacción creativa, producción audiovisual, estrategia de contenido, diseño, fotografía y motion.",
    description:
      "La estrategia dice qué comunicar. La creatividad hace que la gente lo sienta. Nuestro equipo creativo interno, Consensus Creative, convierte el conocimiento en identidad, cine, diseño y contenido que las personas recuerdan y comparten.",
    services: [
      "Identidad de marca y diseño",
      "Redacción creativa y editorial",
      "Producción de cine y video",
      "Fotografía",
      "Motion y animación",
      "Estrategia de contenido",
      "Creatividad para campañas",
    ],
  },
  "digital-technology": {
    title: "Digital y tecnología",
    short: "Comunicación digital, sitios web, redes sociales, campañas digitales, analítica, inteligencia de audiencias e insights verificados asistidos por IA.",
    description:
      "La tecnología cambia la forma en que nos comunicamos; las personas le dan sentido. Construimos experiencias y campañas digitales fundamentadas en analítica e inteligencia de audiencias, incluida la escucha social impulsada por IA a través de nuestro socio estratégico, AlphaVu, para que cada canal trabaje con más fuerza y más inteligencia.",
    services: [
      "Estrategia digital",
      "Sitios web y experiencias digitales",
      "Estrategia y gestión de redes sociales",
      "Campañas digitales pagadas y orgánicas",
      "Analítica y medición",
      "Escucha social asistida por IA (con AlphaVu)",
      "Inteligencia de audiencias",
    ],
  },
  "community-culture": {
    title: "Comunidad y cultura",
    short: "Relaciones con grupos de interés, comunicación multicultural, participación comunitaria, participación pública y alcance comunitario.",
    description:
      "Los resultados más duraderos se construyen con las comunidades, no se les anuncian. Diseñamos procesos de participación auténticos, multilingües y con fluidez cultural, que integran a residentes, vecinos y grupos de interés en la conversación desde el inicio y los mantienen en ella.",
    services: [
      "Participación y alcance comunitario",
      "Mapeo y relaciones con grupos de interés",
      "Comunicación multicultural y multilingüe",
      "Programas de participación pública",
      "Reuniones comunitarias y facilitación",
      "Construcción de coaliciones",
      "Movilización de base",
    ],
  },
  "campaigns-experiences": {
    title: "Campañas y experiencias",
    short: "Concientización pública, incidencia, medios integrados, eventos, activaciones y comunicación experiencial.",
    description:
      "Cuando un mensaje tiene que llegar a todo el estado, o a un solo vecindario, construimos campañas integradas que conectan momentos ganados, propios, pagados y presenciales en una sola historia medible.",
    services: [
      "Campañas de concientización pública",
      "Comunicación de incidencia y para iniciativas electorales",
      "Planeación de medios integrados",
      "Eventos y activaciones",
      "Comunicación experiencial",
      "Programas de alianzas e influencers",
      "Medición de campañas",
    ],
  },
};
