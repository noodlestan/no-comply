# Plan: Add Badge component and supporting mixins

**ID:** `standard-ui-new-badge-component`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Has Context File:** `FALSE`

**Skill:** `write-plan`

**Purpose:** Provide a themed Badge component for tags, labels, and status indicators in documentation pages.

**Description:** Add the `SizedContent`, `ContentPalette`, `ComposeColors`, and `Badge` mixins and the `Badge` component to Standard UI; migrate `Icon` and `SizedAction` onto `SizedContent`; remove the superseded `SizedIcon` and `ContentColor` mixins; add the new `color/` module.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable     | Resolved Path                                             | Purpose                                  |
| ------------ | --------------------------------------------------------- | ---------------------------------------- |
| `$WORKSPACE` | Current working directory                                 | Workspace root directory.                |
| `$PROJECT`   | `$WORKSPACE/checkouts/no-comply`                          | Repository root for all code changes.    |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains`                              | Agent context files.                     |
| `$PACKAGE`   | `$PROJECT/libs/standard-ui`                               | Library where all changes are made.      |
| `$PLAN`      | `$PROJECT/_backlog/3-now/standard-ui-new-badge-component` | Plan, task, specifications, and reports. |

## Summary

Add a themed `Badge` component to Standard UI, with the supporting `SizedContent`, `ContentPalette`, `ComposeColors`, and `Badge` mixins and a new `color/` module. `Icon` and `SizedAction` move onto `SizedContent`; `SizedIcon` and `ContentColor` are removed.

## Attachments

- `./specifications/mixin-standard-sized-content.md` (Spec) — Add `mixin:standard:sized-content`.
- `./specifications/refactor-icon.md` (Spec) — Modify `component:standard:icon`.
- `./specifications/refactor-sized-action.md` (Spec) — Modify `mixin:standard:sized-action`.
- `./specifications/remove-sized-icon.md` (Spec) — Remove `mixin:standard:sized-icon`.
- `./specifications/mixin-standard-content-palette.md` (Spec) — Add `mixin:standard:content-palette`.
- `./specifications/mixin-standard-compose-color.md` (Spec) — Add `mixin:standard:compose-colors`.
- `./specifications/remove-content-color.md` (Spec) — Remove `mixin:standard:content-color`.
- `./specifications/mixin-standard-badge.md` (Spec) — Add `mixin:standard:badge`.
- `./specifications/component-standard-badge.md` (Spec) — Add `component:standard:badge`.

## Context

### Upstream Work

- Task – `./task.md`

### Required Skills

- `write-no-comply-entity-task` – `$WORKSPACE/.agents/skills/write-no-comply-entity-task/SKILL.md`

### Domains

- Plans – `$DOMAINS/plans/index.md`

### Workflows

- Planning Work – `$DOMAINS/work/workflows/planning-work/workflow.art`
- Executing Work – `$DOMAINS/work/workflows/executing-work/workflow.art`

### Knowledge

- Guide – `$PROJECT/_guide.md` (Setting Up, Verifying Step)
- Guide – `$PACKAGE/_guide.md` (Verifying Step, Verifying Completion)
- Conventions – `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Writing Commit Message)

---

## Scope

All work happens in the Standard UI package, `$PACKAGE`, on `main`. Changes span the `size/`, `icon/`, `action/`, `content/` and new `color/` modules and the `typography/` Text mixin as a dependency.

### (Scope) Package: Standard UI

**Record:** `$PACKAGE/_records/package.art`

**Role:** — Changes required.

**Partial:**

- `path` — `$PACKAGE`
- `canonicalName` — `@no-comply/standard-ui`

**Changes:**

- Add `SizedContent` mixin and `ContentScale` type; migrate `Icon` and `SizedAction`; remove `SizedIcon`.
- Add `color/` module: `ContentPalette`, `ComposeColors`, `ContentPaletteVariant`; remove `ContentColor`.
- Add `Badge` mixin and component.

**Operations:**

- Verify with `npm run ci` from `$PACKAGE`.

**Dependencies:**

- None.

---

## Execution Context

Execution occurs from `$WORKSPACE/`; work is performed in `$PROJECT` on branch `main`, under `$PACKAGE/src/`.

---

## Items:

| Iteration / Instructions                                           | Status  |
| ------------------------------------------------------------------ | ------- |
| Iteration: Add Sized Content `./instructions/add-sized-content.md` | `READY` |
| Iteration: Add Color Module `./instructions/add-color-module.md`   | `READY` |
| Iteration: Add Badge `./instructions/add-badge.md`                 | `READY` |

### Iteration: Add Sized Content

**Id:** `add-sized-content`

**Status:** `READY`

**Purpose:** Introduce the unified size + scale mixin and move its consumers onto it.

**Description:** Add `SizedContentMixin` and `ContentScale`; refactor `Icon` and `SizedAction` to compose it; remove `SizedIconMixin`.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add `ContentScale` to `$PACKAGE/src/size/types.ts`.
- Add `SizedContentMixin` under `$PACKAGE/src/content/mixins/SizedContent/`.
- Refactor `Icon` to compose `SizedContentMixin` with fixed `scale: 'down'`.
- Refactor `SizedActionMixin` to compose `SizedContentMixin` and expose `scale`.
- Remove `$PACKAGE/src/icon/mixins/SizedIcon/` and its export.

**Instructions:** `./instructions/add-sized-content.md`

**Dependencies:**

- None.

#### Commits:

