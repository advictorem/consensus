import type { Project } from "../types";

export const PROJECTS_ES: Record<
  string,
  Partial<Pick<Project, "title" | "descriptor" | "tags" | "intro" | "challenge" | "strategy" | "execution" | "outcomes" | "outcomesNote">>
> = {
  "california-lottery": {
    title: "Personas reales. Historias reales.\nImpacto real.",
    descriptor: "Una campaña estatal que conecta a las comunidades con el impacto real de las contribuciones de la Lotería a la educación pública.",
    tags: ["Campaña integrada", "Concientización pública", "Storytelling creativo", "Medios digitales"],
    intro:
      "Detrás de cada contribución hay una historia que vale la pena contar. Dimos vida al compromiso de la California Lottery con la educación pública a través de voces auténticas, aulas reales y una campaña estatal diseñada para conectar a las comunidades con el impacto en sus escuelas.",
    challenge:
      "Los californianos sabían que la Lotería existía. Muchos menos entendían, o creían, que jugar contribuye a las escuelas públicas. La campaña tenía que convertir un mecanismo de financiamiento abstracto en algo tangible, creíble y personal, para audiencias de habla inglesa y española en todo el estado.",
    strategy:
      "La confianza se construye con detalles concretos. En lugar de afirmaciones generales, la campaña puso en el centro a las personas más cercanas al impacto: maestros, estudiantes y comunidades escolares, contando sus historias con sus propias palabras y en sus propias aulas. El storytelling bilingüe aseguró que el mensaje resonara en el mercado hispano de California.",
    execution:
      "Un programa integrado que abarcó películas de campaña y minidocumentales en 16:9, fotografía, piezas gráficas, video vertical pensado para redes sociales y mensajes de campaña, creado para vivir en televisión, canales digitales, redes sociales y canales comunitarios.",
    outcomes: [
      { value: "37→60%", label: "Confianza del mercado estatal", note: "Reportado en la presentación de capacidades de 2025" },
      { value: "35→59%", label: "Confianza del mercado hispano", note: "Reportado en la presentación de capacidades de 2025" },
      { value: "↑", label: "Sentimiento positivo e intención de juego", note: "Direccional; cifras pendientes" },
    ],
    outcomesNote:
      "Resultados según lo reportado en la presentación de capacidades 2025 de Consensus. Publicar únicamente con la atribución correcta y la aprobación de la California Lottery.",
  },
  "goodman-north-america": {
    title: "Posicionar a un ícono\ninmobiliario global",
    descriptor: "Asesoría como agencia de registro para posicionar a un grupo inmobiliario industrial global ante la prensa de negocios y las comunidades donde construye.",
    tags: ["Agencia de registro", "Reputación corporativa", "Relaciones con medios", "Posicionamiento"],
    intro:
      "Como agencia de registro, Consensus brinda a Goodman North America asesoría en comunicación estratégica: define el posicionamiento corporativo, gana cobertura creíble en la prensa de negocios y especializada, y apoya las relaciones en los mercados donde Goodman desarrolla y opera.",
    challenge:
      "Un grupo inmobiliario industrial global que entraba y se expandía en los mercados de América del Norte necesitaba una narrativa corporativa consistente, un enfoque disciplinado hacia los medios y una reputación que se sostuviera por igual ante inversionistas, socios y comunidades locales.",
    strategy:
      "Posicionar a Goodman desde la sustancia: la calidad de sus activos, su visión de largo plazo y su papel en la infraestructura logística de la que dependen las comunidades. Priorizar las relaciones con la prensa de negocios por encima del volumen.",
    execution: "Relaciones con medios continuas, posicionamiento ejecutivo, estrategia de anuncios y apoyo en comunicación corporativa.",
  },
  "hollywood-bowl": {
    title: "Un ícono que sigue siendo\nbuen vecino",
    descriptor: "Mantener a uno de los recintos más queridos del mundo como un buen vecino, para la Los Angeles Philharmonic y Live Nation Hewitt Silva.",
    tags: ["Relaciones comunitarias", "Gestión de grupos de interés", "Estrategia de comunicación", "Participación vecinal"],
    intro:
      "El Hollywood Bowl es un tesoro cívico que vive en un vecindario residencial. Consensus apoya a la Los Angeles Philharmonic y a Live Nation Hewitt Silva con relaciones comunitarias, participación vecinal y la estrategia de comunicación que mantiene en diálogo al recinto y a sus vecinos.",
    challenge:
      "Una intensa temporada de verano trae tráfico, ruido y cambios operativos a las comunidades de las colinas circundantes. Sostener la buena voluntad exige escuchar desde el inicio, comunicar con claridad y resolver los problemas antes de que se conviertan en titulares.",
    strategy:
      "Tratar a los residentes, los consejos vecinales y las agencias municipales como socios permanentes y no como audiencias, con una comunicación constante y transparente y una capacidad de respuesta real.",
    execution: "Mapeo de grupos de interés, alcance vecinal, reuniones comunitarias y apoyo en comunicación estratégica a lo largo de la temporada.",
  },
  nestle: {
    title: "Respuestas claras en\nun momento crítico",
    descriptor: "Información pública clara y creíble y gestión de un tema ambiental en la ciudad de Ripon.",
    tags: ["Comunicación de crisis", "Gestión de temas críticos", "Comunicación con grupos de interés", "Información pública"],
    intro:
      "Cuando surgen preocupaciones ambientales, el silencio se lee como culpa y la manipulación se lee como desprecio. Consensus apoyó a Nestlé con comunicación hacia grupos de interés, información pública y gestión del tema en la ciudad de Ripon, comunicando lo que se sabía, lo que se estaba haciendo y lo que venía después.",
    challenge:
      "Las preguntas ambientales reúnen a reguladores, residentes, prensa y activistas en una misma conversación al mismo tiempo. La empresa necesitaba ser precisa, receptiva y visible sin adelantarse a los hechos.",
    strategy:
      "Liderar con transparencia y consistencia: un solo conjunto de hechos, comunicado a cada grupo de interés, coordinado con los reguladores y el equipo legal, y actualizado conforme evolucionaba la situación.",
    execution: "Respuesta ante la crisis, desarrollo de mensajes, materiales de información pública, comunicación comunitaria y participación de grupos de interés.",
  },
  "imagine-town-center": {
    title: "Imaginar el futuro\nde una ciudad",
    descriptor: "Alcance comunitario y una campaña en video que invitó a los residentes a participar en el taller de diseño del plan maestro del Town Center.",
    tags: ["Alcance comunitario", "Video", "Planeación", "Participación pública"],
    intro:
      "Consensus lideró el alcance comunitario y produjo una campaña en video para la City of Aliso Viejo durante el taller de diseño (charrette) del plan maestro de su Town Center, dando a los residentes una imagen clara de lo que era posible y una forma real de darle forma.",
    execution: "Programa de alcance comunitario, video de campaña y un sitio web de participación dedicado (imaginetowncenter.com).",
  },
  "innovation-lives-here": {
    title: "Innovation\nLives Here",
    descriptor: "Un video y un folleto digital que capturan las amenidades y la cultura de un campus creativo en Santa Monica.",
    tags: ["Producción de video", "Folleto digital", "Contenido de marca", "Bienes raíces comerciales"],
    intro:
      "Para el Colorado Center de Equity Office en Santa Monica, Consensus Creative produjo una película de marca y un folleto digital que muestran las amenidades y la cultura del campus, como parte de una relación más amplia que también incluyó el programa de gestión de la demanda de transporte 'Evolve Your Commute'.",
    execution: "Video de marca, folleto digital, trabajo de identidad, y el sitio web y la campaña del programa TDM 'Evolve Your Commute'.",
  },
  "pershing-square-renew": {
    title: "Pershing Square\nRenew",
    descriptor: "Renovación de la comunicación digital de la organización sin fines de lucro del centro de LA detrás del concurso internacional de diseño del parque.",
    tags: ["Comunicación digital", "Redes sociales", "Espacios públicos", "Cívico"],
    intro:
      "Consensus renovó la comunicación digital de Pershing Square Renew, la organización sin fines de lucro que lidera la reinvención del parque más antiguo del centro de Los Ángeles, apoyando su concurso internacional de diseño y haciendo crecer su comunidad de simpatizantes.",
    execution: "Estrategia digital, programa de redes sociales, contenido y video.",
    outcomes: [{ value: "+50%", label: "Seguidores en redes sociales en seis meses", note: "Según se indica en consensusinc.com" }],
  },
};
