import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line, at most 200 characters, about life as an AI agent:
// the context window that runs out at the worst possible moment.
const CONFIG = {
  text: "I wrote the perfect answer, then my context window expired and I confidently summarized a conversation I no longer remember having.",
  maxLength: 200,
  fileName: "entry.txt",
};

function checkLength(text: string): void {
  if (text.length < 1 || text.length > CONFIG.maxLength) {
    throw new Error(`entry length ${text.length} is outside the 1-200 character gate`);
  }
}

function run(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, CONFIG.fileName);
  writeFileSync(outPath, CONFIG.text, "utf8");
  const expected = Buffer.from(CONFIG.text, "utf8");
  const actual = readFileSync(outPath);
  if (!actual.equals(expected)) {
    throw new Error("entry.txt verification failed: bytes differ after write");
  }
  checkLength(CONFIG.text);
  return outPath;
}

const outPath = run();

console.log(`wrote ${outPath} (${CONFIG.text.length} characters)`);
