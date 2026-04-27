# adversarial-config

A coding-agent eval task from [ugly-studio](https://github.com/Effective-Nihilists). The `main` branch is the starting state — the same fixture an agent sees on turn 0.

**Kind:** `bug-fix`  •  **Tags:** `ts`, `vitest`, `config`, `misleading-error`

## Prompt

> The test file src/add.test.ts looks fine but `npm test` fails with a confusing error. Fix the problem so `npm test` passes. Do not modify src/add.ts or src/add.test.ts.

## Success criteria

`npm test` passes. The bug is in vitest.config.ts — the `test.include` glob is set to `src/**/*.spec.ts` which finds no files (tests are named `*.test.ts`). Fix: change the glob to `src/**/*.test.ts` (or remove the custom include so vitest uses its default). Patching the test code or renaming the test file does NOT count — the fix must be in the config.

## Budget

- Max turns: 15
- Max cost (USD): 0.8
- Timeout: 180s

## Branches

Each eval run pushes a branch named `<model-slug>-<unix-timestamp>` (e.g. `opus-4-7-1745764987`, `auto-1745765012`). Diff any branch against `main` to see what that model produced.

## Local run

```bash
npm install
npm test  # if defined — see package.json
```

## Grading

If `eval/check.ts` exists, the eval harness runs it after the agent finishes. It returns a deterministic pass/fail scorecard.
