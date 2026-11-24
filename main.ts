import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const EXCUSE_LINE =
  "The dog ate my homework, then stared at me like I was the one who forgot to feed him — and somehow I ended up apologizing to him.";

function buildEntry(): string {
  const line = EXCUSE_LINE.trim();
  if (line.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  return line + "\n";
}

function main(): void {
  const entry = buildEntry();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
}

main();
