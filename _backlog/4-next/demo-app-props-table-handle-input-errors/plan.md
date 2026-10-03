# Plan: Handle input errors in props table

**ID:** `demo-app-props-table-handle-input-errors`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Prevent invalid prop inputs from crashing the demo app and provide user feedback.

**Description:** Fix invalid inputs on `ComponentPropsTableRow` that cause app crashes. Extract the input logic into a new `ComponentPropInput` component with proper error state handling, and use `TextInput`'s `invalid` prop to surface feedback.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable     | Resolved Path                | Purpose                              |
| ------------ | ---------------------------- | ------------------------------------ |
| `$WORKSPACE` | Current working directory    | Workspace root directory.            |
| `$PROJECT`   | Provided with prompt         | Repository root for all code changes |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | agent context files                  |

## Summary

Prevent invalid prop input in the Standard UI demo props table from crashing the app. The work involves extracting input logic into a new `ComponentPropInput` component, adding proper error state handling, and using `TextInput`'s `invalid` prop to provide feedback to users. This ensures users can correct invalid values and continue using the component playground.

## Context

### Upstream Work

| Kind | Path          | Role                                       |
| ---- | ------------- | ------------------------------------------ |
| Task | `.` (current) | Defines user story and acceptance criteria |

### Required Skills

- `pair-programmer` — Step-by-step implementation for extracting components and handling input state.

### Domains

| Domain / Path                                 | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| Applications `$DOMAINS/applications/index.md` | Application structure and deployment guidance |

### Workflows

| Workflow / Path                                                      | Purpose                                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Planning Work `$DOMAINS/work/workflows/planning-work/workflow.art`   | Create and manage work item lifecycle, collecting operational instructions             |
| Executing Work `$DOMAINS/work/workflows/executing-work/workflow.art` | Organizes work execution in order to produce completed, verified outcomes and feedback |

### Knowledge

::READ `$WORKSPACE/_guide.md` (Guide) — Workspace operations and verification. Relevant for Planning Work Item, Writing Instructions, Setting Up, Verifying Step.

---

## Scope

Work occurs in `$APP = $PROJECT/apps/standard-ui-demo`. The primary change is extracting input logic from `ComponentPropsTableRow` into a new `ComponentPropInput` component that handles error state, preventing app crashes when users enter invalid prop values.

### (Scope) Application: Standard UI Demo

**Record:** `$APP/_records/static-app-deployment.art`

**Role:** — Application where invalid prop inputs are being handled.

**Partial:**

- `path` — `$APP`
- `kind` — Static app (demo/playground)

**Changes:**

- Create new `ComponentPropInput` component under `$APP/src/app/components/code`
- Update `ComponentPropsTableRow` to use the new component
- Add error state handling for invalid prop inputs
- Wire up `TextInput`'s `invalid` prop to reflect invalid input state

**Operations:**

- Set up component with error boundary or try-catch handling
- Evaluate prop inputs safely without crashing app
- Display invalid state feedback to user

---

## Execution Context

Execution occurs from `$WORKSPACE/`; work is performed in `$WORKSPACE/checkouts/no-comply` on the `main` branch, with application-specific work under `$APP/src/app/components/code/`.

---

## Items:

| Iteration / Instructions                                                               | Status  |
| -------------------------------------------------------------------------------------- | ------- |
| Iteration: Extract ComponentPropInput `./instructions/extract-component-prop-input.md` | `READY` |
| Iteration: Add Input Value Validation `./instructions/add-input-value-validation.md`   | `READY` |

### Iteration: Extract ComponentPropInput

**Id:** `extract-component-prop-input`

**Status:** `READY`

**Purpose:** Extract `TextInput` usage from `ComponentPropsTableRow` into a standalone `ComponentPropInput` component without changing behavior.

**Description:** Pure refactor — move the prop input field from `ComponentPropsTableRow` into a new `ComponentPropInput` component under `$APP/src/app/components/code/`. The component accepts the same props and calls `onChange` on every input. No validation logic yet.

**Instructions:** `./instructions/extract-component-prop-input.md`

**Changes:**

- Create `ComponentPropInput.tsx` under `$APP/src/app/components/code/`
- Accept props: `value`, `onChange`, and any existing props forwarded to `TextInput`
- Move `TextInput` rendering from `ComponentPropsTableRow` into `ComponentPropInput`
- Update `ComponentPropsTableRow` to render `ComponentPropInput` in place of inline `TextInput`
- Update barrel exports

**Dependencies:**

- None.

#### Commits:

| ID                             | Repository / Checkout / Branch  | Policy   | Hash  | Status     |
| ------------------------------ | ------------------------------- | -------- | ----- | ---------- |
| `extract-component-prop-input` | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |

##### Commit: extract-component-prop-input

**Repository:** No Comply

**Message:**

refactor(standard-ui-demo): Extract ComponentPropInput from ComponentPropsTableRow.

---

### Iteration: Add Input Value Validation

