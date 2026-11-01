# Instructions: `add-color-module`

**Plan:** `standard-ui-new-badge-component`

**Iteration Id:** `add-color-module`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `$PLAN/instructions/add-color-module__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-color-module`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable     | Resolved Path                                             | Purpose                                  |
| ------------ | --------------------------------------------------------- | ---------------------------------------- |
| `$WORKSPACE` | Current working directory                                 | Workspace root directory.                |
| `$PROJECT`   | `$WORKSPACE/checkouts/no-comply`                          | Repository root for all code changes.    |
| `$PACKAGE`   | `$PROJECT/libs/standard-ui`                               | Library where all changes are made.      |
| `$PLAN`      | `$PROJECT/_backlog/3-now/standard-ui-new-badge-component` | Plan, task, specifications, and reports. |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-color-module`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add the `color/` module to Standard UI with `ContentPaletteMixin` (sets only the palette variable), `ComposeColorsMixin` (turns a palette into opt-in fg, bg and border colours) and the `ContentPaletteVariant` type. Remove the superseded, unused `ContentColorMixin`.

## Mandatory Reading

::READ `$PROJECT/_guide.md` (Guide) — Repository overview and operating instructions.

::READ `$PACKAGE/_guide.md` (Guide) — Package layout and operating instructions.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes and message rules.

- Skill: `$WORKSPACE/.agents/skills/write-no-comply-entity-task/SKILL.md` — conventions for mixins and components.
- Spec: `$PLAN/specifications/mixin-standard-content-palette.md`
- Spec: `$PLAN/specifications/mixin-standard-compose-color.md`
- Spec: `$PLAN/specifications/remove-content-color.md`
- Reference implementation to mirror: `$PACKAGE/src/content/mixins/ContentColor/` (the mixin being replaced).
- SCSS helper usage: `$PACKAGE/src/navigation/mixins/NavLink/NavLinkMixin.module.scss` (`set-palette`, `set-level`, `set-alpha`, `apply-color`), defined in `$PACKAGE/src/theme/mixins/color.scss` and forwarded by `$PACKAGE/scss/mixins/color.scss`.
- Module structure to mirror: `$PACKAGE/src/size/` (`index.ts`, `types.ts`).

**Spec decisions:**

- `ContentPaletteVariant` has 8 values: `'neutral' | 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6' | 'color-7'`, as in the content-palette spec (the task text lists only 3 and is outdated).
- Name the mixin `ComposeColorsMixin` and the factory `createComposeColorsMixin` (the spec title says `ComposeColorMixin`).
- The specs' `ContentColor` path `standard-ui/src/content/mixins/ContentColor/` is `$PACKAGE/src/content/mixins/ContentColor/`.
- Write the SCSS with `@include set-palette(...)` etc.; the specs' bare `set-palette(...)` lines are shorthand.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Operating Instructions: Setting Up

Run from the `$PROJECT` root:

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Writing Commit Message

Commit message pattern: `{Type}({Scope}): {Description}.` max 120 chars, optionally followed by up 3 bullet points, max 100 chars each.

Allowed values for commit Type, Scope, and valid Type–Scope associations are defined in `$WORKSPACE/knowledge/conventions/writing-commit-message.art`, along with examples, and rules.

RULE: Do not invent commit types or scopes or assume a combination is valid. Always read the "Writing Commit Message" guide first.

### Operating Instructions: Verifying Completion

Run from `$PACKAGE`:

```bash
npm run ci # lint, build and test
```

The repository pre-commit hook also runs clean, extract, and ci from `$PROJECT`; it takes about two minutes.

---

## Changes

- Step 1 / 4 — Create the `color/` module and `ContentPaletteVariant`
- Step 2 / 4 — Add `ContentPaletteMixin` and `ComposeColorsMixin`
- Step 3 / 4 — Remove `ContentColorMixin`
- Step 4 / 4 — Commit `add-color-module`

## Steps

### Step `1 / 4` — Create the `color/` module

Create `$PACKAGE/src/color/` with `index.ts` (re-exporting `types` and `mixins`), `types.ts` (exporting `ContentPaletteVariant`) and `mixins/index.ts`. Mirror the layout of `$PACKAGE/src/size/`. Export the module from `$PACKAGE/src/index.ts` alongside the other modules, keeping the existing ordering convention.

### Step `2 / 4` — Add the mixins

1. `$PACKAGE/src/color/mixins/ContentPalette/` (`createContentPaletteMixin.ts`, `constants.ts`, `types.ts`, `ContentPaletteMixin.module.scss`, `index.ts`), following the spec and the `ContentColor` file set:
   - Prop `palette?: ContentPaletteVariant` (default `'neutral'`); API `$root` (class list `palette-{palette}`) and `palette()`.
   - SCSS in `@layer lib.standard-ui.content-palette`: one `.palette-{variant}` class per variant, each doing `@include set-palette(__content-palette, {variant})`. It must never set `color`, `background` or `border`. Check which palette names the theme actually defines (look at `$PACKAGE/src/theme/mixins/color.scss` and the theme tokens); if `color-1` to `color-7` or `neutral` map to nothing, REPORT A BLOCKER with what you found instead of inventing names.
2. `$PACKAGE/src/color/mixins/ComposeColors/` (same file set, `ComposeColorsMixin.module.scss`):
   - Props `fg?`, `bg?`, `border?` booleans (default `false`); API `$root` with class list `ComposeColors` plus `fg`, `bg`, `border` when enabled.
   - SCSS as in the spec: the `.ComposeColors` class sets default palette, level and alpha variables for `__composed-colors`, `-fg`, `-bg` and `-border`; the `.fg`, `.bg`, `.border` classes apply colours with `apply-color(color | background-color | border-color, ...)`. Scope the boolean classes so they only apply together with `.ComposeColors`.
3. Export both from `$PACKAGE/src/color/mixins/index.ts`.
4. Add unit tests if the neighbouring mixins have them (check `ContentColor` and `SizedIcon`); otherwise follow the existing testing convention.

### Step `3 / 4` — Remove `ContentColorMixin`

Remove `$PACKAGE/src/content/mixins/ContentColor/` and its export from `$PACKAGE/src/content/mixins/index.ts`. Grep `ContentColor` across `$PROJECT` (excluding `node_modules`, `dist`, and `_backlog`) and confirm zero references. Run `npm run ci` from `$PACKAGE` and fix failures caused by this iteration.

### Step `4 / 4` — Commit

---

#### Commit: `add-color-module`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(standard-ui): Add color module with ContentPalette and ComposeColors; remove ContentColor.
```

---

## Final Verification

**Instructions:**

- Verify that the commit has been executed and NOT pushed, per the `NOPUSH` policy.
- Verify that `$PACKAGE/src/color/` is exported from `$PACKAGE/src/index.ts` and exports both mixins and `ContentPaletteVariant`.
- Verify that `ContentPaletteMixin` only sets `--__content-palette` variables and no direct colour properties.
- Verify that no `ContentColor` references remain in `$PROJECT`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
