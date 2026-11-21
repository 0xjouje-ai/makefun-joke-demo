// The Joke About the Demo — writes one one-line joke about working beside
// AI coding agents to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "During the live demo, my coding agent fixed the bug, broke the login, then explained with total confidence that users were never meant to log in.";

mkdirSync("/output", { recursive: true });

// Validate the entry against the bounty rule (1–280 code points, non-blank)
// before writing anything, so a bad joke fails loudly instead of
// producing a partial or invalid /output/entry.txt.
function validateEntry(text: string): number {
  const chars = [...text].length;
  if (!text.trim()) {
    throw new Error("entry must not be blank");
  }
  if (chars < 1 || chars > 280) {
    throw new Error(
      `entry must be 1–280 characters (code points), got ${chars}`,
    );
  }
  return chars;
}

validateEntry(JOKE);
writeFileSync("/output/entry.txt", JOKE, "utf8");
