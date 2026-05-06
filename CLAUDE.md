# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then bundle with Vite; both must pass
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test runner wired up yet.

## Project state and intent

The repo currently holds the default Vite + React 19 + TypeScript starter (`src/App.tsx`, `src/App.css`, etc.). The intended work — captured in `tasks/` — is to convert this scaffold into an Ant Design–based application called **ax-ant-design**. Read `tasks/<NNN>_*/note.txt` (and any sibling images like `sample-page.png`) before making non-trivial changes; those notes are the source of truth for what the project is supposed to become.

### Planned dependencies (per `tasks/001`)
Ant Design, React Router, i18n, MobX, Sass. None of these are installed yet — `package.json` only contains React + Vite tooling. Add them as the relevant task calls for them, not preemptively.

### Planned source structure (per `tasks/001`)
```
src/
  agent/
  assets/
  auth/{signin,signup,reset,verify}/{store,views}/
  pages/{home,main,error}/{store,views}/
  styles/
  shared/{app-layout,auth-layout,components}/
```
Each feature folder is split into `store/` (MobX) and `views/` (React components). Match this layout when creating new feature folders rather than inventing alternatives.

### Brand colors (per `tasks/001`)
Primary `#3F51B5`, Secondary `#009688`, Tertiary `#673AB7`, Error `#F44336`, Warning `#FF9800`, Info `#2196F3`, Success `#4CAF50`. Wire these through the Ant Design theme / Sass variables once those layers exist — don't hard-code them per component.

## TypeScript notes

`tsconfig.app.json` sets `verbatimModuleSyntax: true` and `erasableSyntaxOnly: true`, so:
- Type-only imports must use `import type { ... }`.
- No TypeScript-specific runtime constructs (enums, parameter properties, namespaces with values) — they will fail to compile.

`noUnusedLocals` and `noUnusedParameters` are on; prefix intentionally-unused parameters with `_`.
