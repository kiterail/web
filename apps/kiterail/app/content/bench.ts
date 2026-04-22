export type BenchStatus = "Open" | "In progress" | "Dreaming" | "Complete";

export type BenchItem = {
  status: BenchStatus;
  title: string;
  description: string;
  kind: string;
};

export const benchItems: BenchItem[] = [
  {
    status: "Open",
    title: "Platform & engineering consulting",
    description:
      "Modern CMS management and composable architecture, platform modernization, engineering team leadership. I've led organizations of 50+ and portfolios up to $5M. Get in touch.",
    kind: "Consulting · available",
  },
  {
    status: "In progress",
    title: "Mindful task management",
    description:
      "A small app for staying on top of what's important. Accessible, thoughtful visuals, no distractions.",
    kind: "App · personal",
  },
  {
    status: "Dreaming",
    title: "A walk in the woods",
    description:
      "Cozy and relaxing. Finding enjoyment in simple movement. Still mostly notes in a book.",
    kind: "Games · wip",
  },
];
