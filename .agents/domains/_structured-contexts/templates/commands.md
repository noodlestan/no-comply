# Structured Contexts Commands

## Commands

WARNING: This file defines templates and commands needed for generating Command Sections in context files. These are not real commands.

<!-- WIP convert to examples to templates -->

## Command Examples

Choose the approriate example:

- no parameters or output? `Example: Simple Command`

### Example: Simple Command

**Purpose:** This command generates a validated entity.

**Triggers:**

- When the instructions say `Use the **Simple Command** command to {purpose of invocation}`.

**Process:**

1. Execute the **Process 1 Name** to generate a {output of process 1 classified as per use in Simple Command}.
2. With {output of process 1}, execute the **Process 2 Name** to generate a {output of process 2 classified as per use in Simple Command}.
3. ... further processing instructions

- RULE: eventual imperative rule to check, validate, ensure...

### Example: Command with Inputs (summary)

**Purpose:** Given a summary, perform operation A and B on a M.

**Inputs:**

- `summary`: The entity summary as captured from another entity.

**Triggers:**

- When the instructions say `With the {identifier for inputs}, use the **Command with Inputs** command to {purpose of invocation}`.

**Process:**

1. Identify the `summary` to process.
2. If no explicit summary is defined, infer the entity scope from the most recent context and summarise it now.
3. If unable to determine an entity scope with confidence, ALERT the user and STOP processing any further instructions.
4. With the identified summary, execute the **Process 1 Name** to generate a {output of process 1 classified as per use in Simple Command}.
5. With {output of process 1}, execute the **Process 2 Name** to generate a {output of process 2 classified as per use in Simple Command}.
6. ... further processing instructions

- RULE: eventual imperative rule to check, validate, ensure...

### Example: Command with Inputs and Outputs (summary)

**Purpose:** This command generates a validated entity from an entity summary.

**Inputs:**

- `summary`: The entity summary as captured from another entity.

**Outputs:**

- `validated entity`: The entity with details expanded and validated.

**Triggers:**

- When the instructions say `With the {identifier for inputs}, use the **Command with Inputs and Outputs** to generate a {identified for outputs in this context}`.

**Process:**

1. Identify the `summary` to process.
2. If no explicit summary is defined, infer the entity scope from the most recent context and summarise it now.
3. If unable to determine an entity scope with confidence, ALERT the user and STOP processing any further instructions.
4. With the identified summary, execute the **Process 1 Name** to generate a {output of process 1 classified as per use in Simple Command}.
5. ... further processing instructions

- RULE: eventual imperative rule to check, validate, ensure...

6. Yield the validated {output of process 2}.
