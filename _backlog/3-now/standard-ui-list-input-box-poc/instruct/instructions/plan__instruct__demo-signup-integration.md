# Implementation Instructions

**Plan:** `standard-ui-list-input-box-poc`

**Id:** `demo-signup-integration`

You are a sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Wire the `ListInputBox` component into the `SignupForm` in the `standard-ui-demo` application. Add a list/select field (e.g. "How did you hear about us?") using `ListInputBox`, wire the value state into the existing `signupData` signal, and verify the full flow: open popover → navigate → select → confirm → close → submit.

This is the last-mile integration that validates the complete POC stack works end-to-end.

## Mandatory Reading

- required skill: `pair-programmer`
- patterns: Read the existing `SignupForm` at `no-comply/apps/standard-ui-demo/src/app/screens/AppHomeScreen/forms/SignupForm/SignupForm.tsx` and its `types.ts` — you need to understand the existing form structure and data type.
- patterns: Read the existing field components in `no-comply/apps/standard-ui-demo/src/app/screens/AppHomeScreen/fields/` to understand how form fields are structured in this demo.
- patterns: Read the `ListInputBox` component at `no-comply/libs/standard-ui/src/input/components/ListInputBox/ListInputBox.tsx` and `types.ts` for the API contract.
- types: `no-comply/libs/standard-ui/src/input/components/ListInputBox/types.ts` for `ListInputBoxProps`.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

All changes land in `no-comply/apps/standard-ui-demo/` (package root: `standard-ui-demo/`).

1. Update `src/app/screens/AppHomeScreen/forms/SignupForm/types.ts` — add `referralSource` field to `SignupData`.
2. Update `src/app/screens/AppHomeScreen/forms/SignupForm/SignupForm.tsx` — add a `ListInputBox` field for referral source.
3. Wire value state into `signupData` signal.
4. Add the field to the form layout.

## Rules

- RULE: Use the same code style as the existing `SignupForm` component.
- RULE: Import `ListInputBox` from `@no-comply/standard-ui`.
- RULE: Follow the existing field pattern (see how `CreateUsernameField` and `CreatePasswordField` are used).
- RULE: Define a `referralSources` constant with example options (e.g. "Search engine", "Social media", "Friend", "Advertisement", "Other").
- RULE: Use `children` render prop to render item labels, and `selectedItem` render prop to show selected value in the trigger.
- RULE: Add the new field before the password fields in the form layout.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## How to Report Back" section.

## Steps

Step 1. Update the types to include the new field.

Step 2. Update the form component.

### Step 1 — Update `SignupForm/types.ts`

Add `referralSource` to the `SignupData` type:

```typescript
export type SignupData = {
  email: string;
  password: string;
  referralSource: string;
};
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/apps/standard-ui-demo`.
- Execute `npm run build` in `no-comply/apps/standard-ui-demo`.

### Step 2 — Update `SignupForm/SignupForm.tsx`

Add the `ListInputBox` field for referral source. The changes are:

1. Import `ListInputBox` from `@no-comply/standard-ui`.

2. Add a `referralSources` constant (can be defined inside the component or as a module-level constant).

3. Add a `handleReferralSourceChange` handler.

4. Add the field to the form layout inside the existing `Flex` columns.

Here is the key integration snippet:

**Import addition:**
```typescript
import { Button, Callout, Flex, Form, ListInputBox } from '@no-comply/standard-ui';
```

**Constant (inside component or module scope):**
```typescript
const REFERRAL_SOURCES = [
  'Search engine',
  'Social media',
  'Friend or colleague',
  'Advertisement',
  'Other',
];
```

**Handler:**
```typescript
const handleReferralSourceChange = (value: string) =>
  setSignupData(prev => ({
    ...prev,
    referralSource: value,
  }));
```

**Field JSX (add after the username field, before the password fields):**
```tsx
<ListInputBox
  items={() => REFERRAL_SOURCES}
  value={() => signupData().referralSource}
  onValueChange={handleReferralSourceChange}
  selectedItem={({ key }) => <span>{key}</span>}
>
  {({ key }) => <span>{key}</span>}
</ListInputBox>
```

The full file after changes should look like this structure:

```tsx
import { Button, Callout, Flex, Form, ListInputBox } from '@no-comply/standard-ui';
import { type Component, Show, createSignal } from 'solid-js';

import { ConfirmPasswordField, CreatePasswordField, CreateUsernameField } from '../../fields';
import { mockSubmit } from './private';
import type { SignupData } from './types';

const REFERRAL_SOURCES = [
  'Search engine',
  'Social media',
  'Friend or colleague',
  'Advertisement',
  'Other',
];

type Props = {
  onCancel: () => void;
  onComplete: () => void;
};

export const SignupForm: Component<Props> = props => {
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitError, setSubmitError] = createSignal<Error>();
  const [signupData, setSignupData] = createSignal<Partial<SignupData>>({});
  const [confirmPassword, setConfirmPassword] = createSignal<string>();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await mockSubmit(signupData() as SignupData);
      props.onComplete();
    } catch (error) {
      setSubmitError(error as Error);
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => props.onCancel();

  const handleUsernameChange = (value: string) =>
    setSignupData(prev => ({ ...prev, username: value }));

  const handlePasswordChange = (value: string) =>
    setSignupData(prev => ({ ...prev, password: value }));

  const handleReferralSourceChange = (value: string) =>
    setSignupData(prev => ({ ...prev, referralSource: value }));

  return (
    <Form pending={isSubmitting()} onSubmit={handleSubmit}>
      {({ form }) => (
        <Flex direction="column" gap="l">
          <Button onPress={handleCancel}>close</Button>
          <Flex direction="column" gap="m">
            <CreateUsernameField
              value={signupData().email}
              onValueChange={handleUsernameChange}
            />

            {/* New ListInputBox field */}
            <ListInputBox
              items={() => REFERRAL_SOURCES}
              value={() => signupData().referralSource}
              onValueChange={handleReferralSourceChange}
              selectedItem={({ key }) => <span>{key}</span>}
            >
              {({ key }) => <span>{key}</span>}
            </ListInputBox>

            <CreatePasswordField
              value={signupData().password}
              onValueChange={handlePasswordChange}
            />
            <ConfirmPasswordField
              value={confirmPassword()}
              onValueChange={setConfirmPassword}
            />
          </Flex>
          <Flex direction="column" gap="m">
            <Button {...form.$submitButton}>Submit</Button>
            <Show when={submitError()}>
              <Callout
                title={submitError()?.message as string}
                variant="warning"
                summary="Lorem ipsum"
              />
            </Show>
          </Flex>
        </Flex>
      )}
    </Form>
  );
};
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/apps/standard-ui-demo`.
- Execute `npm run build` in `no-comply/apps/standard-ui-demo`.

## Final Verification

**Sanity check**
Verify that the `SignupForm` compiles and renders with the new `ListInputBox` field. Confirm that the referral source value is included in the submitted `SignupData` object.

**Verification steps**
1. Execute `npm run build` in `no-comply/apps/standard-ui-demo`.
2. Execute `npm run lint` in `no-comply/apps/standard-ui-demo`.
3. Verify the full flow mentally: user opens SignupForm → clicks on ListInputBox → popover opens with referral sources → navigates with arrows → selects an option → popover closes → value is set in signal → submits form.

## How to Report Back to the Delegator

1. Summarise the current context, asking:
   - Are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read `.agents/domains/plans/report_template.md` and follow the directives there.

4. Generate the response and send it back to the delegator.

Thank you for your service.
