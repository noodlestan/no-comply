# Developer WIP

## Routines

### Routine: Check Package Path Exists

**Inputs:**

- `%package`: Structure: Project | Structure: Package
- `%namespace`: Structure: Namespace

**Outputs:**

- `%path`:

**Procedure:**

1. Check directory exists at `%path`.
2. Create dir if doesn't exist.
3. Return `%path`

### Routine: Apply Package Tool

**Inputs:**

- `%project`: Structure: Project
- `%tool`: Structure: Package Tool
- `%package`: Structure: Package | Structure: Namespace
- `%namespace`?: Structure: Namespace

**Procedure:**

1. If `%namespace` provided:
   1. With `%package` and `%namespace` execute **Routine: Check Package Path Exists**.
2. Combine `%project.tools` and `%namespace.tools` and `%package.tools` in one `%tools-list` following the order list.
3. Create a table of `%files-to-create` with columns: `file` (the target file of each tool), `template` (the template), `tool` (the tool that creates the file).
4. With each `%tool` in `%tool-list` populate the `%table` allowing later values to override previous ones.
5. With each `%file` in `%table` execute the **Routine: Check File Matches Template**.
