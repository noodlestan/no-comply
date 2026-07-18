# Artificial Structures

<!-- WIP make sure these definitions are available in .agents/domains/_artificials/discovery/grammar.md : StructureField -->

## Mandatory Reading

READ: `.agents/domains/_artificials/definitions/index.md` - Essential definitions for understanding context files and artificial resources.

READ: `.agents/domains/_artificials/discovery/grammar.md` - Essential definitions for understanding artificial grammar and how structures are expressed in artificial source code.

## Structures

### Structure: StructureField

**id:** structure-field

**description:** A named element within a structure, with a description and optional group membership.

**status:** wip

**fields:**

- `id` – kebab case representation of the field name.
- `name` – The human-readable field name.
- `description` – A short description of the field.

**examples:**

- This file: `id` field in Structure: Structure
- This file: `description` field in Structure: Structure
- `.agents/domains/_artificials/structures/command__structure.md`: `triggers` field in Structure: Command

### Structure: Structure

**id:** structure

**description:** This structure defines the shape of a structure resource (like itself).

**status:** wip

**fields:**

- `id` – kebab case representation of the structure name.
- `name` – The human-readable structure name.
- `description` – A short description of what the structure defines.
- `status` – One of `active`, `wip`, `broken`, `deprecated`.
- `fields` – A list of StructureField records in the structure.
- `examples` – A list of example values for the structure.

**examples:**

- This file (self-referential)
- `.agents/domains/_artificials/structures/command__structure.md`
- `.agents/domains/tasks/structures/task__structure.md`
