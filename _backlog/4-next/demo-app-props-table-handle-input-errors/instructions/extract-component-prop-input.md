# Instructions: `extract-component-prop-input`

**Plan:** `demo-app-props-table-handle-input-errors`

**Iteration Id:** `extract-component-prop-input`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-demo-app-props-table-handle-input-errors/instructions/extract-component-prop-input__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `extract-component-prop-input`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable     | Resolved Path                    | Purpose                              |
| ------------ | -------------------------------- | ------------------------------------ |
| `$WORKSPACE` | Current working directory        | Workspace root directory.            |
| `$PROJECT`   | Provided with prompt             | Repository root for all code changes |
| `$APP`       | `$PROJECT/apps/standard-ui-demo` | Demo application                     |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `extract-component-prop-input`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Extract the `TextInput` usage from `ComponentPropsTableRow` into a new standalone `ComponentPropInput` component. This is a pure refactor — no behavior change. The component accepts the same props and calls `onChange` on every input, exactly as `ComponentPropsTableRow` does today.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Workspace operations, setting up, and verification.

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

Run from the `$PROJECT` root:

```bash
npm run ci # lint, build and test
```

---

## Changes

Extract `TextInput` from `ComponentPropsTableRow` into a new `ComponentPropInput` component, update the parent to use it, and wire barrel exports.

- Step 1 / 3 — Create `ComponentPropInput` component
- Step 2 / 3 — Update `ComponentPropsTableRow` to use `ComponentPropInput`
- Step 3 / 3 — Commit `extract-component-prop-input`

## Steps

### Step `1 / 3` — Create `ComponentPropInput` component

Create a new file at `$APP/src/app/components/code/ComponentPropInput/ComponentPropInput.tsx`.

The component should:

- Accept the same props that `ComponentPropsTableRow` currently passes to `TextInput` for prop value editing: `value`, `onChange`, and any other relevant props (e.g., `size`).
- Render a `TextInput` with those props forwarded.
- Export the component from its own barrel file at `$APP/src/app/components/code/ComponentPropInput/index.ts`.

Reference: look at the current `TextInput` usage in `$APP/src/app/screens/ApiScreen/pages/ApiComponentPage/parts/ComponentPropsTableRow/ComponentPropsTableRow.tsx` to identify the exact props being passed.

Update the barrel file at `$APP/src/app/components/code/index.ts` to export `ComponentPropInput`.

### Step `2 / 3` — Update `ComponentPropsTableRow` to use `ComponentPropInput`

In `$APP/src/app/screens/ApiScreen/pages/ApiComponentPage/parts/ComponentPropsTableRow/ComponentPropsTableRow.tsx`:

- Import `ComponentPropInput` from `$APP/src/app/components/code`.
- Replace the inline `TextInput` usage for prop value editing with `<ComponentPropInput>`.
- Pass the same props that were previously passed to `TextInput`.
- Verify the component renders identically — this is a pure refactor with no behavior change.

---

#### Commit: `extract-component-prop-input`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
refactor(standard-ui-demo): Extract ComponentPropInput from ComponentPropsTableRow.
```

---

## Final Verification

**Instructions:**

- Verify that the commit has been executed and NOT pushed, per the `NOPUSH` policy.
- Verify that `ComponentPropInput` component exists at `$APP/src/app/components/code/ComponentPropInput/ComponentPropInput.tsx`.
- Verify that `ComponentPropInput` is exported from the `$APP/src/app/components/code/` barrel.
- Verify that `ComponentPropsTableRow` imports and renders `ComponentPropInput` instead of an inline `TextInput`.
- Verify the app still renders prop inputs identically (no behavior change).
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
