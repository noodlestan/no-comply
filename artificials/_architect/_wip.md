# WIP: Artificials Architecture

## Todo

--

## Developer Routines

See examples in `artificials/_developer/_wip.md`

We will create a file with many `# Module` / `## Routine: {name}` sections to define a bunch of operations.

But we defined them here first by listing routine name, inputs, outputs, purpose, and a sketch of the procedure they need to execute.

The inputs and outputs will typically be the Structure: Project, Structure: Namespace, or Structure: Package.

The routines should be idempotent (create/update/delete).

Their procedures should be written as much as possible in natural language so that we don't have to specify steps like "if package exists, if not exists" — more describe the desired state.
