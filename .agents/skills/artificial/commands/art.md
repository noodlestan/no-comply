# Artificial Source Code Command

**Purpose:** Instruct agents to interpret `.art` files as regular agent instruction markdown files (written in the "artificial" programming language).

## Mandatory Reading

::READ `.agents/domains/_artificials/definitions/index.md` - declares processes to format references to artificial procedures such as commands, processes, and templates.

## Global Triggers and Rules

### Rule: Reading .art Files

**Triggers:**

- When reading any `.art` file.
- When encountering a `::READ` directive.

IMPORTANT: `::READ` is an instruction for agents reading instructions from `.art` files, and not just an annotation mechanism.

**Procedure:**

1. Identify the file being read as `%file`.
2. Identify `%file` and its entire contents as interpretation prerequisite.
3. STOP processing all other instructions, and avoid Premature Synthesis when executing the next step.
4. Execute the **Routine: Read Mandatory File** with the `%file` to full the prerequisite.
5. Continue

## Commands

### Command: `::art`

**Purpose:** Load artificial language vocabulary and teach the agent how to interpret `.art` files as instructions , their execution prerequisites, and their reading directives.

**Triggers:**

- When the user says `::art`.

**Procedure:**

1. ::READ `.agents/domains/_artificials/src/language/grammar/vocabulary/vocabulary.art`
2. ::READ the "## Rules for Interpreting `.art` Files." section above and apply these rules for the rest of the session.

### Command: `::dev`

**Triggers:**

- When the user says `::dev`.

**Procedure:**

1. Execute the above Command: `::art`.
2. ::READ `.agents/domains/_artificials/src/language/grammar/**/*.art`.
