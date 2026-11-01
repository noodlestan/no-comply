# Instructions: `add-badge`

**Plan:** `standard-ui-new-badge-component`

**Iteration Id:** `add-badge`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `$PLAN/instructions/add-badge__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-badge`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-badge`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add `BadgeMixin` (composes `SizedContentMixin` with `scale: 'down'`, `ContentPaletteMixin`, `ComposeColorsMixin` with fg, bg and border, and `TextMixin`) and the `Badge` component, a `<span>` that renders its children with themed colour and size.

## Mandatory Reading

::READ `$PROJECT/_guide.md` (Guide) — Repository overview and operating instructions.

::READ `$PACKAGE/_guide.md` (Guide) — Package layout and operating instructions.

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes and message rules.

- Skill: `$WORKSPACE/.agents/skills/write-no-comply-entity-task/SKILL.md` — conventions for mixins and components.
- Spec: `$PLAN/specifications/mixin-standard-badge.md`
- Spec: `$PLAN/specifications/component-standard-badge.md`
- Reference: `$PACKAGE/src/typography/mixins/Text/createTextMixin.ts` and `$PACKAGE/src/typography/components/Text/createText.ts` (how a component composes a mixin and renders its element).
- Reference: `$PACKAGE/src/icon/components/Icon/` (component factory using a sized mixin).

**Prerequisites:** iterations `add-sized-content` and `add-color-module` must be DONE. If `SizedContentMixin`, `ContentPaletteMixin` or `ComposeColorsMixin` are missing, REPORT A BLOCKER.

**Spec decisions:**

- The Badge colour prop is `color` (typed `ContentPaletteVariant`, default `'neutral'`) and is forwarded to `ContentPaletteMixin` as `palette`. The component spec example that uses `palette` is wrong; the component accepts the `BadgeMixin` props, so it takes `color`.
- Use `var(--__content-height)` (exposed by `SizedContent`), not the `--__content-size` written in the spec.
- Write the SCSS as `@include set-palette(__composed-colors, __content-palette);`.
- The specs' `standard-ui/...` paths are `$PACKAGE/...`. `BadgeMixin` goes in `$PACKAGE/src/content/mixins/Badge/`, `Badge` in `$PACKAGE/src/content/components/Badge/`.

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

- Step 1 / 4 — Add `BadgeMixin`
- Step 2 / 4 — Add the `Badge` component
- Step 3 / 4 — Add a unit test
- Step 4 / 4 — Commit `add-badge`

## Steps

### Step `1 / 4` — Add `BadgeMixin`

Create `$PACKAGE/src/content/mixins/Badge/` (`createBadgeMixin.ts`, `constants.ts`, `types.ts`, `BadgeMixin.module.scss`, `index.ts`) following `$PLAN/specifications/mixin-standard-badge.md`:

- Props: `color?: ContentPaletteVariant` plus the `SizedContentMixin` props without `scale`.
- Compose `createSizedContentMixin` (`size` from props, `scale: () => 'down'`), `createContentPaletteMixin` (`palette` from `color`), `createComposeColorsMixin` (`fg`, `bg`, `border` all `true`) and `createTextMixin` (`size` from props; check its real signature and adapt).
- API: `$root` combining all composed roots plus the local class list `Badge`, `size()` and `palette()`.
- SCSS `.Badge`: `display: inline-flex; align-items: center; height: var(--__content-height); padding-inline: var(--__badge-padding-inline, var(--space-pad-0)); border-radius: var(--radius-m);` and the palette binding from the decisions above. Check that the tokens `--space-pad-0` and `--radius-m` exist in the theme; if not, use the closest existing tokens and note it in the report.
- Export it from `$PACKAGE/src/content/mixins/index.ts`.

### Step `2 / 4` — Add the `Badge` component

Create `$PACKAGE/src/content/components/Badge/` (`createBadge.ts` or `.tsx` as neighbours do, `types.ts`, `Badge.tsx`, `index.ts`) following `$PLAN/specifications/component-standard-badge.md`: a `ParentComponent` that composes `createBadgeMixin`, accepts the `BadgeMixin` props plus the closed-tag props as `$others`, and renders `<span $={combined $root + $others}>{children}</span>`. Export it from `$PACKAGE/src/content/components/index.ts` (create the barrel entry the same way as the other components there).

### Step `3 / 4` — Unit test

Add a unit test for `Badge` following the testing convention of neighbouring components under `$PACKAGE/src/content/components/` (check `Callout`, `DataItem`): it renders a `<span>` with its children, applies the `color` and `size` classes, and defaults `color` to `neutral`. If no component under `$PACKAGE/src` has tests, add none and note it in the report. Do NOT add a sandbox or demo-app example: no sandbox exists in this package and demo-app integration is out of the plan's scope.

### Step `4 / 4` — Commit

---

#### Commit: `add-badge`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(standard-ui): Add Badge mixin and component.
```

---

## Final Verification

**Instructions:**

- Verify that the commit has been executed and NOT pushed, per the `NOPUSH` policy.
- Verify that `BadgeMixin` and `Badge` are exported from their barrels and from the package entry point.
- Verify that `Badge` renders a `<span>` containing its children and accepts `color`, `size` and `alignFirstLine`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
