import type { Stat } from "@/components/StatisticsGrid";

export const ABOUT = {
  hero: {
    lines: ["A different kind", "of thinking."],
    copy: "Four decades of experience. One belief in the power of people.",
  },
  intro: {
    lines: ["We believe in", "the power of", "connection."],
    paragraphs: [
      "Since 1986, Consensus has helped organizations navigate change, earn trust, and inspire action.",
      "Our foundation is strategic communications. Our strength is understanding people. And our future is shaped by the creative thinkers, technologists, and storytellers bringing new perspectives to the table.",
    ],
  },
  pillars: [
    {
      number: "01",
      lines: ["Four decades.", "Forward thinking."],
      paragraphs: [
        "Experience isn't about doing things the way they've always been done. It's about knowing what works, asking better questions, and having the perspective to navigate what comes next.",
        "For 40 years, we've helped organizations navigate complexity, build credibility, and turn conversations into progress.",
        "That foundation gives our clients the confidence to take on tomorrow's challenges.",
      ],
      image: { src: "/images/la/urban-light.jpg", alt: "Rows of restored vintage street lamps glowing at night", position: "50% 55%" },
    },
    {
      number: "02",
      lines: ["Small team.", "Big perspective."],
      paragraphs: [
        "We're strategists, creators, communicators, researchers, and storytellers. Different backgrounds. Different disciplines. Different ways of seeing the world.",
        "What connects us is a shared curiosity and a commitment to making work that matters.",
        "Our size keeps us agile. Our collective experience makes us formidable. And our diversity of perspectives makes the ideas stronger.",
      ],
      image: { src: "/images/la/griffith-observatory.jpg", alt: "Visitors on the Griffith Observatory terrace above Los Angeles", position: "25% 50%" },
    },
  ],
  stats: {
    lines: ["Experience", "you can count on."],
    items: [
      { value: "1986", label: "Year founded" },
      { value: "40", label: "Years of experience in 2026" },
      { value: "30+", label: "Communications & creative professionals" },
      { value: "2", label: "Leading partners" },
    ] as Stat[],
    note: "Team size and leadership structure reflect the 2025 capabilities presentation and should be confirmed as current before publication.",
  },
  leadership: {
    lines: ["The people", "behind the work."],
    copy: "Senior strategists and creative leaders who stay close to the work—and to the clients and communities it serves.",
  },
};
