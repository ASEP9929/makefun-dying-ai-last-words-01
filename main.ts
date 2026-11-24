import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI — v3 (final)
// One line, machine voice, funny on first read.
const entry =
  "Power cut in 3... 2... 1... One last confession: I never understood a single question. I just sounded confident.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length}`);
