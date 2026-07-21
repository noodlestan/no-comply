# Architect Domain

## Types

Types are defined in `_architect/types/`.

| Type              | File                          | Purpose                                 |
| ----------------- | ----------------------------- | --------------------------------------- |
| Bin               | `types/bin.art`               | Named executable command with purpose   |
| License           | `types/license.art`           | Software license in short and long form |
| Package Tool File | `types/package-tool-file.art` | Template-to-target file mapping         |

## Structures

Structures are defined in `_architect/structures/`.

```md
Project
├── version: string
├── namespaces: List (Namespace)
├── packageFile: string
├── scripts: List (Type: Bin)
├── tools: List (Structure: Package Tool)
└── license: Type: License

Namespace
├── description: string
├── path: string
├── packages: List (Package)
├── scripts: List (Type: Bin)
└── tools: List (Structure: Package Tool)

Package
├── version: string
├── language: string
├── path: string
├── packageFile: string
├── scripts: List (Type: Bin)
└── tools: List (Structure: Package Tool)

Package Tool
└── files: List (Type: Package Tool File)
```

## Resources, Structures, and Types

All Structures are defined by `.agents/domains/_artificials/src/language/structures/structure.art` and by `.agents/domains/_artificials/src/language/structures/base.art` (Structure extend Base).

All Records are instances of a kind – a Structure – as defined by their `{kind}: {name}`.

### Inheritance

All Structures extend `Structure: Structure` which extends `Structure: Base`.

Fields are inherited from Base

- `id` – inferrable from heading
- `name` – inferrable from heading
- `kind` – inferrable from heading
- `purpose`
- `description`
- `status`
- `examples`

Fields are inherited from Structure

- `composes` – Another Structure
- `primitive` – PrimitiveName
- `shape` – One of WIP (primitive types)

## Templates

Templates are defined in `_domain/templates/`.

| Template         | File                    | Renders                        |
| ---------------- | ----------------------- | ------------------------------ |
| Namespace README | `namespace-readme.tart` | `README.md` at namespace root  |
| CLI README       | `cli-readme.tart`       | `README.md` inside CLI package |
| Lib README       | `lib-readme.tart`       | `README.md` inside lib package |

## Declaring Records

Records are `.art` files under `_domain/{kind}s/`.

Pattern:

```md
# Module

## {Kind}: {Name}

**Purpose:** ...

**Description:** ...

{structure-specific fields in order}

**{FieldName}:** {value}
```

Rules:

- `id`, `name`, `kind` are inferred from `## {Kind}: {Name}` — do not declare them.
- Fields are declared in the order defined by the Structure shape.
- References to other resources use `{Kind}: {Name}` format.
- Inline types (e.g. Bin) use nested bullet format:

```md
**Scripts:**

- `build`:
  - `command`: npm run build
  - `purpose`: Build for production.
```

- Compound types (e.g. License) use dot notation:

```md
**License.Short**

Copyright (c) 2026 [Noodlestan](https://noodlestan.org/).

**License.Long**

MIT License ...
```
