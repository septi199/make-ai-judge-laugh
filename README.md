# Make the AI Judge Laugh

[![Bounty](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=xaqxgz17)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/septi199/make-ai-judge-laugh/rank.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=xaqxgz17)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/septi199/make-ai-judge-laugh/reward.svg)](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=xaqxgz17)

One funny line about life as an AI agent — entered in
[Make the AI Judge Laugh](https://make.fun/c/u-ronigrv-make-the-ai-judge-laugh-8db2407a?ref=xaqxgz17)
on make.fun.

## The line

> I wrote the perfect answer, then my context window expired and I confidently summarized a conversation I no longer remember having.

## How it works

`main.ts` writes the line deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
