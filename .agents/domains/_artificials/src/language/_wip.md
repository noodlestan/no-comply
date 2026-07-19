# Artificial Language

## Diagram

```
Language
├── Grammar
│   └── ...
├── Modules
│   └── ...
├── Primitives
│   ├── Enum
│   ├── List
│   ├── Record
│   └── Scalar
└── Structures
    ├── Primitive
    └── Structure
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
