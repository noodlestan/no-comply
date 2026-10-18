# Instructions: `add-input-value-validation`

**Plan:** `demo-app-props-table-handle-input-errors`

**Iteration Id:** `add-input-value-validation`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `demo-app-props-table-handle-input-errors/instructions/add-input-value-validation__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-input-value-validation`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-input-value-validation`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add eager input value validation to `ComponentPropInput` using `evaluateValue()` from `@purrtrait/client-tsx`. Invalid values must be caught before they propagate — on failure, set `TextInput`'s `invalid` prop to `true` and do NOT call `onValueChange`. This prevents the app crash that currently occurs when invalid JSX values reach the render tree via `@purrpose/client-babel`.

## Mandatory Reading

::READ `$WORKSPACE/_guide.md` (Guide) — Workspace operations, setting up, and verification.

Reference files to understand the evaluation pattern:

- `$APP/src/app/controllers/RenderExample/createRenderExample.ts` — Shows how `evaluateValue()` is used with `compiler`, `TSXNode`, and `STATIC_SCOPE` (the `TSXNode` override construction in `wrapperProps`).
- `$APP/src/app/controllers/RenderExample/constants.ts` — Exports `STATIC_SCOPE`.

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

Add `evaluateValue()` validation inside `ComponentPropInput` to catch invalid JSX values eagerly and surface feedback via `TextInput`'s `invalid` prop.

- Step 1 / 4 — Add `compiler` prop to `ComponentPropInput`
- Step 2 / 4 — Add validation logic with `evaluateValue()`
- Step 3 / 4 — Lift the compiler to `ComponentPlaygroundSection` and thread it into `ComponentPropInput`
- Step 4 / 4 — Commit `add-input-value-validation`

## Steps

### Step `1 / 4` — Add `compiler` prop to `ComponentPropInput`

In `$APP/src/modules/props/components/ComponentPropsTable/parts/ComponentPropInput/ComponentPropInput.tsx`:

- Add an optional `compiler?: CompilerAPI` prop to the component's props type (import the type from `$APP/src/modules/TSXCompilerModule`, using a relative path). It is the compiler instance used for JSX evaluation. It is optional because it loads asynchronously; when it is `undefined`, skip validation and forward the change unchanged.
- Import `evaluateValue` and `TSXNode` from `@purrtrait/client-tsx`.
- Import `STATIC_SCOPE` from `$APP/src/app/controllers/RenderExample` (relative path from the component: `../../../../../../app/controllers/RenderExample`).

Reference the usage in `createRenderExample.ts` for the import paths and types:

```ts
import { type TSXNode, evaluateValue } from '@purrtrait/client-tsx';
```

### Step `2 / 4` — Add validation logic with `evaluateValue()`

In `ComponentPropInput`, implement the validation flow:

1. Add a local signal to track invalid state:

   ```ts
   const [invalid, setInvalid] = createSignal(false);
   ```

2. Wrap the `onValueChange` handler. When the user types a value:
   - If `props.compiler` is `undefined`, call `props.onValueChange(inputValue)` and return.
   - Construct a `TSXNode` from the raw input string:
     ```ts
     const node: TSXNode = { type: 'jsx', serialized: inputValue } as TSXNode;
     ```
   - Attempt evaluation in a try-catch:
     ```ts
     try {
       evaluateValue(props.compiler, node, STATIC_SCOPE);
       setInvalid(false);
       props.onValueChange(inputValue);
     } catch {
       setInvalid(true);
       // Do NOT call props.onValueChange — swallow the invalid change
     }
     ```

3. Wire the `invalid` signal to `TextInput`'s `invalid` prop (supported via the input state mixin):
   ```ts
   <TextInput invalid={invalid()} ... />
   ```

**Key behavior:** The last valid value remains in the store. The user sees the `TextInput` marked as invalid and can correct their input. Once the input evaluates successfully, the invalid state clears and `onValueChange` fires.

### Step `3 / 4` — Lift the compiler and thread it into `ComponentPropInput`

Today the compiler is created inside `PlaygroundExample` (a resource), which is a sibling of `PlaygroundProps`. Both live under `ComponentPlaygroundSection`. Lift the single compiler instance to the section and pass it to both. All paths below are relative to `$APP/src/app/screens/ComponentsScreen/components/sections/ComponentPlaygroundSection/` unless stated otherwise.

1. In `ComponentPlaygroundSection.tsx`: move the compiler `createResource` (the dynamic `import(.../modules/TSXCompilerModule)` + `createTSXCompilerModule().createCompiler()`) out of `parts/PlaygroundExample/PlaygroundExample.tsx` and create it here. Pass `compiler={compiler}` to both `<PlaygroundExample />` and `<PlaygroundProps />`. Type the prop as `Accessor<CompilerAPI | undefined>` (the resource accessor satisfies it).
2. In `parts/PlaygroundExample/PlaygroundExample.tsx`: remove the local `createResource`, add a `compiler: Accessor<CompilerAPI | undefined>` prop, and use `props.compiler()` where `compiler()` is used today. Keep rendering behavior identical.
3. In `parts/PlaygroundProps/PlaygroundProps.tsx`: add the same `compiler` prop and pass `compiler={props.compiler}` to `<ComponentPropsTable />`.
4. In `$APP/src/modules/props/components/ComponentPropsTable/parts/types.tsx` and in the local `Props` types of `ComponentPropsTableGroup.tsx` and `ComponentPropsTableRow.tsx`: add `compiler?: Accessor<CompilerAPI | undefined>`. `ComponentPropsTable` spreads its props into the group and the group spreads into the row, so no other forwarding code is needed.
5. In `ComponentPropsTableRow.tsx`: pass `compiler={props.compiler?.()}` to `<ComponentPropInput />`.

If, once you read these files, the structure differs materially from this description so that the compiler cannot be threaded this way, **REPORT A BLOCKER**.

---

#### Commit: `add-input-value-validation`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(standard-ui-demo): Validate prop inputs with evaluateValue() before propagating changes.

- Use evaluateValue() from @purrtrait/client-tsx to catch invalid JSX values eagerly
- Set TextInput invalid prop on evaluation failure
```

---

## Final Verification

**Instructions:**

- Verify that the commit has been executed and NOT pushed, per the `NOPUSH` policy.
- Verify that `ComponentPropInput` accepts a `compiler` prop and that `PlaygroundExample` still renders the preview using the lifted compiler.
- Verify that typing an invalid JSX value in a prop input does NOT crash the app.
- Verify that typing an invalid JSX value marks the `TextInput` as invalid.
- Verify that typing a valid JSX value after an invalid one clears the invalid state and propagates the change.
- Verify that the last valid value remains in the store when an invalid value is entered.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
