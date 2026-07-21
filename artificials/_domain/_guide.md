# Artificials Domain Guide

## What Is This

Artificials is the project that builds the Art language toolchain — parsers, validators, compilers, bundlers, and developer tools. This domain holds the **source of truth** for the project structure: what exists, what it does, and how it's organised.

Everything here is machine-readable. The README, package manifests, and directory scaffolding are all generated from these records.

## Directory Layout

```
artificials/
├── _architect/          # Meta-model: structures, types, conventions
│   ├── structures/      # Structure definitions (Project, Namespace, Package, Package Tool)
│   ├── types/           # Type definitions (Bin, License, Package Tool File)
│   ├── _guide.md        # Architect conventions and diagrams
│   └── _wip.md          # Pending work
│
├── _domain/             # Records: instances of structures
│   ├── projects/        # Project records
│   ├── namespaces/      # Namespace records
│   ├── packages/        # Package records (libs + CLIs)
│   ├── tools/           # Tool records (file generators)
│   ├── templates/       # Tart templates for generating files
│   ├── _guide.md        # This file
│   └── _wip.md          # Pending work
│
└── README.md            # Generated from namespace-readme.tart + records
```

## The Meta-Model

There are three layers:

### Types

Primitive building blocks. Defined in `_architect/types/`.

| Type | Fields | Purpose |
|---|---|---|
| Bin | `command`, `purpose` | A named executable script |
| License | `short`, `long` | Software license in two forms |
| Package Tool File | `template`, `target` | Maps a template to its output file |

### Structures

Compositions of types and other structures. Defined in `_architect/structures/`.

```
Project       → version, namespaces, packageFile, scripts (Bin), tools (Package Tool), license (License)
Namespace     → description, path, packages, scripts (Bin), tools (Package Tool)
Package       → version, language, path, packageFile, scripts (Bin), tools (Package Tool)
Package Tool  → files (Package Tool File)
```

All structures inherit from `Structure: Base` (via `Structure: Structure`), which provides: `id`, `name`, `kind`, `purpose`, `description`, `status`, `examples`.

### Records

Instances of structures. Defined in `_domain/{kind}s/`.

Each record is a `.art` file with a heading `## {Kind}: {Name}`. The `id`, `name`, and `kind` are inferred from the heading — never declared as fields.

## How to Read a Record

1. Open the `.art` file.
2. Read the heading: `## {Kind}: {Name}` → this is the id, name, kind.
3. Read fields in order. Each field is a `**Field:** value` block.
4. Nested types use indentation:
   - Bin: `` - `name`:\n  - `command`: ...\n  - `purpose`: ... ``
   - License: `**License.Short**` / `**License.Long**`
5. References to other resources use `{Kind}: {Name}` format.

## How to Modify Records

1. Identify the record file: `_domain/{kind}s/{id}.art`
2. Read the structure definition in `_architect/structures/{kind}.art` to know the fields.
3. Edit the record, keeping fields in structure order.
4. Never add `id`, `name`, or `kind` fields — they come from the heading.

## How Templates Work

Templates in `_domain/templates/` generate files from records.

- `{{%field}}` — interpolate a field value
- `{%field}` — raw interpolation
- `::TEMPLATE for each` — loop over a list
- `::TEMPLATE make` — filter a list
- `::END` — close a loop

Templates reference record fields directly (e.g. `%package.name`, `%namespace.description`).

## How Tools Work

Tools in `_domain/tools/` define file generation rules. Each tool has a list of files, each with a `template` (source) and `target` (output path).

Tools are applied hierarchically: project tools → namespace tools → package tools. Later values override earlier ones.

## Relationships

```
Project
  └── has many Namespaces
        └── has many Packages
              └── have many Scripts (Bin)
              └── have many Tools (Package Tool)
                    └── have many Files (Package Tool File)
```

Project also has: scripts, tools, license.
Namespace also has: scripts, tools.
