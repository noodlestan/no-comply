# WIP: Artificials Architecture

## Todo

--

## Developer Routines

We will create a file with many `# Module` / `## Routine: {name}` sections to define a bunch of operations.

But we defined them here first by listing routine name, inputs, outputs, purpose, and a sketch of the procedure they need to execute.

The inputs and outputs will typically be the Structure: Project, Structure: Namespace, or Structure: Package.

The routines should be idempotent (create/update/delete).

Their procedures should be written as much as possible in natural language so that we don't have to specify steps like "if package exists, if not exists" — more describe the desired state.

### Routine: Check Package Path Exists

**Inputs:**

- package: Structure: Project | Structure: Package
- namespace: Structure: Namespace

**Procedure:**

- Check path.
- Create dir if doesn't exist.

### Routine: Apply Package Tool

**Inputs:**

- project: Structure: Project
- tool: Structure: Package Tool
- package: Structure: Package | Structure: Namespace
- namespace?: Structure: Namespace

**Procedure:**

1. If `%namespace` provided:
   1. With `%package` and `%namespace` execute **Routine: Check Package Path Exists**.
2. Combine `%project.tools` and `%namespace.tools` and `%package.tools` in one `%tools-list` following the order list.
3. Create a table of `%files-to-create` with columns: `file` (the target file of each tool), `template` (the template), `tool` (the tool that creates the file).
4. With each `%tool` in `%tool-list` populate the `%table` allowing later values to override previous ones.
5. With each `%file` in `%table` execute the **Routine: Check File Matches Template**.
