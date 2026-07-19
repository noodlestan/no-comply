# Artificial Language

### Primitive Fields

#### Rules

**Rules**

<!-- WIP -->

#### Purpose

**Purpose:** Declare the purpose as a single sentence describing what the process achieves.

**Syntax:**

```
**Purpose:** {Description of what the process achieves.}
```

#### Syntax

**Purpose:** Define syntax.

**Syntax:**

```
**Syntax:**

{description}

{code block}
```

<!-- WIP -->

#### Example

**Purpose:**: Provide one main example.

**Syntax:**

```
**Example:**

[{optional description}]

{codeblock}
```

#### Examples

**Purpose:**: Provide several examples.

**Syntax:**

```
**Examples:**

{description}

{codeblock}
```

#### Inputs

**Purpose:**: Define inputs with symbol names and descriptions.

**Syntax:**

```
**Inputs:**

- `<input-name>`: {Description of the input}.
- `<another-input>`: {Description of the input}.
```

**Example:**

```
**Inputs:**

- `task summary`: The task summary as captured from the user.
- `project scope`: The project scope for the task.
```

#### Outputs

Declare outputs as a list with backticked symbol names and descriptions.

**Syntax:**

```
**Outputs:**

- `<output-name>`: {Description of the output}.
```

**Example:**

```
**Outputs:**

- `task title`: A stable, scoped task title.
- `task id`: A kebab-case task identifier.
```

#### Important

Use `**Important:**` or `- IMPORTANT RULE:` for critical instructions that must not be skipped.

**Example:**

```
**Important:** <!-- WIP -->.
```

#### Triggers

Declare triggers as a bulleted list of conditions that activate the command.

The first trigger is listed for discoverability.

**Syntax:**

```
**Triggers:**

- When the user says `{trigger phrase}`.
- When the instructions contain `{trigger phrase}`.
```

**Example:**

```
**Triggers:**

- When the user says `show parking lot`.
- When the user says `parking lot`.
```

#### Before Executing

Define pre-execution instructions, typically pre-condition checks.

**Syntax:**

```
**Before executing:**

{procedural block}
```

**Example:**

```
**Before executing:**

With the provided `task`, execute the following steps:

1. Identify the concrete task writing skill being used.
2. If no concrete skill is loaded, identify the nature of the task and read the skill list.
```

### Routines

#### Processes

**Syntax:**

```
Process for {Infinitive Verb} {Target|Outcome}
```

**Examples:**

- Process for Generating Task Titles
- Process for Writing Task Files
- Process for Reading References Files
- Process for Extracting Domain API

Rules:

- Start with "Process for" (always).
- Use infinitive verb after "for" (Generating, Writing, Reading, Extracting).
- Use title case for the rest.
- Target or Outcome should be specific and descriptive.

#### Commands

**Syntax:**

```
Command: {Command Name} ({params})
```

**Examples:**

- Command: Show Parking Lot Column (column)
- Command: Add to Parking Lot Column (item, column)
- Command: Update Agents

Rules:

- Start with "Command:" (always).
- Use title case for the command name.
- Parameters in parentheses, kebab-case, comma-separated.
- Parameters are optional if the command has no inputs.

##### Command Parameters

**Syntax:**

```
{param}, {param}
```

**Examples:**

- `column`
- `item, column`
- `resource, target`
- `files, resource-names`

Rules:

- Always kebab-case.
- Comma-separated when multiple.
- Use descriptive names that match the input type.

#### Templates

<!-- WIP -->

#### Files

<!-- WIP -->

## Diagram

```
Language
├── Grammar
│   └── ...
├── Primitive Fields
│   ├── Purpose
│   ├── Description
│   ├── Syntax
│   ├── Rules
│   ├── Example
│   ├── Examples
│   ├── Inputs
│   ├── Outputs
│   ├── Important
│   ├── Triggers
│   └── Before Executing
├── Modules
│   ├── Dependencies
│   │   ├── Mandatory Reading Directive
│   │   ├── Suggested Reading Directive
│   │   └── Reactive Reading Directive
│   └── Declarations
│       └── Resources
│       └─── Routines
├── Routines
│   ├── Processes
│   ├── Commands
│   │   └── Command Parameters
│   ├── Templates
│   └── Files
└── Reference
    ├── Processing Input
    ├── Invoking Commands
    ├── Invoking Processes
    ├── Invoking Templates
    ├── General Statement Rules
    └── Rules for Formatting Statements
```
