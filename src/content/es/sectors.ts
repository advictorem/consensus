import type { Sector } from "../types";

export const SECTORS_ES: Record<string, Pick<Sector, "title" | "positioning" | "summary" | "context" | "challenges" | "perspective">> = {
  "public-affairs-advocacy": {
    title: "Asuntos públicos e incidencia",
    positioning: "Hacer avanzar las políticas públicas significa, primero, mover a las personas.",
    summary:
      "Iniciativas electorales, prioridades legislativas, cambios regulatorios e iniciativas del sector público, comunicados con credibilidad y construidos sobre coaliciones que perduran.",
    context:
      "Los asuntos públicos viven en la intersección entre las políticas públicas, la política y la opinión pública. Las organizaciones que tienen éxito son las que se ganan la confianza desde el inicio, explican la complejidad con claridad y les dan a las personas una razón para participar.",
    challenges: [
      "Traducir políticas técnicas a un lenguaje que resuene con el público",
      "Construir coaliciones entre grupos de interés con intereses en competencia",
      "Sostener la atención y el apoyo más allá del ciclo de noticias",
      "Gestionar las narrativas de la oposición y la desinformación",
    ],
    perspective:
      "Hemos pasado cuatro décadas en la mesa con agencias públicas, funcionarios electos, grupos empresariales y organizaciones comunitarias. Esa experiencia nos dice que la incidencia más fuerte no es la que grita más alto: es la mejor informada, la más inclusiva y la más honesta sobre lo que se gana y lo que se cede.",
  },
  "infrastructure-mobility": {
    title: "Infraestructura y movilidad",
    positioning: "Los grandes proyectos necesitan conversaciones más grandes.",
    summary:
      "Transporte público, aviación, puertos, ferrocarril, servicios públicos y obras públicas: programas que transforman la forma en que las comunidades se mueven y viven, y la participación que gana su apoyo.",
    context:
      "La infraestructura se construye a lo largo de años y se juzga en instantes. La construcción altera los vecindarios, los cronogramas cambian y la paciencia del público es finita. La comunicación tiene que ser tan duradera como la obra misma.",
    challenges: [
      "Sostener la confianza de la comunidad durante construcciones de varios años",
      "Llegar de manera equitativa a comunidades diversas y multilingües",
      "Coordinar los mensajes entre agencias, contratistas y jurisdicciones",
      "Convertir las molestias en una historia de beneficio compartido",
    ],
    perspective:
      "Tratamos a cada residente, usuario y negocio afectado como un grupo de interés, no como una audiencia. Una participación temprana, constante y transparente es la diferencia entre un proyecto que la comunidad tolera y uno que defiende como propio.",
  },
  "real-estate-development": {
    title: "Bienes raíces y desarrollo",
    positioning: "Los buenos proyectos se ganan su lugar.",
    summary:
      "Procesos de aprobación, alcance comunitario y comunicación de marca para desarrollos que cambian el carácter de un vecindario, y que tienen que demostrar que lo merecen.",
    context:
      "El desarrollo inmobiliario es una de las actividades más disputadas a nivel local que una organización puede emprender. Las aprobaciones dependen de las relaciones con residentes, consejos vecinales, funcionarios electos y la prensa, con frecuencia mucho antes de que se coloque la primera piedra.",
    challenges: [
      "Construir apoyo vecinal antes de las audiencias públicas",
      "Atender con credibilidad las preocupaciones sobre tráfico, vivienda y medio ambiente",
      "Diferenciar un proyecto en un mercado saturado y escéptico",
      "Mantener la buena voluntad durante la construcción y el arrendamiento",
    ],
    perspective:
      "Los proyectos que se construyen son los que primero escuchan. Ayudamos a los desarrolladores a entender las prioridades de la comunidad, responder con sustancia y comunicar los beneficios de manera específica, verificable y humana.",
  },
  "consumer-corporate-brands": {
    title: "Marcas de consumo y corporativas",
    positioning: "La reputación es la marca.",
    summary:
      "Posicionamiento, relaciones con medios y comunicación corporativa para marcas de consumo y B2B que necesitan ser comprendidas por sus clientes, la prensa y las comunidades donde operan.",
    context:
      "A las marcas corporativas se les juzga por más que su producto. Cómo se presenta una empresa en la prensa de negocios, cómo maneja un trimestre difícil y cómo trata a las ciudades donde construye: todo define si la gente confía en ella.",
    challenges: [
      "Ganar cobertura creíble en la prensa de negocios y especializada",
      "Alinear la narrativa corporativa con la presencia en la comunidad local",
      "Prepararse y responder ante temas críticos y crisis",
      "Construir visibilidad ejecutiva sin sobreexposición",
    ],
    perspective:
      "Actuamos como una extensión de los equipos de comunicación corporativa, como agencia de registro para algunos y como asesores especializados para otros, aportando un enfoque disciplinado y con sensibilidad periodística al posicionamiento y la reputación.",
  },
  "culture-entertainment": {
    title: "Cultura y entretenimiento",
    positioning: "Los grandes recintos son buenos vecinos.",
    summary:
      "Comunicación y relaciones comunitarias para instituciones culturales, recintos y marcas de entretenimiento que equilibran experiencias de clase mundial con los vecindarios que las albergan.",
    context:
      "Los Ángeles es una capital cultural, y sus instituciones operan en comunidades densas, comprometidas y con voz propia. La programación, el tráfico, el ruido y el crecimiento se convierten en conversaciones públicas.",
    challenges: [
      "Sostener las relaciones vecinales durante los picos de temporada",
      "Comunicar los cambios operativos con transparencia",
      "Gestionar las expectativas de agencias municipales y residentes",
      "Proteger el cariño por la marca mientras se atienden preocupaciones reales",
    ],
    perspective:
      "Las instituciones que la gente más quiere son las que actúan como vecinos. Ayudamos a las organizaciones culturales a escuchar, responder y mantener a la comunidad comprometida con su éxito.",
  },
  "education-public-institutions": {
    title: "Educación e instituciones públicas",
    positioning: "La confianza pública es un bien público.",
    summary:
      "Campañas de concientización, comunicación con grupos de interés y programas de información pública para instituciones que sirven a todos, y que rinden cuentas a todos.",
    context:
      "Las instituciones públicas cargan con una responsabilidad única: deben comunicarse con cada residente, en cada idioma, con presupuestos limitados y bajo el máximo escrutinio. La claridad, la consistencia y la fluidez cultural no son negociables.",
    challenges: [
      "Llegar a audiencias diversas a nivel estatal y regional",
      "Demostrar el beneficio público en términos tangibles y humanos",
      "Reconstruir o proteger la confianza en las instituciones",
      "Medir la concientización y el sentimiento, no solo las impresiones",
    ],
    perspective:
      "El compromiso de la California Lottery con la educación pública es un buen ejemplo: la historia de impacto era real, pero necesitaba voces auténticas y aulas reales para ser creída. Hacemos visible el beneficio público.",
  },
  "environment-reputation": {
    title: "Medio ambiente y reputación",
    positioning: "La transparencia es la única estrategia sostenible.",
    summary:
      "Comunicación de crisis, gestión de temas críticos y participación de grupos de interés para organizaciones que enfrentan escrutinio ambiental, preguntas regulatorias y preocupación comunitaria.",
    context:
      "Los temas ambientales avanzan rápido y despiertan emociones profundas en el público. Las preguntas sobre agua, aire, uso del suelo y recursos reúnen a reguladores, activistas, prensa y vecinos en una misma conversación al mismo tiempo.",
    challenges: [
      "Responder con rapidez con información precisa y verificable",
      "Involucrar a grupos de interés que son escépticos por defecto",
      "Coordinarse con reguladores y asesores legales sin guardar silencio",
      "Reconstruir la confianza después de un incidente",
    ],
    perspective:
      "El silencio se lee como culpa; la manipulación se lee como desprecio. Ayudamos a las organizaciones a comunicar lo que saben, lo que están haciendo y lo que aún no saben, de manera consistente y a cada grupo de interés que importa.",
  },
};