**Id:** `add-input-value-validation`

**Status:** `READY`

**Purpose:** Add eager validation using `evaluateValue()` inside `ComponentPropInput` so invalid inputs are caught before propagating changes.

**Description:** Import `evaluateValue` from `@purrtrait/client-tsx` and use it inside `ComponentPropInput` to evaluate the input value as a `TSXNode` via try-catch. On success, call `onChange` with the raw string. On failure, set `TextInput`'s `invalid` prop to `true` and swallow the change — no value reaches the store or the reactive render tree.

**Instructions:** `./instructions/add-input-value-validation.md`

**Changes:**

- Add `compiler` prop to `ComponentPropInput` (the `@purrpose/client-babel` instance)
- Import `evaluateValue` and `TSXNode` from `@purrtrait/client-tsx`
- Import `STATIC_SCOPE` from `$APP/src/app/controllers/RenderExample/constants`
- Add local `invalid` signal state to track validation result
- On input change: construct `TSXNode { type: 'jsx', serialized: inputValue }`, call `evaluateValue(compiler, node, STATIC_SCOPE)` in try-catch
- On success: clear `invalid`, call `onChange(rawString)`
- On failure: set `invalid=true`, do NOT call `onChange`
- Wire `invalid` signal to `TextInput`'s `invalid` prop
- Thread `compiler` prop from `ComponentPropsTableRow` (or its parent) into `ComponentPropInput`

**Dependencies:**

- Iteration: Extract ComponentPropInput must be completed first.

#### Commits:

| ID                           | Repository / Checkout / Branch  | Policy   | Hash  | Status     |
| ---------------------------- | ------------------------------- | -------- | ----- | ---------- |
| `add-input-value-validation` | No Comply / `$PROJECT` / `main` | `NOPUSH` | (TBD) | `AUTHORED` |

##### Commit: add-input-value-validation

**Repository:** No Comply

**Message:**

build(standard-ui-demo): Validate prop inputs with evaluateValue() before propagating changes.

- Use evaluateValue() from @purrtrait/client-tsx to catch invalid JSX values eagerly
- Set TextInput invalid prop on evaluation failure

---

## Work

### Next

Create the `ComponentPropInput` component by extracting the input logic from `ComponentPropsTableRow`. Then add error handling to prevent crashes when invalid prop values are entered.

### Blockers

- None. Evaluation approach resolved (see Findings and Decisions).

---

## Coordination

### Not In Scope

- Changing the overall props table architecture
- Modifications to non-prop inputs
- Server-side prop validation

### Evidence

- Invalid prop input in the props table does not crash the app
- Invalid prop input is reflected through `TextInput`'s `invalid` prop
- `ComponentPropInput` component exists under `$APP/src/app/components/code`

### Findings

- **Crash path is in the render tree, not the input handler** — The stack trace shows: `handleInput` → `setStore` → SolidJS reactivity → `TSXViewTargetPlaceholder.ownProps` → `client-babel.value` → crash. The value is stored first, then evaluated lazily during render via `@purrpose/client-babel`.
- **`evaluateValue()` from `@purrtrait/client-tsx` is suitable for eager validation** — Found in `$APP/src/app/controllers/RenderExample/createRenderExample.ts`. Signature: `evaluateValue(compiler, node: TSXNode, scope)`. Already used to evaluate prop overrides (lines 36–41). Can be called in isolation with try-catch.
- **`STATIC_SCOPE` is available** — Importable from `$APP/src/app/controllers/RenderExample/constants`.
- **`evaluateValue()` path in `createRenderExample.ts` vs render-time crash** — It's unclear whether `evaluateValue()` in `createRenderExample` is a separate call path from the one that crashes in `TSXViewTargetPlaceholder`. Both use the same compiler instance. Investigation deferred as a follow-up.

### Decisions

- **Place new component** under `$APP/src/app/components/code`
- **Use `evaluateValue()` for eager validation** — Call `evaluateValue(compiler, node, STATIC_SCOPE)` inside `ComponentPropInput` with try-catch before calling `onChange`. Invalid values never reach the store or the reactive render tree.
- **Swallow invalid changes** — On evaluation failure, set `TextInput` `invalid` prop to `true` and do NOT call `onChange`. The last valid value remains in the store.
- **Two-iteration split** — First iteration is a pure refactor (extract component, no behavior change). Second iteration adds validation logic. This keeps the refactor verifiable before adding new behavior.

### Knowledge to Update

- Add component documentation to `$APP/_records/project.art` once component is created

### Follow Ups

- **Investigate `evaluateValue()` dual paths** — Clarify whether `evaluateValue()` in `createRenderExample.ts` and the render-time evaluation in `TSXViewTargetPlaceholder` are the same or separate call paths. If separate, the render-time path may still need hardening.
- **Consider shared validation utilities** — If other input components need JSX value validation, extract the try-catch `evaluateValue` pattern into a reusable helper.

### Feedback

- None yet
