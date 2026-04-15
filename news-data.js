/* ============================================================
   OTHER VC — NEWS CMS
   ============================================================
   Para añadir una noticia: copia uno de los bloques de abajo,
   pégalo al principio del array (para que salga primero)
   y rellena los campos.

   Campos:
     date     → Fecha visible, ej: "April 2026"
     category → Nombre del proyecto o "Other VC"
     title    → Titular de la noticia
     excerpt  → Resumen corto (1-2 frases)
     color    → Color de fondo del placeholder de imagen
                (puedes usar cualquier color CSS o degradado)
     img      → URL de la imagen (déjalo "" si no tienes imagen)
   ============================================================ */

const NEWS_ITEMS = [
  {
    date:     "April 2026",
    category: "Venture",
    title:    "Other VC website launches.",
    excerpt:  "The first public version of the Other VC website is live, presenting the group's vision, portfolio and direct contact route to the people building inside it.",
    color:    "linear-gradient(135deg, #20272b 0%, #2a3236 100%)",
    img:      ""
  },
  {
    date:     "March 2026",
    category: "Growbyte",
    title:    "Webovka goes live.",
    excerpt:  "Webovka, the web-focused arm under Growbyte, has launched its first client projects and is now actively taking new briefs across digital design and development.",
    color:    "linear-gradient(135deg, #9ec9ff 0%, #d9ecff 100%)",
    img:      ""
  },
  {
    date:     "February 2026",
    category: "Darwic",
    title:    "Enzyme research phase begins.",
    excerpt:  "Darwic begins its first active research phase applying protein LLMs to industrial enzyme modification for extreme temperature environments.",
    color:    "linear-gradient(135deg, #8fcac2 0%, #e1f7f4 100%)",
    img:      ""
  },
  {
    date:     "January 2026",
    category: "Instadeck",
    title:    "Instadeck enters private beta.",
    excerpt:  "The AI presentation generator is entering a closed beta with early testers. Feedback from the first cohort is shaping the first public release.",
    color:    "linear-gradient(135deg, #c8b5ff 0%, #ebe4ff 100%)",
    img:      ""
  },
  {
    date:     "December 2025",
    category: "Rainoc",
    title:    "First AI agent deployed.",
    excerpt:  "Rainoc deploys its first custom AI agent for a client organization, handling real business logic through an orchestrated LLM system at production scale.",
    color:    "linear-gradient(135deg, #8fd8cb 0%, #dffaf4 100%)",
    img:      ""
  },
  {
    date:     "November 2025",
    category: "Other VC",
    title:    "The group is formally established.",
    excerpt:  "Other VC is formalized as a structure for building extraordinary projects with ambition, seriousness and a strong internal code. The first ventures are identified.",
    color:    "linear-gradient(135deg, #efc88f 0%, #fff1dc 100%)",
    img:      ""
  }
];
