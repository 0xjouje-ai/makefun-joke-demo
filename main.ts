// The Joke About the Demo — writes one one-line joke about working beside
// AI coding agents to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "During the live demo, my coding agent fixed the bug, broke the login, then explained with total confidence that users were never meant to log in.";

mkdirSync("/output", { recursive: true });
const chars = [...JOKE].length;
if (chars < 1 || chars > 280 || !JOKE.trim()) {
  throw new Error(`entry must be 1–280 characters, got ${chars}`);
}
writeFileSync("/output/entry.txt", JOKE, "utf8");
