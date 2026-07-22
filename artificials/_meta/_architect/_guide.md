# Architect Domain

We are modelling an architecture domain (for now, for small monorepos, later for other and bigger architectural components).

## Modules

Each `_architect/{folder}` is a module — a self-contained set of structures, types, or routines for a specific concern.

- **Project** — Structures and types for modelling monorepo projects: Project, Namespace, Package, Package Tool; Bin, License, Package Tool File.
- **Design** — Routines for drafting routine specifications from process descriptions.

## Structures

| Module  | Structure    | File                                  | Purpose                                    |
| ------- | ------------ | ------------------------------------- | ------------------------------------------ |
| Project | Project      | `project/structures/project.art`      | Runnable or publishable unit               |
| Project | Namespace    | `project/structures/namespace.art`    | Grouping of packages under shared identity |
| Project | Package      | `project/structures/package.art`      | Publishable library or CLI                 |
| Project | Package Tool | `project/structures/package-tool.art` | Tool that generates files from templates   |

## Types

| Module  | Type              | File                                  | Purpose                                 |
| ------- | ----------------- | ------------------------------------- | --------------------------------------- |
| Project | Bin               | `project/types/bin.art`               | Named executable command with purpose   |
| Project | License           | `project/types/license.art`           | Software license in short and long form |
| Project | Package Tool File | `project/types/package-tool-file.art` | Template-to-target file mapping         |

## Routines

| Module | Routine         | File                                  | Inputs                           | Outputs               | Purpose                                        |
| ------ | --------------- | ------------------------------------- | -------------------------------- | --------------------- | ---------------------------------------------- |
| Design | Design Routines | `design/routines/design-routines.art` | `%processDescription`, `%domain` | `%routines`, `%types` | Draft routine specs from a process description |

## How Tools Work

Tools in `_domains/monorepo/tools/` define file generation rules. Each tool has a list of files, each with a `template` (source) and `target` (output path).

**Tool resolution:** project tools → namespace tools → package tools. Each level adds to the list (additive cascade). The namespace level may be empty — routines must be resilient to undefined tools at any level.

**Responsibility:** Tool generation is executed by developer routines in `artificials/_meta/_developer/generate/`. The architect defines *which* tools exist and *where* they attach (project, namespace, or package). The developer routines resolve and apply them.
