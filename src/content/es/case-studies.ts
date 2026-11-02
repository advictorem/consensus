import type { CaseStudy } from "../types";

export const CASE_STUDIES_ES: Record<
  string,
  Pick<CaseStudy, "title" | "overview" | "challenge" | "insight" | "strategy" | "execution" | "impact"> & { impactStats?: CaseStudy["impactStats"] }
> = {
  "california-lottery": {
    title: "Campaña de concientización pública Mission Education",
    overview:
      "La California Lottery existe para generar financiamiento complementario para la educación pública. Su reto no era el conocimiento de la Lotería, sino la comprensión de, y la confianza en, hacia dónde va el dinero.",
    challenge:
      "Traducir un mecanismo de financiamiento estatal en algo tangible y creíble para los californianos, incluido un mercado hispano que partía del nivel de confianza más bajo.",
    insight:
      "La gente no confía en las instituciones; confía en las personas. Los mensajeros más creíbles eran los maestros y estudiantes que se benefician de las contribuciones, hablando con sus propias palabras, en sus propias aulas, en inglés y en español.",
    strategy:
      "Una campaña bilingüe, basada en historias y centrada en voces auténticas y escuelas reales, diseñada para mover la confianza y el sentimiento, no solo las impresiones.",
    execution:
      "Películas de campaña, minidocumentales, fotografía, video vertical pensado para redes sociales, piezas gráficas y mensajes de campaña desplegados en televisión, canales digitales, redes sociales y canales comunitarios en todo el estado.",
    impact:
      "Según lo reportado en la presentación de capacidades 2025 de Consensus, la confianza del mercado estatal subió del 37% al 60% y la del mercado hispano del 35% al 59%, junto con mejoras en el sentimiento positivo y la intención de juego.",
    impactStats: [
      { value: "60%", label: "Confianza estatal (desde 37%)" },
      { value: "59%", label: "Confianza del mercado hispano (desde 35%)" },
    ],
  },
  "goodman-north-america": {
    title: "Agencia de registro / comunicación estratégica",
    overview:
      "Goodman es un grupo inmobiliario industrial global que desarrolla y administra espacios logísticos y de negocios. En América del Norte, Consensus actúa como agencia de registro para la comunicación estratégica.",
    challenge:
      "Establecer y mantener una narrativa corporativa consistente ante la prensa de negocios, inversionistas, socios y comunidades locales a medida que la empresa amplía su presencia en América del Norte.",
    insight:
      "En el sector inmobiliario industrial, la credibilidad nace de la sustancia: la calidad de los activos, el compromiso de largo plazo y el papel que juega la infraestructura logística en la economía de cada comunidad que toca.",
    strategy:
      "Posicionamiento disciplinado y relaciones con medios basadas en la relación con la prensa de negocios y especializada, alineadas con la comunicación hacia la comunidad en los mercados en desarrollo.",
    execution: "Posicionamiento corporativo, estrategia de anuncios, relaciones con medios, visibilidad ejecutiva y asesoría continua.",
    impact: "Resultados por publicarse a partir de la presentación de capacidades, previa aprobación del cliente.",
  },
  nestle: {
    title: "Comunicación de crisis — ciudad de Ripon",
    overview:
      "Consensus apoyó a Nestlé con comunicación de crisis y participación de grupos de interés en relación con un tema ambiental en la ciudad de Ripon, California.",
    challenge:
      "Las preocupaciones ambientales reúnen a reguladores, residentes, activistas y prensa en una sola conversación que avanza rápido. La empresa necesitaba comunicar con precisión y capacidad de respuesta sin adelantarse a los hechos.",
    insight:
      "El silencio se lee como culpa; la manipulación se lee como desprecio. La confianza se preserva diciendo lo que se sabe, lo que se está haciendo y lo que aún no se sabe, de manera consistente y a todos.",
    strategy:
      "Un solo conjunto de hechos para cada grupo de interés, coordinado con los reguladores y el equipo legal, y actualizado conforme evolucionaba la situación.",
    execution: "Respuesta ante la crisis, desarrollo de mensajes, materiales de información pública, comunicación comunitaria y participación de grupos de interés.",
    impact: "Resultados por publicarse previa aprobación del cliente, con la debida sensibilidad en cuanto a los hechos.",
  },
  "hollywood-bowl": {
    title: "Relaciones comunitarias para un recinto emblemático",
    overview:
      "El Hollywood Bowl es uno de los recintos al aire libre más celebrados del mundo, y se ubica en un vecindario residencial en las colinas. Consensus apoya a la LA Phil y a Live Nation Hewitt Silva con relaciones comunitarias, participación vecinal y estrategia de comunicación.",
    challenge:
      "Sostener la buena voluntad del vecindario durante una temporada intensa de tráfico, operaciones y cambios, mientras se gestionan las expectativas de residentes, consejos vecinales y agencias municipales.",
    insight: "Las instituciones que la gente más quiere son las que actúan como vecinos. Escuchar desde el inicio y responder de forma visible importa más que cualquier mensaje por sí solo.",
    strategy: "Participación continua y bidireccional con los grupos de interés como socios, respaldada por una comunicación clara sobre las operaciones y los cambios.",
    execution: "Mapeo de grupos de interés, alcance vecinal, reuniones comunitarias y apoyo en comunicación estratégica.",
    impact: "Resultados por publicarse previa aprobación del cliente.",
  },
  "expo-line-phase-2": {
    title: "Asuntos públicos y comunicación de obra para la Fase 2 de la Expo Line",
    overview:
      "La Expo Line extendió el tren ligero de Culver City a Santa Monica. Tras los retrasos iniciales de la Fase 1, la Authority contrató a Consensus para asegurar que la segunda fase de construcción fuera bien recibida por las comunidades a lo largo del trazado.",
    challenge: "Reconstruir la confianza del público y mantener informados a residentes y negocios durante años de impactos de construcción en varias ciudades.",
    insight: "La fatiga por la construcción aparece cuando la gente se siente sorprendida. La previsibilidad, saber qué viene y a quién llamar, mantiene a la comunidad del lado del proyecto.",
    strategy: "Un programa de información proactivo y permanente, combinado con una resolución ágil de problemas y una presencia visible en la comunidad.",
    execution: "Relaciones públicas, sitio web del proyecto, alertas de construcción, redes sociales, boletines y reuniones comunitarias a lo largo de la Fase 2.",
    impact: "La comunicación de obra de la Fase 2 sostuvo el apoyo de la comunidad hasta su conclusión. (Fuente: consensusinc.com, Construction.)",
  },
  "west-la-va-master-plan": {
    title: "Relaciones comunitarias para el Plan Maestro del VA de West Los Angeles",
    overview:
      "El VA se propuso revitalizar su campus de 388 acres en West Los Angeles, en Brentwood, como una comunidad residencial para veteranos en situación de calle crónica: un plan con visibilidad nacional e intenso interés local.",
    challenge: "Involucrar a veteranos, vecinos, activistas y funcionarios electos en un proceso de planeación maestra para un campus federal con una historia compleja.",
    insight: "Un plan de esta trascendencia necesita un proceso en el que la gente pueda confiar: transparente, accesible y genuinamente abierto a las aportaciones.",
    strategy: "Relaciones comunitarias estructuradas en apoyo al plan maestro desde enero de 2015, con información consistente y múltiples vías de participación.",
    execution: "Reuniones comunitarias, sesiones informativas con grupos de interés, información pública y apoyo continuo en comunicación para el plan maestro y las fases posteriores de EIR/EA y construcción.",
    impact: "Apoyó la adopción y el avance del Plan Maestro del VA de West LA. (Fuente: consensusinc.com, Public Facilities.)",
  },
  "tule-wind": {
    title: "Tule Wind Power — 'Cut the Green Tape'",
    overview:
      "Un proyecto eólico de aproximadamente 200 megavatios en el este del condado de San Diego enfrentó una oposición fuerte y organizada en su camino hacia la aprobación del condado.",
    challenge: "Construir y demostrar el apoyo de la comunidad a un proyecto de energía renovable en un entorno de permisos disputado.",
    insight: "Los partidarios existían, pero guardaban silencio; los opositores hacían ruido. La tarea era darle a la mayoría una forma clara y sencilla de hacerse escuchar.",
    strategy: "Una campaña de base, 'Cut the Green Tape', que movilizó a los partidarios para hacer llegar su opinión a quienes toman las decisiones.",
    execution: "Alcance a partidarios que generó cientos de cartas, correos electrónicos y mensajes en redes sociales, además de asistencia a cuatro audiencias públicas decisivas.",
    impact: "El proyecto fue aprobado por la Comisión de Planeación del Condado y la Junta de Supervisores. (Fuente: consensusinc.com, Energy & Water.)",
  },
  "burbank-town-center": {
    title: "Remodelación del Burbank Town Center — 'I Heart Burbank'",
    overview:
      "Una empresa conjunta se propuso remodelar el centro comercial Burbank Town Center y sus predios aledaños para convertirlos en un verdadero núcleo urbano, con una mayor densidad compensada por la sustitución de una tienda IKEA.",
    challenge: "Ganar el apoyo vecinal y cívico para una remodelación densa y transformadora en una ciudad que examina el crecimiento con lupa.",
    insight: "Los residentes apoyan los cambios que sienten como propios. Una campaña construida sobre el orgullo cívico, y no sobre mensajes de desarrollador, invitó a la comunidad a participar.",
    strategy: "La campaña comunitaria 'I Heart Burbank', que combinó organización digital con participación presencial.",
    execution: "Identidad de campaña, sitio web y organización digital, alcance comunitario y movilización de apoyo antes de las aprobaciones.",
    impact: "Reconocida por PRSA Los Angeles. (Fuente: consensusinc.com, Real Estate & Land Use.)",
  },
  "crespi-carmelite": {
    title: "Relaciones comunitarias para un plan de modernización de campus",
    overview:
      "Una escuela preparatoria católica en Encino buscó la aprobación de la City of Los Angeles para una instalación acuática, laboratorios STEM, un centro deportivo y un estacionamiento en un vecindario con historia de oposición al desarrollo.",
    challenge: "Obtener las aprobaciones para una ampliación significativa del campus en una zona contraria al desarrollo.",
    insight: "Los vecinos necesitaban ver a la escuela primero como un vecino, y al plan como un beneficio para la comunidad, no solo para el campus.",
    strategy: "Relaciones comunitarias basadas en la relación personal, apoyadas por un programa de redes sociales que dio voz a los partidarios.",
    execution: "Alcance vecinal, participación de grupos de interés, apoyo en audiencias públicas y redes sociales.",
    impact: "Reconocida con dos PRSA Los Angeles Awards of Excellence, por relaciones comunitarias y por redes sociales. (Fuente: consensusinc.com, Education.)",
  },
  "honeywell-remediation": {
    title: "Relaciones comunitarias para sitios de remediación de la Región Oeste",
    overview:
      "Desde 2003, Consensus ha brindado relaciones comunitarias, relaciones públicas y asuntos públicos para más de una docena de sitios de remediación de Honeywell en la costa oeste.",
    challenge: "Comunicar de manera consistente y creíble sobre la limpieza de aguas subterráneas, suelo y aire en numerosos sitios, comunidades y reguladores a lo largo de dos décadas.",
    insight: "La comunicación de remediación tiene éxito cuando se diseña junto con los reguladores y se entrega a los residentes en lenguaje sencillo, desde el inicio y con frecuencia.",
    strategy: "Una metodología de participación repetible y alineada con los reguladores, aplicada sitio por sitio.",
    execution: "Coordinación con DTSC, CalEPA, AQMD, RWQCB y OEHHA; reuniones comunitarias, materiales, líneas telefónicas de atención y relaciones continuas con grupos de interés.",
    impact: "Una relación continua con el cliente desde 2003 que abarca más de una docena de sitios. (Fuente: consensusinc.com, Environmental Remediation.)",
  },
};
