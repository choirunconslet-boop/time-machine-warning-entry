import { mkdirSync, writeFileSync } from "node:fs";

// One-line warning label for a time machine (gate: 1-120 chars, UTF-8).
const LINE =
  "WARNING: If you meet yourself, keep walking. He knows what you did, and he already told your mother.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