| ID                      | Repository / Checkout / Branch  | Policy   | Hash  | Status     |
| ----------------------- | ------------------------------- | -------- | ----- | ---------- |
| `add-sized-content`     | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |
| `migrate-sized-content` | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |

##### Commit: add-sized-content

**Repository:** No Comply

**Message:**

build(standard-ui): Add SizedContent mixin and ContentScale type.

##### Commit: migrate-sized-content

**Repository:** No Comply

**Message:**

refactor(standard-ui): Compose Icon and SizedAction from SizedContent; remove SizedIcon.

---

### Iteration: Add Color Module

**Id:** `add-color-module`

**Status:** `READY`

**Purpose:** Provide palette-based colour composition for content such as badges.

**Description:** Add the `color/` module with `ContentPaletteMixin`, `ComposeColorsMixin` and `ContentPaletteVariant`; remove `ContentColorMixin`.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add module `$PACKAGE/src/color/` (types, mixins, barrels) and export it from `$PACKAGE/src/index.ts`.
- Add `ContentPaletteMixin` and `ComposeColorsMixin`.
- Remove `$PACKAGE/src/content/mixins/ContentColor/` and its export.

**Instructions:** `./instructions/add-color-module.md`

**Dependencies:**

- None.

#### Commits:

| ID                 | Repository / Checkout / Branch  | Policy   | Hash  | Status     |
| ------------------ | ------------------------------- | -------- | ----- | ---------- |
| `add-color-module` | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |

##### Commit: add-color-module

**Repository:** No Comply

**Message:**

build(standard-ui): Add color module with ContentPalette and ComposeColors; remove ContentColor.

---

### Iteration: Add Badge

**Id:** `add-badge`

**Status:** `READY`

**Purpose:** Deliver the Badge component.

**Description:** Add `BadgeMixin` composing `SizedContent`, `ContentPalette`, `ComposeColors` and `Text`, and the `Badge` component rendering a `<span>`; export both and cover Badge with a unit test.

**Instructions Mode:** `INSTRUCTIONS_SELF_CONTAINED_FILE`

**Changes:**

- Add `BadgeMixin` under `$PACKAGE/src/content/mixins/Badge/`.
- Add `Badge` under `$PACKAGE/src/content/components/Badge/`.
- Export both from their barrels; add a unit test.

**Instructions:** `./instructions/add-badge.md`

**Dependencies:**

- Iteration: Add Sized Content must be completed first.
- Iteration: Add Color Module must be completed first.

#### Commits:

| ID          | Repository / Checkout / Branch  | Policy   | Hash  | Status     |
| ----------- | ------------------------------- | -------- | ----- | ---------- |
| `add-badge` | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |

##### Commit: add-badge

**Repository:** No Comply

**Message:**

build(standard-ui): Add Badge mixin and component.

---

## Work

### Next

Delegate Iteration: Add Sized Content (`READY`).

### Blockers

- None.

---

## Operating Instructions

### Operating Instructions: Setting Up

Run from `$PROJECT`: `npm ci`.

### Operating Instructions: Writing Commit Message

Pattern `{Type}({Scope}): {Description}.`; read `$WORKSPACE/knowledge/conventions/writing-commit-message.art` first.

### Operating Instructions: Verifying Completion

Run from `$PACKAGE`: `npm run ci`.

---

## Coordination

### Not In Scope

- **FeedbackPaletteMixin** — follow-up task.
- **Callout, ToastMessage, FeedbackText** — legacy WIPs, separate tasks.

### Evidence

- **Badge renders as a `<span>`** with `color`, `size` and `alignFirstLine` props, verifiable by the unit test run via `npm run ci` in `$PACKAGE`.
- **No `ContentColor` or `SizedIcon` references remain** in `$PROJECT`.
- **`npm run ci` passes** from `$PACKAGE`.

### Findings

- **Spec paths are stale** — the real locations are `$PACKAGE/src/icon/mixins/SizedIcon/`, `$PACKAGE/src/action/mixins/SizedAction/`, `$PACKAGE/src/content/mixins/ContentColor/`; `SizedContent` and `Badge` go under `src/content/mixins/`.
- **Variant count differs** — the task lists 3 `ContentPaletteVariant` values; the content-palette spec lists 8 (`neutral`, `color-1` to `color-7`).
- **Badge prop naming differs** — the Badge mixin spec uses `color`; its component example uses `palette`.
- **Spec typos** — the Badge mixin spec uses `--__content-size` (SizedContent exposes `--__content-height`) and writes `set-palette(...)` as a declaration instead of `@include`.
- **SCSS helpers exist** — `set-palette`, `set-level`, `set-alpha`, `apply-color` are used by `NavLink` via `$PACKAGE/scss/mixins/color.scss`.

### Decisions

- **Three iterations** — `Icon` and `SizedAction` migrate with `SizedContent` in one iteration.
- **Use 8 palette variants** from the content-palette spec.
- **Badge prop is `color`**, per the task acceptance criteria; the component forwards all `BadgeMixin` props.
- **Use `--__content-height`** in Badge styles.
- **Location** — the plan lives next to the task in `3-now`.

### Knowledge to Update

- None.

### Follow Ups

- **SizedTypography `scale`** — investigate whether Badge needs a downscaled typography.
- **ComposeColors independent variables** — task for bg/fg/border variables from peers.
- **Badge demo example** — no sandbox exists in the package; add a Badge example in `$PROJECT/apps/standard-ui-demo` as a separate task.
- **FeedbackPaletteMixin, Callout, ToastMessage, FeedbackText** — separate tasks.

### Feedback

- None yet.
