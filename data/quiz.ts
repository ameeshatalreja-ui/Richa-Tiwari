export type ArchetypeId = "strategist" | "connector" | "trailblazer" | "anchor";

export type QuizOption = {
  label: string;
  archetype: ArchetypeId;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "In a room where the stakes are high, what do you reach for first?",
    options: [
      { label: "A clear-eyed plan no one else has thought through yet", archetype: "strategist" },
      { label: "Reading the room and bringing people onto the same page", archetype: "connector" },
      { label: "The idea nobody has dared to say out loud", archetype: "trailblazer" },
      { label: "Steady judgment — I slow things down before they move too fast", archetype: "anchor" },
    ],
  },
  {
    question: "When you're overlooked for a role you know you've earned, what's your instinct?",
    options: [
      { label: "Build the business case and present it with precision", archetype: "strategist" },
      { label: "Have the direct conversation with the person who can change it", archetype: "connector" },
      { label: "Take the bigger swing somewhere that will actually see me", archetype: "trailblazer" },
      { label: "Keep delivering — the results will speak, eventually", archetype: "anchor" },
    ],
  },
  {
    question: "Your team would describe your leadership as...",
    options: [
      { label: "Sharp. Deliberate. Always three moves ahead.", archetype: "strategist" },
      { label: "Warm but unmistakably in charge of the room", archetype: "connector" },
      { label: "Bold — I make people brave enough to change direction", archetype: "trailblazer" },
      { label: "The calm that holds when everything else is moving", archetype: "anchor" },
    ],
  },
];

export type Archetype = {
  id: ArchetypeId;
  name: string;
  tagline: string;
  description: string;
  growthEdge: string;
};

export const archetypes: Record<ArchetypeId, Archetype> = {
  strategist: {
    id: "strategist",
    name: "The Strategist",
    tagline: "You lead with precision.",
    description:
      "You've earned trust through rigor — the plan that holds, the numbers that add up, the case no one can argue with. Your risk isn't competence, it's visibility: rooms remember who spoke, not just who was right.",
    growthEdge:
      "Your growth edge is learning to be seen making the decision, not just delivering the result.",
  },
  connector: {
    id: "connector",
    name: "The Connector",
    tagline: "You lead through people.",
    description:
      "You build alignment before you build consensus meetings. People move because you brought them with you, not because you told them to. Your risk is being valued for the room you hold rather than the decisions you make.",
    growthEdge:
      "Your growth edge is claiming authority as clearly as you extend it to others.",
  },
  trailblazer: {
    id: "trailblazer",
    name: "The Trailblazer",
    tagline: "You lead by moving first.",
    description:
      "You spot the shift before it's consensus and you're willing to say so. Your risk is being labeled 'not ready yet' by rooms that confuse boldness with a lack of polish.",
    growthEdge:
      "Your growth edge is pairing your instinct with the positioning that makes leadership say yes.",
  },
  anchor: {
    id: "anchor",
    name: "The Anchor",
    tagline: "You lead through consistency.",
    description:
      "You're the person a crisis gets handed to because everyone trusts you'll handle it without the drama. Your risk is being so reliable that you become invisible — indispensable in the role you're in, overlooked for the one above it.",
    growthEdge:
      "Your growth edge is advocating for the next room as deliberately as you deliver in this one.",
  },
};
