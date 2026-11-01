# Instructions: `add-sized-content`

**Plan:** `standard-ui-new-badge-component`

**Iteration Id:** `add-sized-content`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `$PLAN/instructions/add-sized-content__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-sized-content`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-sized-content`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add `SizedContentMixin`, a unified size + scale mixin that replaces `SizedIconMixin`. Migrate `Icon` (fixed `scale: 'down'`) and `SizedActionMixin` (exposes `scale`) onto it without changing their visual sizes. Remove `SizedIconMixin`.

## Mandatory Reading

::READ `$PROJECT/_guide.md` (Guide) — Repository overview and operating instructions.

::READ `$PACKAGE/_guide.md` (Guide) — Package layout and operating instructions.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes and message rules.

- Skill: `$WORKSPACE/.agents/skills/write-no-comply-entity-task/SKILL.md` — conventions for mixins and components.
- Spec: `$PLAN/specifications/mixin-standard-sized-content.md`
- Spec: `$PLAN/specifications/refactor-icon.md`
- Spec: `$PLAN/specifications/refactor-sized-action.md`
- Spec: `$PLAN/specifications/remove-sized-icon.md`
- Reference implementations to mirror: `$PACKAGE/src/icon/mixins/SizedIcon/` and `$PACKAGE/src/action/mixins/SizedAction/`.

**Spec paths are stale.** The specs use `standard-ui/src/...` paths that do not match the code. Use these real locations:

- `SizedIcon`: `$PACKAGE/src/icon/mixins/SizedIcon/`
- `SizedAction`: `$PACKAGE/src/action/mixins/SizedAction/`
- New `SizedContent`: `$PACKAGE/src/content/mixins/SizedContent/` (the spec's `content/mixins/SizedContent/` is correct).

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

- Step 1 / 5 — Add the `ContentScale` type
- Step 2 / 5 — Add `SizedContentMixin`
- Step 3 / 5 — Commit `add-sized-content`
- Step 4 / 5 — Migrate `Icon` and `SizedActionMixin`; remove `SizedIconMixin`
- Step 5 / 5 — Commit `migrate-sized-content`

## Steps

### Step `1 / 5` — Add the `ContentScale` type

In `$PACKAGE/src/size/types.ts` add `export type ContentScale = 'down' | 'normal' | 'up';` next to `ContentSize`.

### Step `2 / 5` — Add `SizedContentMixin`

Create `$PACKAGE/src/content/mixins/SizedContent/` mirroring the file set of `SizedIcon` (`createSizedContentMixin.ts`, `constants.ts` with `$SIZED_CONTENT_MIXIN`, `types.ts`, `SizedContentMixin.module.scss`, `index.ts`), following `$PLAN/specifications/mixin-standard-sized-content.md`:

- Props: `size?: ContentSize` (default `'normal'`), `scale?: ContentScale` (default `'normal'`), plus the props of `createAlignedToFirstLineMixin` as `SizedIcon` does.
- Class list: `SizedContent`, `size-{size}`, `scale-{scale}`.
- API: `$root` (aligned root combined with the local one), `size()`, `scale()`.
- SCSS: three `.scale-*` classes setting `--__content-scaled-size-{small|normal|medium|large}` and four `.size-*` classes setting `--__content-height`, with the values given in the spec. Export `SIZED_CONTENT_MIXIN_PROPS` (`ALIGNED_TO_FIRST_LINE_MIXIN_PROPS`, `'size'`, `'scale'`) from `constants.ts`, like `SIZED_ICON_MIXIN_PROPS` does. Also set `--__first-line-content-height: var(--__content-height)` and `--__first-line-element-height: var(--__first-line-content-height)`, as the `SizedIcon` stylesheet does for its own variables.
- Check that `.scale-down` plus `.size-*` yields the same heights `SizedIcon` yields today (`small` → `2xs`, `normal` → `xs`, `medium` → `s`, `large` → `m`).
- Export it from `$PACKAGE/src/content/mixins/index.ts`.

### Step `3 / 5` — Commit

---

#### Commit: `add-sized-content`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(standard-ui): Add SizedContent mixin and ContentScale type.
```

### Step `4 / 5` — Migrate consumers; remove `SizedIcon`

1. `Icon` (`$PACKAGE/src/icon/components/Icon/createIcon.ts`, `types.ts`): replace `createSizedIconMixin` with `createSizedContentMixin`, passing the `locals` with `scale` forced to `'down'` (e.g. `createSizedContentMixin(mergeProps(locals, { scale: 'down' as const }))`, or the idiom `computedProps` used elsewhere in the package), so `size` and `alignFirstLine` keep working. In `$PACKAGE/src/icon/components/Icon/constants.ts` replace `SIZED_ICON_MIXIN_PROPS` (imported from `../../mixins`) with `SIZED_CONTENT_MIXIN_PROPS` (import it from `../../../content`; export it from the new mixin's `constants.ts`), using `omitPropKeys` from `@no-comply/solid-primitives` to exclude `'scale'`, and update `IconProps` in `types.ts` to use `SizedContentMixinProps` without `scale`. `Icon` must not expose `scale`.
2. `SizedActionMixin` (`$PACKAGE/src/action/mixins/SizedAction/`): compose `createSizedContentMixin` instead of its own size logic; expose `size()` and the new `scale()`. Update its types so `scale?: ContentScale` (default `'normal'`) is an accepted prop. Remove the stylesheet rules now provided by `SizedContent`, keep the `SizedAction` class if other styles rely on it. Check consumers (grep `SizedAction` in `$PACKAGE/src`, e.g. `Action`, `Button`, `ToggleAction`, `SegmentedButton`) still compile and render the same sizes; fix only what breaks.
3. Remove `$PACKAGE/src/icon/mixins/SizedIcon/` and its export from `$PACKAGE/src/icon/mixins/index.ts`.
4. Grep `SizedIcon` across `$PROJECT` (excluding `node_modules`, `dist`, and `_backlog`) and confirm zero references.
5. Run `npm run ci` from `$PACKAGE` and fix failures caused by this iteration.

### Step `5 / 5` — Commit

---

#### Commit: `migrate-sized-content`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
refactor(standard-ui): Compose Icon and SizedAction from SizedContent; remove SizedIcon.
```

---

## Final Verification

**Instructions:**

- Verify that both commits have been executed and NOT pushed, per the `NOPUSH` policy.
- Verify that `SizedContentMixin` is exported from `$PACKAGE/src/content/mixins/index.ts` and `ContentScale` from `$PACKAGE/src/size/types.ts`.
- Verify that `Icon` composes `SizedContentMixin` with `scale: 'down'` and exposes no `scale` prop.
- Verify that `SizedActionMixin` composes `SizedContentMixin` and exposes `scale()`.
- Verify that no `SizedIcon` references remain in `$PROJECT`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
