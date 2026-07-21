# Art Language Guide

## What Is Art

Art is a structured markdown format for defining domain models, project structures, and agent instructions. It provides a consistent way to declare resources, types, and relationships that can be parsed, validated, and transformed.

Art files (`.art`) are the source of truth. Templates (`.tart`) generate outputs from them. Together, they enable artificial-driven development.

## Use Cases

### 1. Project Structure Definition

Define your project's structure in `.art` files — packages, tools, scripts, licenses — and the toolchain generates everything else: READMEs, package.json, directory scaffolding, CI configs.

```
Domain: Project records → Toolchain → Generated files
```

### 2. Agent Instruction Modelling

Define agent instructions that model an entire domain. Art files capture the structures, types, and routines that an agent needs to understand and operate within a domain.

```
Domain: Structures + Types + Routines → Agent context
```

### 3. Agent Output Generation

Use Art and Tart to generate specific instructions for AI agents that:

- **Consume data** from the domain — compact, read-only context for agents that need to understand but not modify
- **Produce data** in the domain — detailed, write-enabled instructions for agents that create or update records

```
Compact agent: Domain → Art → Minimal context → Read-only tasks
Detailed agent: Domain → Art → Full context → Write tasks
```

## File Types

| Extension | Purpose | Example |
|---|---|---|
| `.art` | Resource definitions — structures, types, records, routines | `project.art`, `bin.art` |
| `.tart` | Templates — generate outputs from records | `namespace-readme.tart` |
| `.md` | Guides, WIPs, context files | `_guide.md`, `_wip.md` |

## Conventions

- Resources declare themselves with `## {Kind}: {Name}` headings
- Fields follow `**Field:** value` patterns
- Types compose via `List (Type: X)` or `Structure: Y` references
- Templates use `{{%field}}` interpolation and `::TEMPLATE for each` loops
